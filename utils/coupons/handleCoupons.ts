import { removeCoupon } from "@/actions/handleCouponsSupabase";
import { useEffect, useState } from "react";

export async function handleRemoveCoupon(id:number){

const [error, setError ] = useState()

    useEffect(() => {
      const removeCouponFetch = async () => {
        try {
          const {  error } = await removeCoupon(id);
          if (error) {
            setError(error);
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
      console.log(error)
      removeCouponFetch();
    }, [id]);
    return error
}