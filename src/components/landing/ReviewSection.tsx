import { REVIEWS } from "@/constants/reviews";
import ReviewCard from "../ui/ReviewCard";

export default function ReviewSection() {
  return (
    <section className="w-full max-w-120 mx-auto bg-soyoro-bg px-6 pb-24 pt-4 flex flex-col gap-6">
      {REVIEWS.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </section>
  );
}
