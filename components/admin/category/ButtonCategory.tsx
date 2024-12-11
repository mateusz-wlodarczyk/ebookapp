import { ButtonCategoryProps } from "@/utils/utilsCategory";

export default function ButtonCategory({
  handleClickButton,
  text,
  id,
}: ButtonCategoryProps) {
  return (
    <>
      <button onClick={(e) => handleClickButton(id!)}>{text}</button>
    </>
  );
}
