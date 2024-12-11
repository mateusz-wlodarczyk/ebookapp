import { Coupon } from "@/actions/handleCouponsSupabase";

export type ButtonCouponProps = {
  el: Coupon;
  text: string;
  handleOnClick: (el: number) => void;
};

export default function ButtonCoupon({
  el,
  text,
  handleOnClick,
}: ButtonCouponProps) {
  return (
    <>
      <button onClick={() => handleOnClick(el.id!)}>{text}</button>
    </>
  );
}
