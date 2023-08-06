import CopyInput from "@/components/CooyInput";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params }: Props) {
  const { id } = params;

  // const copy = () => {
  //   navigator.clipboard.writeText(`https://localhost:3001/api/og?id=${id}`);
  // };

  console.log(
    "process.env.NEXT_PUBLIC_BASE_URL",
    process.env.NEXT_PUBLIC_BASE_URL
  );

  return (
    <div className="py-[120px] h-full flex flex-col justify-center items-center gap-10">
      <h2 className="text-2xl text-center font-semibold leading-[40px]">
        명함 생성이 완료되었습니다. <br />
        이제 이미지를 공유하실 수 있습니다.
      </h2>

      <div className="w-full flex justify-center items-center gap-10">
        <img
          className="flex-1 w-[70%] h-[70%] object-contain"
          src={`/api/og?id=${id}`}
          alt="business-card"
        />

        <div className="flex-1 flex flex-col justify-center gap-5 ">
          <CopyInput
            title="Image URL:"
            value={`${process.env.NEXT_PUBLIC_BASE_URL}/api/og?id=${id}`}
          />

          <CopyInput
            title="Embed HTML code:"
            value={`<img src="${process.env.NEXT_PUBLIC_BASE_URL}/api/og?id=${id}" alt="Business Card" width="600" height="314" />`}
          />

          <CopyInput
            title="Embed Markdown code:"
            value={`![Business Card](${process.env.NEXT_PUBLIC_BASE_URL}/api/og?id=${id})`}
          />
        </div>
      </div>
    </div>
  );
}
