"use client";

import { addReview } from "@/actions/handleReviews";
import { REVIEW_STARS_NUMBER } from "@/utils/utilsReview";
import { ReviewProps } from "@/utils/utilsShop";
import { useState } from "react";
import { CiStar } from "react-icons/ci";

export default function Review({
  downloadedProductReviews,
  slug,
}: ReviewProps) {
  const [review, setReview] = useState<string>("");
  const [rating, setRating] = useState(0);

  function handleSendReview(e: React.FormEvent) {
    e.preventDefault();
    if (review.trim() && rating > 0 && slug !== null) {
      addReview({
        review_text: review,
        review_product_id: slug,
        review_stars: rating,
      });
    }
    setReview("");
  }

  return (
    <div>
      <div style={{}}>
        {downloadedProductReviews !== null ? (
          downloadedProductReviews.map((el) => (
            <div key={el.id} style={{ display: "flex" }}>
              {Array.from({ length: el.review_stars }).map((_, starIndex) => (
                <CiStar key={starIndex} />
              ))}{" "}
              <p>{el.review_text}</p>
            </div>
          ))
        ) : (
          <p>no review</p>
        )}
      </div>

      <div style={{ display: "flex" }}>
        <form onSubmit={handleSendReview}>
          {Array.from({ length: REVIEW_STARS_NUMBER }, (_, index) => (
            <button
              type="button"
              onClick={() => setRating(index + 1)}
              key={index}
              style={{
                backgroundColor: rating > index ? "gold" : "gray",
              }}
            >
              <CiStar />
            </button>
          ))}
          <textarea
            id="review"
            name="review"
            rows={4}
            cols={50}
            placeholder="leave the review"
            onChange={(e) => setReview(e.target.value)}
          />
          <button type="submit">send</button>{" "}
        </form>
      </div>
    </div>
  );
}
