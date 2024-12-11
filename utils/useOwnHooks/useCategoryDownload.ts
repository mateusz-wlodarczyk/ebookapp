"use client";
import { useState, useEffect } from "react";
import { showCategories } from "@/actions/handleCategories";
import { Category } from "../utilsCategory";
import { ErrorCouponSupabase } from "../supabase/server";



export default function useCategoryDownload(idCategory:number = 0) {
    const[ error, setError] = useState<ErrorCouponSupabase | null>(null)
  const [downloadCategories, setDownloadCategories] =
    useState<Category[] | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
        try {
          const result = await showCategories();
          if (result.error) {
            setError(error);
          } else {
            setDownloadCategories(result.data);
          }
        } catch (err) {
          setError({
            code: "FETCH_ERROR",
            details: null,
            hint: null,
            message: "Failed to fetch coupons.",
          });
        }
      };
      fetchCategory();
    }, [idCategory]);

  return { downloadCategories, error };
}
