"use client";
import {
  addCoupon,
  Coupon,
  removeCoupon,
  updateCoupon,
} from "@/actions/handleCouponsSupabase";
import ButtonCoupon from "@/components/admin/coupon/ButtonCoupon";
import FormCoupon from "@/components/admin/coupon/FormCoupon";
import InputCoupon from "@/components/admin/coupon/InputCoupon";
import LabelCoupon from "@/components/admin/coupon/LabelCoupon";
import { ErrorCouponSupabase } from "@/utils/supabase/server";
import useCouponDownload from "@/utils/useOwnHooks/useCouponDownload";

import { FormEvent, useState } from "react";

export default function Pages() {
  const [inputValues, setInputValues] = useState<Record<number, Coupon>>({});
  const [error, setError] = useState<ErrorCouponSupabase | null>(null);
  const [idCoupon, setIdCoupon] = useState(0);
  const { downloadedCoupons, error: errorDownloadedCoupons } =
    useCouponDownload(idCoupon);

  function handleError(error: any) {
    if (error !== null) {
      setError(error);
    } else {
      setError(null);
    }
  }

  async function handleAddCoupon(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const coupon_text = event.currentTarget.coupon_text.value;
    const coupon_value = event.currentTarget.coupon_value.value;
    const id = Math.floor(Math.random() * 100000);

    const error = await addCoupon({
      coupon_text,
      coupon_value,
    });
    handleError(error);
    setIdCoupon(id);
  }

  async function handleRemoveCoupon(id: number) {
    const error = await removeCoupon(id);
    handleError(error);
    setIdCoupon(id);
  }

  const handleInputChange = (
    id: number,
    key: "coupon_text" | "coupon_value",
    value: string
  ) => {
    setInputValues((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [key]: key === "coupon_value" ? Number(value) : value,
      },
    }));
  };
  async function handleUpdateCoupon(id: number) {
    const updatedCoupon = {
      id,
      coupon_value: inputValues[id]?.coupon_value,
      coupon_text: inputValues[id]?.coupon_text,
    };

    if (inputValues[id] === undefined) return;
    const error = await updateCoupon(updatedCoupon);
    handleError(error);
    setIdCoupon(id);
  }
  return (
    <>
      <div>
        <div>
          <p>coupons list</p>
          <div>
            {downloadedCoupons !== null &&
              downloadedCoupons !== undefined &&
              downloadedCoupons.map((el) => (
                <div key={el.id} style={{ display: "flex", gap: "3px" }}>
                  <LabelCoupon
                    htmlFor={`${el.coupon_value}`}
                    text="coupon text: "
                  />
                  <InputCoupon
                    inputValues={inputValues}
                    handleInputChange={handleInputChange}
                    text_id="coupon_text"
                    placeholder="new text"
                    el={el}
                    type="text"
                  />
                  <LabelCoupon
                    htmlFor={`${el.coupon_value}`}
                    text="coupon value: "
                  />
                  <InputCoupon
                    inputValues={inputValues}
                    handleInputChange={handleInputChange}
                    text_id="coupon_value"
                    placeholder="new text"
                    el={el}
                    type="text"
                  />
                  <ButtonCoupon
                    el={el}
                    text="delete"
                    handleOnClick={handleRemoveCoupon}
                  />{" "}
                  <ButtonCoupon
                    el={el}
                    text="update"
                    handleOnClick={handleUpdateCoupon}
                  />
                </div>
              ))}
          </div>
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <FormCoupon
            handleAddCoupon={handleAddCoupon}
            errorDownloadedCoupons={errorDownloadedCoupons}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    </>
  );
}
