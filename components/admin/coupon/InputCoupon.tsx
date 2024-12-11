import { Coupon } from "@/actions/handleCouponsSupabase";

export type InputCouponProps = {
  el: Coupon;
  inputValues: Record<number, Coupon>;
  handleInputChange: (
    el: number,
    arg_1: "coupon_text" | "coupon_value",
    arg_2: string
  ) => void;
  text_id: "coupon_text" | "coupon_value";
  placeholder: string;
  type: string;
};

export default function InputCoupon({
  el,
  inputValues,
  handleInputChange,
  text_id,
  placeholder,
  type,
}: InputCouponProps) {
  return (
    <>
      <input
        style={{ color: "white", width: "100px" }}
        type={type}
        name={el.coupon_text}
        placeholder={placeholder}
        id={`${text_id}_${el.id}`}
        value={inputValues[el.id!]?.coupon_text || el.coupon_text}
        onChange={(e) =>
          handleInputChange(el.id!, `${text_id}`, e.target.value)
        }
      />
    </>
  );
}
