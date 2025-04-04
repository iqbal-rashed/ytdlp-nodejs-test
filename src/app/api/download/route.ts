import { NextResponse } from "next/server";
import { YtDlp } from "ytdlp-nodejs";

export async function GET() {
  const ytdlp = new YtDlp();

  return new NextResponse(JSON.stringify({ message: "Hello World", ytdlp }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
