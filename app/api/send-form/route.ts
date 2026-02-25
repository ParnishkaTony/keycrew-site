import { NextResponse } from "next/server";

const TELEGRAM_API = "https://api.telegram.org";

type FormBody = {
  name?: string;
  telegram?: string;
  city_date?: string;
  message?: string;
};

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set");
    return NextResponse.json(
      { error: "Сервер не настроен для отправки в Telegram" },
      { status: 500 }
    );
  }

  let body: FormBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Неверный формат данных" },
      { status: 400 }
    );
  }

  const name = body.name ?? "";
  const telegram = body.telegram ?? "";
  const cityDate = body.city_date ?? "";
  const message = body.message ?? "";

  const text = [
    "🔑 <b>Новая заявка с сайта KEY</b>",
    "",
    `<b>Имя / Компания:</b> ${escapeHtml(name)}`,
    `<b>Telegram / телефон:</b> ${escapeHtml(telegram)}`,
    cityDate ? `<b>Город и дата:</b> ${escapeHtml(cityDate)}` : null,
    "",
    `<b>Сообщение:</b>`,
    escapeHtml(message),
  ]
    .filter(Boolean)
    .join("\n");

  const url = `${TELEGRAM_API}/bot${token}/sendMessage`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Telegram API error:", res.status, err);
    return NextResponse.json(
      { error: "Не удалось отправить сообщение в Telegram" },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
