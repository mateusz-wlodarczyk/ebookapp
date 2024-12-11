import { SingleReviewProps } from "@/utils/utilsReview";

export default function SingleReview({ el }: SingleReviewProps) {
  return (
    <>
      <p>{el.review_text}</p> <p>stars: {el.review_stars}</p>
      <p>id: {el.review_product_id}</p>
    </>
  );
}
