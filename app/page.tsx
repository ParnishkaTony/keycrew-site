/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Mail, Instagram, MessageCircle, Send, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Waves } from "./Waves";
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const manifestoParagraphs = [
  "Мы работаем не с шумом, а с точками входа.",
  "С событиями, которые открывают новые контексты — для брендов, сцен и городов.",
  "С форматами, которые собирают правильных людей в правильном месте и в правильное время.",
  "С артистами и сообществами, для которых аутентичность важнее охватов, а культура — важнее повестки.",
  "KEY — это доступ к экосистеме продюсеров, режиссёров, промоутеров, сценографов, звукорежиссёров и креаторов, которые живут в ночи, музыке и городской культуре.",
  "Мы соединяем бренды, артистов и пространства так, чтобы каждая точка контакта становилась переживанием, а не активацией.",
  "Наши проекты — это не мероприятия «на один вечер», а архитектура впечатлений, которая продолжается в медиа, сообществе и памяти.",
];

type CaseItem = {
  title: string;
  years: string;
  roles: string[];
  images: string[];
};

const cases: CaseItem[] = [
  {
    title: "Медиа / Арт",
    years: "разные годы",
    images: [
      "/portfolio/media-art-1.jpg",
      "/portfolio/media-art-2.jpg",
      "/portfolio/media-art-3.jpg",
      "/portfolio/media-art-4.jpg",
      "/portfolio/media-art-5.jpg",
    ],
    roles: [
      "арт-дирекшен медиа- и арт-коллабораций",
      "сценография и работа со световыми инсталляциями",
      "создание визуальной архитектуры событий",
    ],
  },
  {
    title: "Агломерат",
    years: "2016–2024",
    images: [
      "/portfolio/agglomerat-1.jpg",
      "/portfolio/agglomerat-2.jpg",
      "/portfolio/agglomerat-3.jpg",
      "/portfolio/agglomerat-4.jpg",
      "/portfolio/agglomerat-5.jpg",
    ],
    roles: [
      "кураторская команда и программирование",
      "продюсирование и технический продакшен событий",
      "развитие экосистемы резидентов и промоутерских команд",
    ],
  },
  {
    title: "Слёзы",
    years: "2020–2024",
    images: [
      "/portfolio/slezy-1.jpg",
      "/portfolio/slezy-2.jpg",
      "/portfolio/slezy-3.jpg",
      "/portfolio/slezy-4.jpg",
      "/portfolio/slezy-5.jpg",
    ],
    roles: [
      "концепция и арт-дирекшн серии событий",
      "бренд-партнёрства и интеграции",
      "сценография и работа с визуальной идентичностью",
    ],
  },
  {
    title: "Жёлтый Дом",
    years: "2025–наст.",
    images: [
      "/portfolio/house-1.jpg",
      "/portfolio/house-2.jpg",
      "/portfolio/house-3.jpg",
      "/portfolio/house-4.jpg",
      "/portfolio/house-5.jpg",
      "/portfolio/house-6.jpg",
      "/portfolio/house-7.jpg",
      "/portfolio/house-8.jpg",
      "/portfolio/house-9.jpg",
      "/portfolio/house-10.jpg",
      "/portfolio/house-11.jpg",
    ],
    roles: [
      "запуск культурного пространства под ключ",
      "стратегия программирования и коллабораций",
      "креативный продакшен и медиа-сопровождение",
    ],
  },
];

const specialProjects = [
  "Ночные серии для музыкальных и lifestyle-брендов",
  "Аудио/визуальные резиденции для артистов и креаторов",
  "Закрытые приёмы и listening-сессии для избранной аудитории",
  "Сценарии присутствия бренда на фестивалях и в турах",
];

const partners = ["BRAND A", "BRAND B", "BRAND C", "INSTITUTION", "VENUE"];

