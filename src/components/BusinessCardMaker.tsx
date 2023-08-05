import { BusinessCardType } from "@/lib/validators/businessCard";
import BusinessCard from "./BusinessCard";
import { useAtom } from "jotai";
import { businessCardChildAtom } from "@/store/businessCardAtom";
import { Input } from "./ui/Input";
import { HexColorInput, HexColorPicker } from "react-colorful";
import TextareaAutosize from "react-textarea-autosize";

interface BusinessCardMakerProps {
  businessCard: BusinessCardType;
}

export default function BusinessCardMaker({
  businessCard,
}: BusinessCardMakerProps) {
  const [businessCardChild, setBusinessCardChild] = useAtom(
    businessCardChildAtom
  );

  return (
    <div className="flex-1 grid grid-cols-10 gap-10">
      <div className="col-span-7 border border-zinc-500 rounded-lg flex justify-center items-center">
        <BusinessCard businessCard={businessCard} />
      </div>

      <div className="col-span-3 bg-zinc-300 rounded-lg p-6">
        {!businessCardChild && <div>선택된 요소가 없습니다. </div>}

        {businessCardChild?.type === "text" && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-bold text-lg">텍스트</h3>
              <TextareaAutosize
                value={businessCardChild.text}
                onChange={(e) =>
                  setBusinessCardChild({
                    ...businessCardChild,
                    text: e.target.value,
                  })
                }
                placeholder="Title"
                className="w-full resize-none overflow-hidden px-3 py-2 text-sm rounded-md border border-input bg-background focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-lg">위치(좌표)</h3>
              <div className="flex gap-2">
                <div className="flex items-center gap-2">
                  <span>x</span>
                  <Input
                    type="number"
                    value={businessCardChild.x}
                    onChange={(e) => {
                      setBusinessCardChild({
                        ...businessCardChild,
                        x: Number(e.target.value),
                      });
                    }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span>y</span>
                  <Input
                    type="number"
                    value={businessCardChild.y}
                    onChange={(e) => {
                      setBusinessCardChild({
                        ...businessCardChild,
                        y: Number(e.target.value),
                      });
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-lg">폰트 색상</h3>
              <HexColorPicker
                color={businessCardChild.color}
                onChange={(e) => {
                  setBusinessCardChild({
                    ...businessCardChild,
                    color: e,
                  });
                }}
              />
              <HexColorInput
                className="flex h-10  rounded-md border border-input bg-background px-3 py-2 text-sm"
                color={businessCardChild.color}
                onChange={(e) => {
                  setBusinessCardChild({
                    ...businessCardChild,
                    color: e,
                  });
                }}
              />

              {/* <TwitterPicker
                triangle="hide"
                color={businessCardChild.color}
                onChange={(e) => {
                  setBusinessCardChild({
                    ...businessCardChild,
                    color: e.hex,
                  });
                }}
              /> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
