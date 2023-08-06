import path from "path";
import { readFile } from "fs/promises";
import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { pathname } = new URL(req.url);
    const [, id] = pathname.match(/^\/api\/business-card\/([^\/]+)/) || [];

    if (!id) {
      return new Response("Not Found", { status: 404 });
    }

    // //Find the absolute path of the json directory
    // const jsonDirectory = path.join(process.cwd(), "src", "data");
    // //Read the json data file data.json
    // const fileContents = await readFile(jsonDirectory + "/template.json", "utf8");

    const businessCard = await prisma.businessCard.findFirst({
      where: {
        id,
      },
    });

    if (!businessCard) {
      return new Response("Buisness card does not exist", {
        status: 404,
      });
    }

    return NextResponse.json(businessCard.content);
  } catch (error) {
    return new Response(
      "Could not create buisness card, please try again later.",
      { status: 500 }
    );
  }
}
