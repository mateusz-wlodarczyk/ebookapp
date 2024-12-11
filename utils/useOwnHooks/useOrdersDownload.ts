"use client";
import { useState, useEffect } from "react";
import {  showOrders } from "@/actions/handleOrders";
import { ErrorCouponSupabase } from "../supabase/server";

export type Newsletter = {id:number;email_user:string}

export default function useOrdersDownload(idOrder:number = 0) {
    const[ error, setError] = useState<ErrorCouponSupabase | null>(null)
  const [downloadOrders, setDownloadOrders] =
    useState<Newsletter[] | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
        try {
          const result = await showOrders();
          if (error) {
            setError(error);
          } else {
            setDownloadOrders(result);
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
  
      fetchOrders();
    }, [idOrder]);

  return { downloadOrders, error };
}
