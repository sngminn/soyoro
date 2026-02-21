export interface RoadmapStep {
  id: string;
  stepName: string;
  title: string;
  description: string;
}

export const ROADMAP_DATA: RoadmapStep[] = [
  {
    id: "step-1",
    stepName: "STEP 1.",
    title: "작품 관람법 배우기",
    description:
      "그동안 관심있던 단일 장르의 예술 외에도 다양한 예술 관람법을 배우며, 관객의 시선에서 기획자의 시선으로 거듭납니다.",
  },
  {
    id: "step-2",
    stepName: "STEP 2.",
    title: "세부 전공 연구",
    description:
      "공연과 영상으로 나뉘는 세부 전공 중 하나를 선정해, 전공 분야 리포트를 작성하고 관련 트렌드를 공부합니다.",
  },
  {
    id: "step-3",
    stepName: "STEP 3.",
    title: "비전 에세이 (VE)",
    description:
      "세부 전공 중 구체적인 예술 장르를 비전으로 선정합니다. 비전과 관련한 주제에 관하여 1만자 분량의 에세이를 작성합니다.",
  },
  {
    id: "step-4",
    stepName: "STEP 4.",
    title: "비전 프리젠테이션 (VP)",
    description:
      "세부 전공 중 구체적인 예술 장르를 비전으로 선정합니다. 비전과 관련한 주제에 관하여 1만자 분량의 에세이를 작성합니다.", // STEP 3와 동일한 내용 반영 중. 추후 변경 가능
  },
];
