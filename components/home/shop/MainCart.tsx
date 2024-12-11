"use client";
import {
  decreaseQuantity,
  deleteItemFromCart,
  increaseQuantity,
  RootState,
} from "@/utils/redux/store";

import { PRICE_PER_RECIPE } from "@/utils/utils";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartPosition from "./CartPosition";
import { checkCoupon } from "@/actions/handleCouponsSupabase";
import InputCoupon from "./InputCoupon";
import { addOrder } from "@/actions/handleOrders";

export default function MainCart() {
  const cart = useSelector((state: RootState) => state.cartSlice);
  const totalQuantity = useSelector((state: RootState) =>
    state.cartSlice.reduce((total, item) => total + (item.quantity || 0), 0)
  );
  const [coupon, setCoupon] = useState<string>("");
  const [couponValue, setCouponValue] = useState<
    { coupon_text: string; coupon_value: number; id: number }[] | null
  >(null);
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

  async function handleCoupon(couponValue: string) {
    const response = await checkCoupon(couponValue);

    if (response !== null && response.length > 0) {
    }
    setCouponValue(response);
  }

  async function handleBuyIt() {
    const orderObj = {
      user_name: "_tbd_",
      cart,
      coupon_code: couponValue !== null && couponValue.length > 0 ? coupon : "",
    };

    await addOrder(orderObj);
  }

  return (
    <>
      <div>
        <div>
          <p>CART:</p>
        </div>
        {cart.length > 0 && (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <CartPosition
                  cart={cart}
                  handleIncrease={handleIncrease}
                  handleDecrease={handleDecrease}
                  handleDeleteItem={handleDeleteItem}
                />
              </tbody>
            </table>

            <InputCoupon
              coupon={coupon}
              setCoupon={setCoupon}
              couponPlaceholder={"write coupon"}
            />
            <button onClick={() => handleCoupon(coupon)}>verify</button>
            <p>
              price: $
              {couponValue !== null && couponValue.length > 0
                ? ((100 - couponValue[0].coupon_value) / 100) *
                  totalQuantity *
                  PRICE_PER_RECIPE
                : totalQuantity * PRICE_PER_RECIPE}
            </p>
          </div>
        )}
      </div>
      <button onClick={handleBuyIt}>buy it</button>
    </>
  );
}
