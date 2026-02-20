import NonagonImage from "../ui/NonagonImage";

export default function HeroSection() {
  return (
    <section className="w-full max-w-[480px] mx-auto bg-soyoro-bg pt-16 pb-20 flex flex-col items-center">
      <div className="w-full px-6 flex flex-col">
        {/* Top Text Content */}
        <h1 className="text-[38px] sm:text-[42px] font-bold leading-[1.15] mb-5 tracking-[-0.02em] text-soyoro-text-primary">
          <span className="block">2026년은</span>
          <span className="block">예술경영 합격</span>
        </h1>
        <p className="text-[17px] sm:text-[19px] font-bold text-soyoro-text-primary mb-10 tracking-[-0.01em]">
          가장 섬세한 관리로 예술경영 합격하기
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-soyoro-text-primary mb-14"></div>

        {/* Nonagon Image */}
        <div className="w-full px-2 mb-16">
          <NonagonImage src="/sia.jpg" alt="학교 전경" className="w-full" />
        </div>

        {/* Bottom Text Content */}
        <div className="flex flex-col gap-6 text-[15px] sm:text-[16px] leading-[1.7] text-soyoro-text-primary font-medium tracking-tight">
          <p>
            제 입시생 시절, 어렵게 예술경영이라는 목표를 찾았을 때 너무 막막해
            계속된 실패화 좌절을 경험해야 했습니다. 믿고 찾아간 학원과 과외도
            "왜 이걸 이해 못하느냐"와 같은 질책에 막막함은 더 심해졌습니다.
          </p>
          <p>
            소요로 예술경영은 저와 같은 학생이 다시 없도록, 처음부터 끝까지 아주
            차근차근 - 입시에 필요한 모든 걸 가까운 거리에서 전부 지원하고
            있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
