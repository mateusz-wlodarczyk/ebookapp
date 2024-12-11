import { Category, InputCategoryProps } from "@/utils/utilsCategory";

export default function InputCategory({
  handleInputChange,
  inputValues,
  el,
  placeholder,
  type,
}: InputCategoryProps) {
  return (
    <>
      <input
        style={{ color: "white", width: "150px" }}
        type={type}
        name={el.category_name}
        placeholder={placeholder}
        id={`${el.id}`}
        value={inputValues[el.id] || el.category_name}
        onChange={(e) => handleInputChange(el.id!, e.target.value)}
      />
    </>
  );
}
