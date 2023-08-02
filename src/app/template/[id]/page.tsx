import BuisnessCardMaker from "@/components/BusinessCardMaker";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: {
    id: string;
  };
}
export default function Page({ params }: PageProps) {
  const { id } = params;

  return (
    <div className="py-[120px] h-full flex flex-col gap-5">
      <BuisnessCardMaker />

      <div className="flex justify-end gap-4">
        <Button>Publish</Button>
        <Button variant="outline">Cancle</Button>
      </div>
    </div>
  );
}
