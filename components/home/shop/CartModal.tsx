"use client";
import {
  decreaseQuantity,
  deleteItemFromCart,
  increaseQuantity,
  RootState,
} from "@/utils/redux/store";
import { PRICE_PER_RECIPE, routePath } from "@/utils/utils";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartPosition from "./CartPosition";
import { CartModalProps } from "@/utils/utilsShop";

export default function CartModal({
  isCartVisible,
  toggleCartModal,
}: CartModalProps) {
  const cart = useSelector((state: RootState) => state.cartSlice);
  const totalQuantity = useSelector((state: RootState) =>
    state.cartSlice.reduce((total, item) => total + (item.quantity || 0), 0)
  );

  // const [coupon, setCoupon] = useState<string>("");
  const dispatch = useDispatch();
  function handleIncrease(id: string) {
    dispatch(increaseQuantity({ id }));
  }
  function handleDecrease(id: string) {
    dispatch(decreaseQuantity({ id }));
  }
  function handleDeleteItem(id: string) {
    dispatch(deleteItemFromCart({ id }));
  }

  return (
    <>
      <div
        style={{
          transform: isCartVisible ? "translateX(0)" : "translateX(100%)",
          position: "fixed",
          top: 0,
          right: 0,
          width: "25%",
          height: "100%",
          backgroundColor: "#333",
          color: "white",
          padding: "20px",
          transition: "transform 0.3s ease-in-out",
          zIndex: 1000,
        }}
      >
        <button onClick={toggleCartModal}>X</button>
        <div>
          {" "}
          <div>
            <div>
              <p>CART:</p>
            </div>
            {cart.length > 0 && (
              <div>
                <table>
                  <tbody>
                    <CartPosition
                      cart={cart}
                      handleIncrease={handleIncrease}
                      handleDecrease={handleDecrease}
                      handleDeleteItem={handleDeleteItem}
                    />
                  </tbody>
                </table>
                {/* <InputCoupon
                  coupon={coupon}
                  setCoupon={setCoupon}
                  couponPlaceholder={"write coupon"}
                /> */}
                <p>price: ${totalQuantity * PRICE_PER_RECIPE}</p>
              </div>
            )}
          </div>
        </div>
        <Link href={routePath.cart} onClick={toggleCartModal}>
          go to cart
        </Link>{" "}
        <Link href={routePath.summary} onClick={toggleCartModal}>
          go to summary
        </Link>
      </div>
    </>
  );
}
