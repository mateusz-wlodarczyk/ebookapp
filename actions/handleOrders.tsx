"use server";

import { createSSRClient } from "@/utils/supabase/server";
import { Order } from "@/utils/utilsOrders";

//perLogedUser??
export const showOrders = async () => {
  const client = await createSSRClient();
  const { data, error } = await client.from("orders").select("*");
  return data;
};

export const addOrder = async (order: Order) => {
  console.log(order);
  const client = await createSSRClient();
  const { data, error } = await client
    .from("orders")
    .insert([{ user_name: order.user_name, cart: order.cart }])
    .select();
  return { data, error };
};

export const removeOrder = async (id: number) => {
  const client = await createSSRClient();
  const { data, error } = await client.from("orders").delete().eq("id", id);

  return data;
};
