"use client";
import { addToCart } from "@/utils/redux/store";
import { ShopAddCartProps } from "@/utils/utilsShop";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";

export default function ShopAddCart({ id, title }: ShopAddCartProps) {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              id: id,
              name: title,
            })
          )
        }
      >
        <MdAddShoppingCart />
      </button>
    </>
  );
}
