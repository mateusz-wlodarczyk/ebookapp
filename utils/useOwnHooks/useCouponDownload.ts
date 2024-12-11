"use client";
import { useState, useEffect } from "react";
import { Coupon, getAllCoupons } from "@/actions/handleCouponsSupabase";
import { ErrorCouponSupabase } from "../supabase/server";


export default function useCouponDownload(idCoupon:number) {
    const[ error, setError] = useState<ErrorCouponSupabase | null>(null)
  const [downloadedCoupons, setDownloadedCoupons] =
    useState<Coupon[] | null>(null);

  useEffect(() => {
    const fetchCoupons = async () => {
        try {
          const { data, error } = await getAllCoupons();
          // console.log(data)
          if (error) {
            setError(error);
          } else {
            setDownloadedCoupons(data);
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
  
      fetchCoupons();
    }, [idCoupon]);

  return { downloadedCoupons, error };
}
