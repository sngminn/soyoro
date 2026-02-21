import Image from "next/image";
import HighlightText from "../ui/HighlightText";
import { ROADMAP_DATA } from "@/constants/roadmap";

export default function RoadmapSection() {
  return (
    <section className="w-full flex flex-col items-center bg-soyoro-bg pb-24">
      {/* Top Full Image */}
      <div className="w-full relative aspect-3/2 sm:aspect-video mb-16">
        <Image
          src="/drama.jpg"
          alt="공연 이미지"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <div className="w-full max-w-120 mx-auto px-6 flex flex-col">
        {/* Title */}
        <h2 className="text-[24px] sm:text-[26px] font-bold text-soyoro-text-primary mb-6">
          소요로{" "}
          <HighlightText highlightClassName="bg-[#FCECD9] h-[50%] bottom-[10%]">
            비전 로드맵
          </HighlightText>
        </h2>

        {/* Subtitle */}
        <p className="text-[15px] sm:text-[16px] text-soyoro-text-primary font-medium leading-[1.6] tracking-tight mb-14">
          소요로 예술경영은 학생의 꿈을 구체화하고 입시에 필요
          <br className="hidden sm:block" />한 사유 과정을 거쳐, 성공적인 합격을
          가져옵니다.
        </p>

        {/* Road Map Image */}
        <div className="w-full flex justify-center mb-14">
          <div className="relative w-75 sm:w-90 aspect-2/1">
            <Image
              src="/road.png"
              alt="로드맵 경로 그래픽"
              fill
              className="object-contain"
              sizes="(max-width: 480px) 300px, 360px"
            />
          </div>
        </div>

        {/* Step Cards List */}
        <div className="flex flex-col gap-5">
          {ROADMAP_DATA.map((step) => (
            <div
              key={step.id}
              className="w-full bg-[#f9f9f9] rounded-[20px] p-6 sm:p-7 flex flex-col pt-7"
            >
              <h3 className="text-[16px] sm:text-[17px] font-bold text-soyoro-text-primary mb-4 tracking-tight">
                {step.stepName} {step.title}
              </h3>
              <p className="text-[14px] sm:text-[15px] text-soyoro-text-secondary leading-[1.6] tracking-tight">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