export default function Home() {
  const [showContactForm, setShowContactForm] = React.useState(false);
  const [formSubmitting, setFormSubmitting] = React.useState(false);

  return (
    <main className="relative min-h-screen bg-white text-neutral-900">
      {/* Навигация */}
      <nav className="sticky top-0 z-40 mx-auto flex max-w-6xl justify-end gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-end gap-2 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
          <a href="#manifesto" className="hover:text-neutral-900 transition">Манифест</a>
          <span className="text-neutral-300">/</span>
          <a href="#directions" className="hover:text-neutral-900 transition">Направления</a>
          <span className="text-neutral-300">/</span>
          <a href="#cases" className="hover:text-neutral-900 transition">Кейсы</a>
          <span className="text-neutral-300">/</span>
          <a href="#special" className="hover:text-neutral-900 transition">Спецпроекты</a>
          <span className="text-neutral-300">/</span>
          <a href="#team" className="hover:text-neutral-900 transition">Команда</a>
          <span className="text-neutral-300">/</span>
          <a href="#contact" className="hover:text-neutral-900 transition">Контакт</a>
        </div>
      </nav>

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-24 pt-8 sm:px-6 lg:px-8 lg:pt-10">
        {/* Hero */}
        <motion.section
          id="top"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mb-20 flex min-h-[90vh] items-center justify-center overflow-hidden rounded-[32px] border border-neutral-200 bg-white"
        >
          {/* Waves background */}
          <Waves
            className="z-0 opacity-80 mix-blend-multiply"
            strokeColor="#111111"
            strokeOpacity={0.16}
            backgroundColor="transparent"
            pointerSize={0.25}
          />

          {/* Lock background image */}
          <motion.div
            initial={{ scale: 1.04, rotate: -1, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
            whileHover={{ scale: 1.02, filter: "brightness(1.03)" }}
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <Image
              src="/images/lock.jpeg"
              alt="Кодовый замок KEY"
              fill
              priority
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white" />
          </motion.div>

          {/* Hero content */}
          <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-start gap-6 px-4 py-10 sm:px-8 md:py-16 lg:px-12">
            <motion.p
              variants={fadeInUp}
              className="text-xs uppercase tracking-[0.35em] text-neutral-500"
            >
              event / production / studio
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-balance text-5xl font-bold tracking-tight text-neutral-900 sm:text-6xl md:text-7xl lg:text-8xl"
            >
              KEY — это доступ
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="max-w-xl rounded-3xl bg-white/80 px-5 py-4 text-sm text-neutral-700 shadow-[0_18px_60px_rgba(15,23,42,0.12)] backdrop-blur-sm md:px-7 md:py-5 md:text-base"
            >
              Агентство, продакшен и студия полного цикла для брендов, артистов
              и культурных проектов.
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-2 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full border border-neutral-900 bg-transparent px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
              >
                НАЙТИ КЛЮЧ
                <span className="h-[1px] w-8 bg-neutral-500 transition group-hover:w-12 group-hover:bg-white" />
              </a>
              <span className="text-[11px] text-neutral-500">
                ночные форматы / городская культура / контекстные коллаборации
              </span>
            </motion.div>

          </div>
        </motion.section>

        {/* Manifesto */}
        <section
          id="manifesto"
          className="mt-24 border-t border-slate-800/80 pt-10 md:mt-32"
        >
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-balance text-3xl font-semibold text-neutral-900 md:text-4xl">
                KEY — это доступ.
              </h2>
            </div>
            <p className="max-w-sm text-xs uppercase tracking-[0.25em] text-neutral-500">
              манифест
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-4 text-base leading-relaxed text-neutral-700 md:text-lg"
          >
            {manifestoParagraphs.map((paragraph, index) => (
              <motion.p key={index} variants={fadeInUp}>
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </section>

        {/* Directions */}
        <section
          id="directions"
          className="mt-24 border-t border-neutral-200 pt-10 md:mt-32"
        >
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
              Направления
            </h2>
            <p className="max-w-sm text-xs uppercase tracking-[0.25em] text-neutral-500">
              агентство / продакшен / студия
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <DirectionCard
              title="K — AGENCY"
              href="#cases"
              items={[
                "стратегия присутствия в ночной и городской культуре",
                "концепции событий и коллабораций",
                "креативные сценарии и партнёрства",
                "комьюнити- и артист-рилейшнс",
              ]}
            />
            <DirectionCard
              title="K — PRODUCTION"
              href="#case-media-art"
              items={[
                "продюсирование и технический продакшен под ключ",
                "сценография, свет, звук, media-инсталляции",
                "стейдж-менеджмент, райдеры, логистика",
                "работа с площадками и городской инфраструктурой",
              ]}
            />
            <DirectionCard
              title="K — STUDIO"
              href="#case-media-art"
              items={[
                "креативный концепт и арт-дирекшн",
                "визуальная идентичность и motion",
                "контент для кампаний и артистов",
                "документация и постпродакшен событий",
              ]}
            />
          </div>
        </section>

        {/* Cases */}
        <section
          id="cases"
          className="mt-24 border-t border-slate-800/80 pt-10 md:mt-32"
        >
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
              Кейсы
            </h2>
            <p className="max-w-sm text-xs uppercase tracking-[0.25em] text-neutral-500">
              выборочные проекты
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {cases.map((item) => (
              <div
                key={item.title}
                id={item.title === "Медиа / Арт" ? "case-media-art" : undefined}
              >
                <CaseCard item={item} />
              </div>
            ))}
          </div>
        </section>

        {/* Special projects & partners */}
        <section
          id="special"
          className="mt-24 border-t border-neutral-200 pt-10 md:mt-32"
        >
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
              Спецпроекты
            </h2>
            <p className="max-w-sm text-xs uppercase tracking-[0.25em] text-neutral-500">
              особые форматы / партнёрства
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-start">
            <div className="space-y-3 text-sm text-neutral-700 md:text-base">
              <ul className="space-y-2">
                {specialProjects.map((project) => (
                  <li key={project} className="flex items-center gap-3">
                    <span className="h-[1px] w-8 flex-none bg-neutral-300" />
                    <span>{project}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                нам доверяют
              </p>
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
  <img
    src="/logos/boiler-room.svg"
    alt="Boiler Room"
    className="h-11 w-auto max-w-[120px] object-contain object-center grayscale hover:grayscale-0 transition duration-300"
  />
  <img
    src="/logos/beat-film-festival.png"
    alt="Beat Film Festival"
    className="h-11 w-auto max-w-[120px] object-contain object-center grayscale hover:grayscale-0 transition duration-300"
  />
  <img
    src="/logos/red-bull.svg"
    alt="Red Bull"
    className="h-11 w-auto max-w-[120px] object-contain object-center grayscale hover:grayscale-0 transition duration-300"
  />
  <img
    src="/logos/ballantines.png"
    alt="Ballantine's"
    className="h-11 w-auto max-w-[120px] object-contain object-center grayscale hover:grayscale-0 transition duration-300"
  />
  <img
    src="/logos/bose.png"
    alt="Bose"
    className="h-11 w-auto max-w-[120px] object-contain object-center grayscale hover:grayscale-0 transition duration-300"
  />
</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section
          id="team"
          className="mt-24 border-t border-neutral-200 pt-10 md:mt-32"
        >
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
              Команда
            </h2>
            <p className="max-w-sm text-xs uppercase tracking-[0.25em] text-neutral-500">
              продюсеры / кураторы / креаторы
            </p>
          </div>

          <div className="max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg">
            <p>
              В основе KEY — команда продюсеров, режиссёров, промоутеров,
              кураторов и креативных директоров, которые выросли внутри сцен,
              с которыми работают. Мы объединяем промо-опыт, культурную
              экспертизу и продакшен-насмотренность, чтобы собирать команды под
              конкретный запрос — от камерного listening до многодневного
              фестиваля.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mt-24 border-t border-neutral-200 pt-12 md:mt-32"
        >
          <div className="mb-10">
            <h2 className="text-balance text-3xl font-semibold text-neutral-900 md:text-4xl">
              KEY — это не форма заявки. Это точка входа.
            </h2>
            <p className="mt-4 max-w-xl text-sm text-neutral-600 md:text-base">
              Расскажите о задаче, городе, дате и контексте — мы предложим,
              как превратить её в опыт, который останется в памяти сцены и
              людей.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:items-start md:gap-12">
            <div className="flex flex-wrap gap-4">
              <ContactButton
                href="https://t.me/keycrewadmin"
                icon={Send}
                label="Telegram"
              />
              <ContactButton
                href="https://wa.me/79684508760"
                icon={MessageCircle}
                label="WhatsApp"
              />
              <ContactButton
                href="mailto:hello@key.agency"
                icon={Mail}
                label="Email"
              />
              <ContactButton
                href="https://instagram.com/"
                icon={Instagram}
                label="Instagram"
              />
            </div>
            <div className="min-w-0 shrink-0 text-xs text-neutral-500 sm:border-l sm:border-neutral-200 sm:pl-8 md:pl-12">
              <p className="uppercase tracking-[0.25em]">координаты</p>
              <p className="mt-2 leading-relaxed">
                Москва / Санкт‑Петербург / Европа
                <br />
                Работаем с брендами, артистами, площадками и культурными
                институциями.
              </p>
            </div>
          </div>

          <div className="mt-12">
            {!showContactForm ? (
              <button
                type="button"
                onClick={() => setShowContactForm(true)}
                className="group inline-flex items-center gap-3 rounded-full border border-neutral-900 bg-transparent px-8 py-4 text-sm font-medium uppercase tracking-[0.25em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
              >
                Оставить заявку
                <span className="h-[1px] w-8 bg-neutral-400 transition group-hover:w-12 group-hover:bg-white" />
              </button>
            ) : (
              <div className="relative z-10 rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 md:p-8">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-neutral-900 md:text-3xl">
                      Оставить заявку
                    </h3>
                    <p className="mt-2 text-sm text-neutral-600">
                      Расскажите о задаче, городе, дате и контексте — ответим в течение дня.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="shrink-0 rounded-full p-2 text-neutral-500 transition hover:bg-neutral-200 hover:text-neutral-900"
                    aria-label="Свернуть форму"
                  >
                    ×
                  </button>
                </div>
                <form
                  id="contact-form"
                  className="grid gap-6"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (formSubmitting) return;
                    const form = e.currentTarget;
                    const formData = new FormData(form);
                    const data = Object.fromEntries(formData);
                    setFormSubmitting(true);
                    try {
                      const response = await fetch("/api/send-form", {
                        method: "POST",
                        body: JSON.stringify(data),
                        headers: { "Content-Type": "application/json" },
                      });
                      if (response.ok) {
                        alert("Заявка отправлена! Мы свяжемся с вами.");
                        setShowContactForm(false);
                      } else {
                        alert("Ошибка отправки. Попробуйте позже.");
                      }
                    } catch {
                      alert("Ошибка сети. Проверьте интернет.");
                    } finally {
                      setFormSubmitting(false);
                    }
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Имя / Компания"
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-5 py-3 text-sm text-neutral-900 placeholder-neutral-500 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  />
                  <input
                    type="text"
                    name="telegram"
                    placeholder="Telegram @username или телефон"
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-5 py-3 text-sm text-neutral-900 placeholder-neutral-500 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  />
                  <input
                    type="text"
                    name="city_date"
                    placeholder="Город и желаемая дата"
                    className="w-full rounded-lg border border-neutral-300 bg-white px-5 py-3 text-sm text-neutral-900 placeholder-neutral-500 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  />
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Расскажите о проекте: формат, бренд/артист, количество гостей, бюджет..."
                    required
                    className="w-full resize-none rounded-lg border border-neutral-300 bg-white px-5 py-3 text-sm text-neutral-900 placeholder-neutral-500 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  />
                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="relative z-10 cursor-pointer rounded-full bg-neutral-900 px-8 py-4 text-sm font-medium uppercase tracking-[0.25em] text-white transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {formSubmitting ? "Отправка…" : "Отправить заявку"}
                  </button>
                </form>
              </div>
            )}
          </div>
          <div className="mt-12 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-neutral-500">
            <span>© {new Date().getFullYear()} KEY</span>
            <a href="#top" className="hover:text-neutral-900">
              вверх
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

type DirectionCardProps = {
  title: string;
  items: string[];
  href?: string;
};

function DirectionCard({ title, items, href }: DirectionCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group flex h-full flex-col"
    >
      {href ? (
        <a
          href={href}
          className="flex flex-1 flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(15,23,42,0.12)]"
        >
          <DirectionCardInner title={title} items={items} />
        </a>
      ) : (
        <div className="flex flex-1 flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(15,23,42,0.12)]">
          <DirectionCardInner title={title} items={items} />
        </div>
      )}
    </motion.article>
  );
}

type DirectionCardInnerProps = {
  title: string;
  items: string[];
};

function DirectionCardInner({ title, items }: DirectionCardInnerProps) {
  return (
    <div className="relative flex h-full flex-col justify-between">
      <Waves
        className="absolute inset-0 z-0 opacity-60 mix-blend-multiply"
        strokeColor="#111111"
        strokeOpacity={0.12}
        backgroundColor="transparent"
        pointerSize={0}
      />
      <div className="relative z-10">
        <div className="mb-6 space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            направление
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 md:text-xl">
            {title}
          </h3>
        </div>
        <ul className="space-y-2 text-sm text-neutral-700">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-[1px] w-6 flex-none bg-neutral-300 group-hover:w-8 transition-all" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

type CaseCardProps = {
  item: CaseItem;
};

function CaseCard({ item }: CaseCardProps) {
  const [index, setIndex] = React.useState(0);
  const [carousel, setCarousel] = React.useState<{ images: string[]; index: number } | null>(null);
  const total = item.images.length;

  const current = ((index % total) + total) % total;

  const goTo = (next: number) => {
    setIndex(next);
  };

  const goNext = () => {
    setIndex((prev) => prev + 1);
  };

  const goPrev = () => {
    setIndex((prev) => prev - 1);
  };

  const openFullscreen = () => {
    setCarousel({ images: item.images, index: current });
  };

  const closeFullscreen = () => setCarousel(null);

  const fullscreenPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCarousel((prev) =>
      prev
        ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length }
        : null
    );
  };

  const fullscreenNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCarousel((prev) =>
      prev
        ? { ...prev, index: (prev.index + 1) % prev.images.length }
        : null
    );
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white p-4 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(15,23,42,0.12)]"
    >
      <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
        <motion.div
          key={item.images[current]}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 cursor-pointer"  // ← курсор pointer
  onClick={openFullscreen}
        >
       <Image
  src={item.images[current]}
  alt={`${item.title} — фото ${current + 1}`}
  fill
  className="object-cover transition duration-700 group-hover:scale-105"
  quality={85}               // ускоряет загрузку
  placeholder="empty"        // ВАЖНО: отключает размытие полностью
/>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
        </motion.div>

        {/* Controls */}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/80 text-xs text-neutral-900 shadow-sm backdrop-blur-sm transition hover:bg-neutral-900 hover:text-white"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/80 text-xs text-neutral-900 shadow-sm backdrop-blur-sm transition hover:bg-neutral-900 hover:text-white"
            >
              ›
            </button>

            <div className="absolute bottom-3 left-0 right-0 z-10 flex items-center justify-center gap-2">
              {item.images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    current === i
                      ? "w-6 bg-neutral-900"
                      : "w-2 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
          {item.years}
        </p>
        <h3 className="text-lg font-semibold text-neutral-900">
          {item.title}
        </h3>
        <ul className="mt-3 space-y-1.5 text-sm text-neutral-700">
          {item.roles.map((role) => (
            <li key={role} className="flex items-center gap-2">
              <span className="h-[1px] w-4 flex-none bg-neutral-300" />
              <span>{role}</span>
            </li>
          ))}
        </ul>
      </div>
      {carousel &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95"
            style={{
              transform: "translateZ(0)",
              willChange: "transform",
              isolation: "isolate",
            }}
            onClick={closeFullscreen}
            role="dialog"
            aria-modal="true"
            aria-label="Просмотр фото"
          >
            <div
              className="relative max-w-[95vw] max-h-[95vh] w-full h-full p-4 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
              style={{ transform: "translateZ(0)" }}
            >
              <button
                type="button"
                className="absolute top-6 right-6 z-10 text-white text-5xl hover:text-gray-300 transition"
                onClick={closeFullscreen}
                aria-label="Закрыть"
              >
                ×
              </button>

              {carousel.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={fullscreenPrev}
                    className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/70 hover:border-white/60 md:left-4 md:h-14 md:w-14"
                    aria-label="Предыдущее фото"
                  >
                    <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
                  </button>
                  <button
                    type="button"
                    onClick={fullscreenNext}
                    className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/70 hover:border-white/60 md:right-4 md:h-14 md:w-14"
                    aria-label="Следующее фото"
                  >
                    <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
                  </button>
                </>
              )}

              <Image
                key={carousel.images[carousel.index]}
                src={carousel.images[carousel.index]}
                alt={`${item.title} — фото ${carousel.index + 1} из ${carousel.images.length}`}
                fill
                className="object-contain"
                quality={95}
                priority
              />

              {carousel.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-xs text-white/90 backdrop-blur-sm">
                  {carousel.index + 1} / {carousel.images.length}
                </div>
              )}
            </div>
          </div>,
          document.body
        )}
    </motion.article>
  );
}

type ContactButtonProps = {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
};

function ContactButton({ href, icon: Icon, label }: ContactButtonProps) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group inline-flex items-center gap-3 rounded-full border border-slate-700/80 bg-slate-900/40 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.25em] text-slate-200 shadow-[0_0_0_rgba(56,189,248,0)] backdrop-blur-md transition hover:border-sky-400 hover:bg-slate-900/80 hover:text-slate-50 hover:shadow-[0_0_40px_rgba(56,189,248,0.45)]"
    >
      <Icon className="h-4 w-4 text-slate-300 transition group-hover:text-sky-300" />
      <span>{label}</span>
    </a>
  );
}
