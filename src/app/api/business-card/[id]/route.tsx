import path from "path";
import { readFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { pathname } = new URL(req.url);
  const [, id] = pathname.match(/^\/api\/business-card\/([^\/]+)/) || [];

  if (!id) {
    return new Response("Not Found", { status: 404 });
  }

  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "src", "data");
  //Read the json data file data.json
  const fileContents = await readFile(jsonDirectory + "/template.json", "utf8");

  return NextResponse.json(fileContents);
}
