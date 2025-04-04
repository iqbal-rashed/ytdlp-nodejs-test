import { NextResponse } from "next/server";
import { BIN_DIR } from "ytdlp-nodejs";

export async function GET() {
  return new NextResponse(JSON.stringify({ message: "Hello World", BIN_DIR }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
