import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "KEY — это доступ",
  description:
    "KEY — агентство, продакшен и студия полного цикла для брендов, артистов и культурных проектов.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} antialiased bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
