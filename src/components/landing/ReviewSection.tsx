import { REVIEWS } from "@/constants/reviews";
import ReviewCard from "../ui/ReviewCard";

export default function ReviewSection() {
  return (
    <section className="w-full max-w-120 md:max-w-2xl mx-auto bg-soyoro-bg pt-10 md:pt-16 pb-20 md:pb-28 flex flex-col items-center">
      <div className="w-full px-6 md:px-10 flex flex-col gap-6 md:gap-8">
        {REVIEWS.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
