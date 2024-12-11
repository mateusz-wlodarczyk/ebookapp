import { ErrorCouponSupabase } from "@/utils/supabase/supabase";
import LabelCoupon from "./LabelCoupon";
import { FormEvent } from "react";

export type FormCouponProps = {
  handleAddCoupon: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  errorDownloadedCoupons: ErrorCouponSupabase;
};

export default function FormCoupon({
  handleAddCoupon,
  errorDownloadedCoupons,
}: FormCouponProps) {
  return (
    <>
      <form onSubmit={handleAddCoupon}>
        <LabelCoupon htmlFor="coupon_text" text="coupon text:" />
        <input type="text" name="coupon_text" id="coupon_text" />
        <LabelCoupon htmlFor="coupon_value" text="coupon value:" />
        <input type="number" name="coupon_value" id="coupon_value" />
        <button type="submit">add</button>
        {errorDownloadedCoupons !== null && (
          <>
            <p>error:</p>
            <p>{errorDownloadedCoupons?.code}</p>
            <p>{errorDownloadedCoupons?.message}</p>
          </>
        )}
      </form>
    </>
  );
}
