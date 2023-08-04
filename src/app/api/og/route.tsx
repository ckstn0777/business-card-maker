import { BusinessCardValidator } from "@/lib/validators/businessCard";
import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  try {
    const res = await fetch(`http://localhost:3001/api/business-card/1`);
    const data = await res.json();

    const businessCard = BusinessCardValidator.parse(JSON.parse(data));

    // w-fit h-fit absolute inset-0 translate-x-[270px] translate-y-[20px]
    // w-fit : width: fit-content
    // inset-0 : top: 0, right: 0, bottom: 0, left: 0

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#014849",
            display: "flex",
          }}
        >
          {businessCard.children.map((child, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                transform: `translateX(${child.x}px) translateY(${child.y}px)`,
              }}
            >
              {child.type === "text" ? (
                <p
                  style={{
                    padding: 0,
                    margin: 0,
                    color: child.color,
                    fontSize: child.fontSize,
                    fontWeight: "bold",
                    // lineHeight: child.lineHeight,
                    // letterSpacing: child.letterSpacing,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {child.text.split("<br />").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              ) : (
                <img src={""} alt={""} />
              )}
            </div>
          ))}
        </div>
      ),
      {
        width: businessCard.width,
        height: businessCard.height,
        // fonts: [
        //   {
        //     name: "Roboto",
        //     data: roboto,
        //     weight: 400,
        //     style: "normal",
        //   },
        // ],
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
