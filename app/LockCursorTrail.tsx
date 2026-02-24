"use client";

import {
  motion,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const WORDS = ["trust", "enter", "studio", "access", "key", "open", "vault"];
const TRAIL_LENGTH = 16;

type TrailPoint = {
  id: number;
  x: number;
  y: number;
  char: string;
};

let idCounter = 0;

export default function LockCursorTrail() {
  const [points, setPoints] = useState<TrailPoint[]>([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isNearLock, setIsNearLock] = useState(false);
  const [isHoveringLock, setIsHoveringLock] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.6 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.6 });

  const lockControls = useAnimation();
  const textControls = useAnimation();

  const currentWord = useMemo(() => WORDS[wordIndex % WORDS.length], [wordIndex]);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      mouseX.set(x);
      mouseY.set(y);

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2.3;
      const dx = x - centerX;
      const dy = y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      setIsNearLock(distance < 180);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const interval = setInterval(() => {
      const x = smoothX.get();
      const y = smoothY.get();

      const char = currentWord[charIndex] ?? " ";

      setPoints((prev) => {
        const next: TrailPoint[] = [
          { id: idCounter++, x, y, char },
          ...prev,
        ].slice(0, TRAIL_LENGTH);
        return next;
      });

      // advance character/word
      const nextCharIndex = charIndex + 1;
      if (nextCharIndex >= currentWord.length) {
        setCharIndex(0);
        setWordIndex((w) => (w + 1) % WORDS.length);
      } else {
        setCharIndex(nextCharIndex);
      }
    }, 260);

    return () => clearInterval(interval);
  }, [smoothX, smoothY, charIndex, currentWord]);

  useEffect(() => {
    if (isNearLock || isHoveringLock) {
      lockControls.start("open");
      textControls.start("visible");
    } else {
      lockControls.start("idle");
    }
  }, [isNearLock, isHoveringLock, lockControls, textControls]);

  const bgGlowOpacity = useTransform(smoothX, () =>
    isNearLock || isHoveringLock ? 1 : 0.65
  );

  return (
    <div className="relative flex min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden rounded-[32px] border border-slate-800/80 bg-gradient-to-b from-slate-950/80 via-black to-black px-4 py-8 shadow-[0_0_80px_rgba(15,23,42,0.9)] sm:px-6 lg:px-10">
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: bgGlowOpacity,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.2),_transparent_60%)] blur-3xl" />
      </motion.div>

      {/* Central lock */}
      <motion.div
        variants={lockVariants}
        animate={lockControls}
        initial="initial"
        onHoverStart={() => setIsHoveringLock(true)}
        onHoverEnd={() => setIsHoveringLock(false)}
        className="relative z-10 flex h-48 w-48 items-center justify-center rounded-full border border-slate-700/80 bg-gradient-to-b from-slate-900 via-slate-950 to-black shadow-[0_0_60px_rgba(34,197,94,0.35)] md:h-56 md:w-56"
      >
        {/* Outer neon ring */}
        <motion.div
          variants={ringVariants}
          className="absolute inset-[-8px] rounded-full border border-emerald-400/50"
        />

        {/* Dial */}
        <motion.div
          variants={dialVariants}
          className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-b from-slate-800 via-slate-950 to-black md:h-36 md:w-36"
        >
          {/* Tick marks */}
          {Array.from({ length: 24 }).map((_, i) => {
            const rotate = (360 / 24) * i;
            return (
              <div
                key={i}
                className="absolute inset-0 flex items-start justify-center"
                style={{ transform: `rotate(${rotate}deg)` }}
              >
                <div className="h-3 w-[1px] rounded-full bg-slate-600/70" />
              </div>
            );
          })}

          {/* Center circle */}
          <motion.div
            variants={centerVariants}
            className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-slate-900 to-black shadow-[0_0_30px_rgba(34,197,94,0.6)]"
          >
            <div className="h-9 w-9 rounded-full border border-emerald-300/70 bg-black/80" />
            <motion.div
              className="pointer-events-none absolute inset-[-4px] rounded-full border border-emerald-400/40"
              animate={{
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Type / reveal text */}
      <motion.div
        variants={textContainerVariants}
        initial="hidden"
        animate={textControls}
        className="mt-10 flex flex-col items-center gap-3 text-center"
      >
        <Typewriter>
          <span className="text-xs uppercase tracking-[0.35em] text-emerald-400/80">
            access granted
          </span>
        </Typewriter>
        <Typewriter delay={0.6}>
          <p className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            KEY — это доступ
          </p>
        </Typewriter>
        <Typewriter delay={1.2}>
          <p className="max-w-xl text-sm text-slate-400 md:text-base">
            Доступ к сценам, людям и форматам, в которые не попасть по
            стандартному приглашению.
          </p>
        </Typewriter>
      </motion.div>

      {/* Cursor trail */}
      <div className="pointer-events-none absolute inset-0">
        {points.map((point, index) => (
          <TrailGlyph
            key={point.id}
            point={point}
            index={index}
            total={points.length}
            isNearLock={isNearLock}
          />
        ))}
      </div>
    </div>
  );
}

