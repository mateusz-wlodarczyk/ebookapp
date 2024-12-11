import { InputCouponProps } from "@/utils/utilsShop";

export default function InputCoupon({
  coupon,
  setCoupon,
  couponPlaceholder,
}: InputCouponProps) {
  return (
    <>
      <input
        style={{ color: "white" }}
        placeholder={couponPlaceholder}
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
      />
    </>
  );
}
