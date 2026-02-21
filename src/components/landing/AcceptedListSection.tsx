import { ACCEPTED_LIST } from "@/constants/accepted";

export default function AcceptedListSection() {
  return (
    <section className="w-full max-w-120 md:max-w-2xl mx-auto bg-[#F9F9F9] py-16 md:py-24 flex flex-col items-center">
      <div
        className="w-full h-150 md:h-200 overflow-hidden relative"
        // 위/아래 가장자리가 부드럽게 페이드아웃 되는 그라데이션 마스크
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <div className="flex flex-col items-center w-full animate-marquee-vertical text-center font-medium text-[16px] md:text-[18px] leading-[2.6] md:leading-[2.8] tracking-tight text-[#444444]">
          {/* 첫 번째 그룹 */}
          <div className="flex flex-col w-full py-2">
            {ACCEPTED_LIST.map((student, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: Static array data without unique IDs is safe here
              <p key={`accepted-1-${student}-${index}`} className="opacity-80">
                {student}
              </p>
            ))}
          </div>
          {/* 부드러운 순환을 위해 동일한 리스트를 복제 (transform: translateY(-50%) 시 정확히 이어짐) */}
          <div className="flex flex-col w-full py-2">
            {ACCEPTED_LIST.map((student, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: Static array data without unique IDs is safe here
              <p key={`accepted-2-${student}-${index}`} className="opacity-80">
                {student}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
