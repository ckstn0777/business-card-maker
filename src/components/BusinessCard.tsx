import type { BusinessCardType } from "@/lib/validators/businessCard";
import { businessCardChildIdAtom } from "@/store/businessCardAtom";
import { useAtom } from "jotai";

interface BusinessCardMakerProps {
  businessCard: BusinessCardType;
}

export default function BusinessCard({ businessCard }: BusinessCardMakerProps) {
  // const [, setChild] = useAtom(updateBusinessCardChild);
  const [, setChildId] = useAtom(businessCardChildIdAtom);

  return (
    <div
      style={{
        width: `${businessCard.width}px`,
        height: `${businessCard.height}px`,
        backgroundColor: `${businessCard.backgroundColor}`,
        position: "relative",
      }}
      onClick={() => {
        setChildId(0);
      }}
    >
      {businessCard.children.map((child, i) => (
        <div
          key={i}
          style={{
            width: "fit-content",
            height: "fit-content",
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            transform: `translateX(${child.x}px) translateY(${child.y}px)`,
          }}
          onClick={(e) => {
            e.stopPropagation();

            setChildId(0);

            setTimeout(() => {
              setChildId(child.id);
            }, 0);

            //setChildId(child.id);
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
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              {child.text.split("\n").map((line, i) => (
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
  );
}
