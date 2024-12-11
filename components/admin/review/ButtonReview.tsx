import { ButtonReviewProps } from "@/utils/utilsReview";

export default function ButtonReview({
  handleClickButton,
  text,
  id,
}: ButtonReviewProps) {
  return (
    <>
      <button onClick={(e) => handleClickButton(id)}>{text}</button>
    </>
  );
}
