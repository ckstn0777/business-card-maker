import prisma from "@/lib/db";
import { BusinessCardValidator } from "@/lib/validators/businessCard";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const businessCard = BusinessCardValidator.parse(body.businessCard);

    const { id } = await prisma.businessCard.create({
      data: {
        content: businessCard,
      },
    });

    return new Response(id, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("Invalid request data passed", { status: 422 });
    }
    return new Response(
      "Could not create buisness card, please try again later.",
      { status: 500 }
    );
  }
}
