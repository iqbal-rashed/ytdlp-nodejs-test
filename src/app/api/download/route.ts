import { NextResponse } from "next/server";
import { YtDlp } from "ytdlp-nodejs";

export async function GET() {
  const ytdlp = new YtDlp();

  const checkYtdlp = await ytdlp.checkInstallationAsync();

  return new NextResponse(
    JSON.stringify({ message: "Hello World", ytdlp, checkYtdlp }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
