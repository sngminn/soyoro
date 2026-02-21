import type { ReviewType } from "@/constants/reviews";

interface ReviewCardProps {
  review: ReviewType;
}

// 따옴표 아이콘 SVG 컴포넌트
const QuoteIcon = () => (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#E7F0FD] mb-3"
  >
    <title>Quote Icon</title>
    <path
      d="M5.5 16C2.46243 16 0 13.5376 0 10.5C0 7.46243 2.46243 5 5.5 5C5.81643 5 6.12643 5.02671 6.42786 5.07829C5.46229 2.05386 2.65171 0 0 0H0.5C4.08986 0 7 2.91014 7 6.5C7 8.08386 6.43857 9.53671 5.5 10.6696C6.44471 11.2334 7 12.2351 7 13.5C7 14.8807 5.88071 16 4.5 16H5.5ZM16.5 16C13.4624 16 11 13.5376 11 10.5C11 7.46243 13.4624 5 16.5 5C16.8164 5 17.1264 5.02671 17.4279 5.07829C16.4623 2.05386 13.6517 0 11 0H11.5C15.0899 0 18 2.91014 18 6.5C18 8.08386 17.4386 9.53671 16.5 10.6696C17.4447 11.2334 18 12.2351 18 13.5C18 14.8807 16.8807 16 15.5 16H16.5Z"
      fill="currentColor"
    />
  </svg>
);

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="w-full bg-[#f4f4f4] rounded-3xl md:rounded-4xl p-7 md:p-9 shadow-[inset_0_1px_3px_rgba(255,255,255,0.7),0_2px_8px_rgba(0,0,0,0.04)] border border-neutral-200/60 relative overflow-hidden">
      {/* Decorative pseudo-texture elements for paper feel (applied via CSS classes) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(45deg,#000_1px,transparent_1px),linear-gradient(-45deg,#000_1px,transparent_1px)] bg-size-[4px_4px]" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6 md:mb-8">
          <div className="flex flex-col gap-2 md:gap-3">
            {/* Tag Badge */}
            <div className="inline-flex items-center justify-center bg-[#F3F6FD] text-[#22416D] text-[13px] font-bold px-3 py-1.5 rounded-full">
              {review.tag}
            </div>
            {/* Title Area */}
            <h3 className="text-[22px] md:text-[24px] font-bold text-[#1B325F] tracking-tight">
              {review.university}
            </h3>
            <p className="text-[14px] md:text-[15px] text-gray-500 font-medium tracking-tight">
              {review.studentInfo}
            </p>
          </div>
        </div>

        {/* Quote Icon */}
        <QuoteIcon />

        {/* Content Text */}
        <p className="text-[15px] md:text-[17px] leading-[1.7] md:leading-[1.8] text-soyoro-text-primary font-medium tracking-tight whitespace-pre-line">
          {review.content}
        </p>
      </div>
    </div>
  );
}
