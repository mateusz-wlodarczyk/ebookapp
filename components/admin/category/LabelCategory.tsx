import { LabelCategoryProps } from "@/utils/utilsCategory";

export default function LabelCategory({ text, el }: LabelCategoryProps) {
  return (
    <>
      <label htmlFor={el.category_name}>{text}</label>
    </>
  );
}
