import { NextResponse } from "next/server";
import os from "os";

export async function GET() {
  const platform = os.platform();
  const arch = os.arch();

  return new NextResponse(
    JSON.stringify({
      message: "Hello World",
      platform,
      arch,
      test: process.env.INIT_CWD,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
