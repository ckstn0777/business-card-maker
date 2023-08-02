import MakerBoard from "./MakerBoard";

export default function BuisnessCardMaker() {
  return (
    <div className="flex-1 grid grid-cols-10 gap-10">
      <MakerBoard />

      <div className="col-span-3 bg-zinc-300">조정</div>
    </div>
  );
}
