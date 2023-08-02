import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  try {
    const res = await fetch(`http://localhost:3001/api/business-card/1`);
    const data = await res.json();

    const businessCard = JSON.parse(data);
    console.log(businessCard);

    return new ImageResponse(
      <div className="bg-[#014849]">My First OG Image</div>,
      {
        width: businessCard.width,
        height: businessCard.height,
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
