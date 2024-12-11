"use client";
import { useState, useEffect } from "react";
import {  ReviewProduct } from "../utilsShop";
import { getAllReviews } from "@/actions/handleReviews";
import { ErrorCouponSupabase } from "../supabase/server";



export default function useReviewDownload(idReview:number) {

    const[ error, setError] = useState<ErrorCouponSupabase | null>(null)
  const [downloadedReviews, setDownloadedReviews] =
    useState<ReviewProduct[] | null>(null);

  useEffect(() => {
   
    const fetchReviews = async () => {
        try {
          const result = await getAllReviews();
          if (result && Array.isArray(result.data)) {    
            setDownloadedReviews(result.data);} else{console.log('co tu sie dzieje?')
              setDownloadedReviews([]);}
          if (error) {
            setError(error);
          } 
        } catch (err) { 
          setDownloadedReviews([])
          setError({
            code: "FETCH_ERROR",
            details: null,
            hint: null,
            message: "Failed to fetch coupons.",
          });
        }
      };

      fetchReviews();
    }, [idReview]);

  return { downloadedReviews, error };
}
