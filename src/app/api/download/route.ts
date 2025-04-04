import { NextResponse } from "next/server";
import os from "os";

export async function GET() {
  const platform = os.platform();
  const arch = os.arch();

  console.log(process.env.INIT_CWD);

  return new NextResponse(
    JSON.stringify({
      message: "Hello World",
      hello: process.env.INIT_CWD,
      platform,
      arch,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
