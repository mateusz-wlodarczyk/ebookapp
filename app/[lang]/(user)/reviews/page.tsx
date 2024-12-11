"use client";
import useReviewDownload from "@/utils/useOwnHooks/useReviewDownload";
import { useState } from "react";
import { removeReview } from "@/actions/handleReviews";
import ButtonReview from "@/components/admin/review/ButtonReview";
import SingleReview from "@/components/admin/review/SingleReview";
import { ErrorCouponSupabase } from "@/utils/supabase/server";

export default function Page() {
  const [idReview, setIdReview] = useState(0);
  const { downloadedReviews } = useReviewDownload(idReview);
  const [error, setError] = useState<ErrorCouponSupabase | null>(null);

  function handleError(error: any) {
    if (error !== null) {
      setError(error);
    } else {
      setError(null);
    }
  }

  function handleRemoveReview(id: number) {
    const error = removeReview(id);
    handleError(error);
    setIdReview(id);
  }

  return (
    <>
      <div>
        <div>
          <p>reviews list</p>
          <div>
            {downloadedReviews !== null &&
              downloadedReviews !== undefined &&
              downloadedReviews.map((el) => (
                <div key={el.id} style={{ display: "flex", gap: "3px" }}>
                  <SingleReview el={el} />
                  <ButtonReview
                    handleClickButton={handleRemoveReview}
                    text="delete"
                    id={el.id!}
                  />
                </div>
              ))}
          </div>
        </div>{" "}
        {error && <p style={{ color: "red" }}>{error?.message}</p>}
      </div>
    </>
  );
}
