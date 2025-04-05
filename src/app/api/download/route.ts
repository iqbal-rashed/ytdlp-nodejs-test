import { NextResponse } from "next/server";
import { BIN_DIR } from "ytdlp-nodejs";
import fs from "fs";
import path from "path";

export async function GET() {
  const node_modules_path = path.join(process.cwd(), "node_modules");
  const items = fs.readdirSync(node_modules_path);
  console.log("Items in BIN_DIR:", items, node_modules_path);
  return new NextResponse(
    JSON.stringify({
      message: "Hello World",
      BIN_DIR,
      items,
      node_modules_path,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
