import Image from "next/image";
import HighlightText from "../ui/HighlightText";

export default function VisionSection() {
  return (
    <section className="w-full max-w-120 mx-auto bg-soyoro-bg pt-20 pb-24 flex flex-col items-center">
      <div className="w-full px-6 flex flex-col">
        {/* Top Header - Statistics */}
        <div className="flex flex-col mb-16">
          <p className="text-[13px] text-soyoro-text-secondary mb-1">
            #서울예대 예술경영 합격생/전체 수강생 * 100
            <br />
            #2025년, 타 예술경영 학원 대비 합격생 비율 (I학원 7%, J학원 5%)
          </p>
          <div className="flex flex-col items-center mt-10">
            <h2 className="text-[26px] sm:text-[30px] font-bold text-soyoro-text-primary mb-2">
              서울예대 예술경영
            </h2>
            <h2 className="text-[34px] sm:text-[38px] font-bold">
              <HighlightText highlightClassName="bg-[#FCECD9] h-[50%] bottom-[10%]">
                최종합격 비율 1위
              </HighlightText>
            </h2>
          </div>
        </div>

        {/* Middle Header - Step 1 Vision */}
        <div className="flex justify-between items-end border-b border-soyoro-text-primary pb-3 mb-12">
          <div className="flex flex-col text-[14px] sm:text-[15px] font-medium text-soyoro-text-secondary">
            <span>예술경영 합격의 필수</span>
            <span>STEP. 1</span>
          </div>
          <div className="flex flex-col text-right text-[28px] sm:text-[32px] font-bold text-soyoro-text-primary leading-[1.1]">
            <span>예술경영</span>
            <span>비전</span>
          </div>
        </div>

        {/* Text Area */}
        <div className="flex flex-col gap-6 text-[15px] sm:text-[16px] leading-[1.7] text-soyoro-text-primary font-medium tracking-tight mb-20">
          <h3 className="text-[18px] sm:text-[20px] font-bold mb-2">
            예술경영{" "}
            <HighlightText highlightClassName="bg-[#FCECD9] h-[40%] bottom-[15%]">
              비전
            </HighlightText>
            이란?
          </h3>
          <p>
            실기 평가자 입장에서 매력적인 수험생은 경험과 지식이 풍부한
            학생보다, 예술경영을{" "}
            <span className="text-[#F35D5D]">"해야 하는 이유"</span>가 명확한
            학생입니다.
          </p>
          <p>
            예술경영 입시에서 <span className="text-[#F35D5D]">'비전'</span>은
            학생이 예술 분야에서 기획자로서 살아가야 하는 이유이자 당위성입니다.
          </p>
        </div>

        {/* Node Graph Image */}
        <div className="w-full relative aspect-square sm:aspect-4/3 mb-16">
          <Image
            src="/node.png"
            alt="예술경영 비전 노드 그래프"
            fill
            className="object-contain"
            sizes="(max-width: 480px) 100vw, 480px"
          />
        </div>

        {/* Bottom Questions Area */}
        <div className="flex flex-col items-end text-right w-full">
          <h3 className="text-[20px] font-bold text-soyoro-text-primary mb-6">
            비전 만들기 : 필수 질문
          </h3>
          <ul className="flex flex-col gap-2 text-[15px] sm:text-[16px] font-medium text-soyoro-text-primary tracking-tight">
            <li>내가 (뮤지컬)을 좋아하는 이유는?</li>
            <li>사람들이 (영화)를 좋아하는 이유는?</li>
            <li>세상에 (연극)이 필요한 이유는?</li>
            <li>미래의 (무용)이 바뀌어야 할 방향은?</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
