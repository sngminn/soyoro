# 🎯 SOYORO MASTER PLAN

## 1. 개요 (Overview)

- **페이지:** 랜딩 페이지 (단일 페이지, Mobile First)
- **목표:** 'SOYORO' 예술경영 입시과외의 차별점과 철학을 전달하는 첫 번째 섹션 구축.
- **주요 UI 요소:**
  - `Pretendard` 폰트 적용 (가변 서브셋)
  - 9각형(Nonagon) 형태의 이미지 마스크 (CSS `clip-path` 활용)
  - 헤딩 타이포그래피 ("2026년은 예술경영 합격...")
  - 본문 텍스트 (입시생 시절의 경험, 소요로의 철학)

## 2. 컴포넌트 구조 (Component Architecture)

```mermaid
graph TD
    A[app/page.tsx] --> B[components/landing/HeroSection.tsx]
    B --> C[components/ui/NonagonImage.tsx]
    B --> D[components/ui/Typography.tsx]
```

## 3. 작업 페이즈 (Phases)

- [ ] **Phase 1: 폰트 및 글로벌 스타일 설정**
  - `layout.tsx`에 Pretendard 가변 폰트 적용
  - Tailwind 기본 설정(컬러, 폰트 패밀리)
- [ ] **Phase 2: UI 컴포넌트 개발**
  - `NonagonImage`: 9각형 클립 패스가 적용된 이미지 컴포넌트 (`clip-path: polygon(...)`)
  - Typography 컴포넌트 클래스 유틸 정의 (모바일 우선 반응형 사이즈)
- [x] **Phase 3: Hero 섹션 조립**
  - 가이드라인 라인(Border), 간격(Margin/Padding)을 픽셀 퍼펙트에 가깝게 구현.
  - 모바일(390px 근방) 기준의 레이아웃 최적화.
- [x] **Phase 4: Review 섹션 개발**
  - `ReviewCard`: 학생들의 합격 후기를 담는 카드 컴포넌트 (태그, 학교, 후기 대사 등)
  - `ReviewSection`: 리뷰 카드들을 세로로 나열하는 컨테이너 섹션.
- [x] **Phase 5: Accepted List 섹션 개발**
  - `AcceptedListSection`: 무한 세로 스크롤(Vertical Marquee) 애니메이션이 적용된 합격자 명단.
  - 마스크(`mask-image`)를 사용해 상하단 페이드아웃 효과 적용.
- [x] **Phase 6: Vision 섹션 개발**
  - `VisionSection`: 합격률 통계와 예술경영 '비전'의 중요성을 설명하는 섹션.
  - 텍스트 하이라이트 효과 (배경색 강조, 텍스트 색상 강조) 유틸리티 적용.
  - `node.png` 이미지를 포함한 레이아웃 구성.
- [ ] **Phase 7: Roadmap 섹션 개발**
  - `RoadmapSection`: 상단 전경 이미지(`drama.jpg`), 로드맵 이미지(`road.png`), 그리고 스텝별 커리큘럼 카드가 나열되는 섹션.
  - 별도의 상수로 분리된 커리큘럼 Step 데이터(`constants/roadmap.ts`) 렌더링.
