"use server";

import { createSSRClient } from "@/utils/supabase/server";
export type Coupon = { id?: number; coupon_text: string; coupon_value: number };

export const checkCoupon = async (coupon: string) => {
  const client = await createSSRClient();
  const { data, error } = await client
    .from("coupon")
    .select("*")
    .eq("coupon_text", coupon);
  return data;
};
export const showCoupons = async () => {
  const client = await createSSRClient();
  const { data, error } = await client.from("coupon").select("*");
  return data;
};

export const addCoupon = async (coupon: Coupon) => {
  const client = await createSSRClient();
  const { data, error } = await client
    .from("coupon")
    .insert([
      { coupon_text: coupon.coupon_text, coupon_value: coupon.coupon_value },
    ])
    .select();
  return { data, error };
};

export const removeCoupon = async (id: number) => {
  const client = await createSSRClient();
  const error = await client.from("coupon").delete().eq("id", id);

  return error;
};
export const getAllCoupons = async () => {
  const client = await createSSRClient();
  const { data, error } = await client.from("coupon").select("*");
  return { data, error };
};
export const updateCoupon = async (coupon: Coupon) => {
  const updateData: Partial<Coupon> = {};
  const client = await createSSRClient();
  if (coupon.coupon_value) {
    updateData.coupon_value = coupon.coupon_value;
  }
  if (coupon.coupon_text) {
    updateData.coupon_text = coupon.coupon_text;
  }

  if (Object.keys(updateData).length > 0) {
    const error = await client
      .from("coupon")
      .update(updateData)
      .eq("id", coupon.id)
      .select();
    return error;
  }
};
