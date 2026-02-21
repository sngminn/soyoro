import type { ReactNode } from "react";

interface HighlightTextProps {
  children: ReactNode;
  className?: string;
  highlightClassName?: string;
}

export default function HighlightText({
  children,
  className = "",
  highlightClassName = "bg-[#FCECD9]",
}: HighlightTextProps) {
  return (
    <span
      className={`relative inline-block z-0 ${className}`}
      style={
        {
          // 텍스트의 가독성을 해치지 않으면서 형광펜 효과를 내기 위해
          // 텍스트는 위로 올리고 가상 요소를 텍스트 뒤에 뺌
        }
      }
    >
      <span className="relative z-10">{children}</span>
      <span
        className={`absolute left-0 bottom-[10%] w-full h-[80%] -z-10 ${highlightClassName}`}
        aria-hidden="true"
      ></span>
    </span>
  );
}
