import { ShopCategoryProps } from "@/utils/utilsShop";

export default function ShopCategory({
  name,
  setSearchValue,
}: ShopCategoryProps) {
  return (
    <>
      <button onClick={() => setSearchValue(name)}>{name}</button>
    </>
  );
}
