import HeroSection from "@/components/landing/HeroSection";
import ReviewSection from "@/components/landing/ReviewSection";
import AcceptedListSection from "@/components/landing/AcceptedListSection";
import VisionSection from "@/components/landing/VisionSection";
import RoadmapSection from "@/components/landing/RoadmapSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-soyoro-bg text-soyoro-text-primary">
      <HeroSection />
      <ReviewSection />
      <AcceptedListSection />
      <VisionSection />
      <RoadmapSection />
    </main>
  );
}
