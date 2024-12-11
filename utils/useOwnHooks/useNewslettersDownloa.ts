"use client";
import { useState, useEffect } from "react";
import { ErrorCouponSupabase } from "../supabase/server";
import { showNewsletters } from "@/actions/handleNewsletter";
import { Newsletter } from "./useOrdersDownload";



export default function useNewslettersDownload(idCategory:number = 0) {
    const[ error, setError] = useState<ErrorCouponSupabase | null>(null)
  const [downloadedNewsletter, setDownloadedNewsletter] =
    useState<Newsletter[] | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
        try {
          const result = await showNewsletters();
          if (result.error) {
            setError(error);
          } else {
            setDownloadedNewsletter(result.data);
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

  return { downloadedNewsletter, error };
}