const lockVariants = {
  initial: {
    opacity: 0,
    y: 24,
    scale: 0.9,
  },
  idle: {
    opacity: 1,
    y: 0,
    scale: 1,
    boxShadow: "0 0 60px rgba(34,197,94,0.4)",
    transition: {
      type: "spring" as const, 
      stiffness: 120,
      damping: 18,
    },
  },
  open: {
    y: -4,
    scale: 1.04,
    boxShadow: "0 0 80px rgba(34,197,94,0.8)",
    transition: {
      type: "spring" as const,
      stiffness: 140,
      damping: 16,
    },
  },
};

const dialVariants = {
  initial: { rotate: -20 },
  idle: { rotate: 0, transition: { duration: 1.1, ease: "easeOut" } },
  open: {
    rotate: 28,
    transition: { type: "spring" as const, stiffness: 80, damping: 10 },
  },
};

const ringVariants = {
  initial: { opacity: 0, scale: 0.8 },
  idle: {
    opacity: 1,
    scale: 1,
    boxShadow: "0 0 40px rgba(34,197,94,0.55)",
  },
  open: {
    opacity: 1,
    scale: 1.06,
    boxShadow: "0 0 80px rgba(34,197,94,0.9)",
  },
};

const centerVariants = {
  initial: { scale: 0.9 },
  idle: {
    scale: 1,
  },
  open: {
    scale: 1.06,
  },
};

const textContainerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

type TrailGlyphProps = {
  point: TrailPoint;
  index: number;
  total: number;
  isNearLock: boolean;
};

function TrailGlyph({ point, index, total, isNearLock }: TrailGlyphProps) {
  const progress = 1 - index / Math.max(total, 1);
  const size = 10 + progress * 10;
  const baseOpacity = 0.15 + progress * 0.85;

  const targetX = isNearLock ? window.innerWidth / 2 : point.x;
  const targetY = isNearLock ? window.innerHeight / 2.2 : point.y;

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.6, x: targetX, y: targetY }}
      animate={{
        opacity: [0, baseOpacity, 0],
        scale: [0.7, 1, 0.4],
        x: targetX,
        y: targetY,
      }}
      transition={{
        duration: 1.9,
        ease: "easeOut",
      }}
      className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 select-none font-mono uppercase tracking-[0.2em] text-emerald-400"
      style={{
        fontSize: `${size}px`,
        textShadow: "0 0 18px rgba(16,185,129,0.8)",
      }}
    >
      {point.char}
    </motion.span>
  );
}

type TypewriterProps = {
  children: React.ReactNode;
  delay?: number;
};

function Typewriter({ children, delay = 0 }: TypewriterProps) {
  const controls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      controls.start("visible");
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [controls, delay]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 8 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          },
        },
      }}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
}

