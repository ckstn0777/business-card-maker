export default function BusinessCard() {
  return (
    <div className="bg-[#014849] aspect-[1.74/1] relative w-[352px] h-[202px]">
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
          <br />
          Email. gildong-hong@naver.com
          <br />
          서울시 마포구 양화로 45, 세아타워 16층
        </p>
        {/* <p className="text-white text-[12px] leading-[18px]">
          Email. gildong-hong@naver.com
        </p>
        <p className="text-white text-[12px] leading-[18px]">
          서울시 마포구 양화로 45, 세아타워 16층
        </p> */}
      </div>
    </div>
  );
}
