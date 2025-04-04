import { NextResponse } from "next/server";
import { BIN_DIR } from "ytdlp-nodejs";
import fs from "fs";

export async function GET() {
  const items = fs.readdirSync(BIN_DIR);
  console.log("Items in BIN_DIR:", items);
  return new NextResponse(
    JSON.stringify({ message: "Hello World", BIN_DIR, items }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
