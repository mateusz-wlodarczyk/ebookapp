import React from "react";
import InputCoupon from "./InputCoupon";
import { CouponProps } from "@/utils/utilsShop";

export default function Coupon({
  coupon,
  setCoupon,
  handleCoupon,
}: CouponProps) {
  return (
    <>
      <InputCoupon
        coupon={coupon}
        setCoupon={setCoupon}
        couponPlaceholder={"write coupon"}
      />
      <button onClick={() => handleCoupon(coupon)}>verify</button>
    </>
  );
}
