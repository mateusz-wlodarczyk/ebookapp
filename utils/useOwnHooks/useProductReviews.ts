
"use client";
import { useEffect, useState } from "react";
import {  ReviewProduct } from "../utilsShop";
import { showProductReview } from "@/actions/handleReviews";
import { ErrorCouponSupabase } from "../supabase/server";


export default function useProductReviews(slug: string | null) {
const[ error, setError] = useState<ErrorCouponSupabase | null>(null)
const [downloadedProductReviews, setDownloadedProductReviews] =
  useState<ReviewProduct[] | null>(null);

  useEffect(() => {
    if (!slug) return; 
    const fetchProductReviews = async () => {
      try {
        const result = await showProductReview(slug);
        if (result && Array.isArray(result)) {
             setDownloadedProductReviews(result);} else{
            setDownloadedProductReviews([]);}

        if (error) {
          setError({
            code: "FETCH_ERROR",
            details: error.details || null,
            hint: error.hint || null,
            message: error.message || "Failed to fetch product reviews.",
          });
        } 
      } catch (err) {
        setDownloadedProductReviews([]);
        setError({
          code: "FETCH_ERROR",
          details: err instanceof Error ? err.message : null,
          hint: null,
          message: "An unexpected error occurred while fetching reviews.",
        });
      }
    };

    fetchProductReviews(); 

  }, [slug]);

// console.log('nakoncu',downloadedProductReviews)
return { downloadedProductReviews, error };
}


