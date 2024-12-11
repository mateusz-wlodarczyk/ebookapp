export type LabelCouponType = {
  htmlFor: string;
  text: string;
};

export default function LabelCoupon({ htmlFor, text }: LabelCouponType) {
  return (
    <>
      <label htmlFor={htmlFor}>{text}</label>
    </>
  );
}
