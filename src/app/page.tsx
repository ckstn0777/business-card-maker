import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-3xl font-semibold mb-10">
        명함 템플릿을 선택해주세요
      </h1>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-[80px]">
        <Link href="/template/1">
          <div className="bg-[#014849] aspect-[1.74/1] relative">
            <div className="w-fit h-fit absolute inset-0 translate-x-[270px] translate-y-[20px]">
              <p className="text-white text-[20px] tracking-[3px]">Logo</p>
            </div>

            <div className="w-fit h-fit absolute inset-0 translate-x-[30px] translate-y-[90px]">
              <p className="text-white text-[12px]">ceo</p>
            </div>

            <div className="w-fit h-fit absolute inset-0 translate-x-[60px] translate-y-[85px]">
              <p className="text-white text-[20px]">홍길동</p>
            </div>

            <div className="w-fit h-fit absolute inset-0 translate-x-[30px] translate-y-[120px]">
              <p className="text-white text-[12px] leading-[18px]">
                Mobile. 010-1234-5678
              </p>
              <p className="text-white text-[12px] leading-[18px]">
                Email. gildong-hong@naver.com
              </p>
              <p className="text-white text-[12px] leading-[18px]">
                서울시 마포구 양화로 45, 세아타워 16층
              </p>
            </div>
          </div>
        </Link>

        <div className="bg-slate-400">템플릿 1</div>

        <div className="bg-slate-400">템플릿 1</div>
      </div>
    </div>
  );
}
