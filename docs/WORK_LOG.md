# 📝 SOYORO WORK LOG

## [2026-02-21] 랜딩 페이지 - 첫 번째 섹션 작업 시작

- **수행 내용:**
  - `SKILL.md` 문서 정립 및 규칙 숙지.
  - `MASTER_PLAN.md`에 첫 번째 섹션(Hero Section) 구조 기획 작성.
  - `layout.tsx`에 Pretendard 폰트 글로벌 설정 완료 및 `globals.css` 디자인 토큰 구성.
  - 9각형(정9각형 비율) 마스크 구현 (`NonagonImage.tsx`).
  - 첫 번째 섹션 퍼블리싱 완료 (`HeroSection.tsx`).

## [2026-02-21] 랜딩 페이지 - 두 번째 섹션(Review) 기획 및 개발

- **수행 내용:**
  - 시안(합격 후기 카드 3장) 분석 및 설계.
  - `MASTER_PLAN.md`에 Phase 4 (Review 섹션) 추가.
  - 후기 데이터 상수화 (`reviews.ts`).
  - 종이 질감을 흉내 낸 CSS 스타일링 기반의 `ReviewCard` 컴포넌트 배포.
  - 세로 나열형 구조인 `ReviewSection` 컴포넌트 구성 후 메인 페이지(`page.tsx`) 연동 완료.

## [2026-02-21] 랜딩 페이지 - 세 번째 섹션(Accepted List) 기획 및 개발

- **수행 내용:**
  - 시안(세로로 무한 롤링되는 합격자 명단) 분석 및 `mask-image`, CSS 애니메이션 설계.
  - `MASTER_PLAN.md`에 Phase 5 (Accepted List 섹션) 추가.
  - 합격자 명단 데이터 상수화 (`constants/accepted.ts`).
  - CSS `@keyframes` `marquee-vertical` 속성과 상하 페이드아웃 효과(`mask-image`)를 적용한 `AcceptedListSection.tsx` 배포.

## [2026-02-21] 랜딩 페이지 - 네 번째 섹션(Vision) 기획 및 개발

- **수행 내용:**
  - 합격률 타이포그래피 및 예술경영 비전 설명 시안 분석.
  - 텍스트 하이라이트(형광펜 효과) 및 폰트 컬러 강조 요소 파악.
  - `MASTER_PLAN.md`에 Phase 6 (Vision 섹션) 추가.
  - 햄의 피드백("`::after`가 깔끔할듯")을 반영하여 배후(`-z-10`)에 얇은 배경색을 까는 `HighlightText` 공통 컴포넌트 개발.
  - 타이포그래피 간격 및 레드 컬러 포인트 적용.
  - 아키텍처 노드 맵(`node.png`) 배치.
  - `VisionSection.tsx` 퍼블리싱 완료.
  - 개발 서버 구동 후 형광펜 텍스트 및 레이아웃 육안 검수 대기.

## [2026-02-21] 랜딩 페이지 - 다섯 번째 섹션(Roadmap) 기획 및 개발

- **수행 내용:**
  - `drama.jpg`, `road.png` 에셋을 활용한 비전 로드맵 디자인 시안 분석.
  - `MASTER_PLAN.md`에 Phase 7 (Roadmap 섹션) 추가.
  - 로드맵 STEP 설명을 담은 상수 분리 (`constants/roadmap.ts`). (시안 상 중복된 3~4번째 설명 텍스트도 배열로 분리하여 유지보수성 확보)
  - `HighlightText`를 재사용한 텍스트 강조 및 이미지 뷰가 포함된 `RoadmapSection.tsx` 레이아웃 구성. 전역 연동.
- **다음 계획:**
  - `pnpm dev`를 띄워 모바일 환경에서의 전체 화면 에셋(`drama.jpg`) 및 노드 간격(`road.png`) 육안 검수 대기.
