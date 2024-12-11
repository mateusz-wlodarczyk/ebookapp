"use server";

import { createSSRClient } from "@/utils/supabase/server";
import { Category } from "@/utils/utilsCategory";

export const showCategories = async () => {
  const client = await createSSRClient();
  const { data, error } = await client.from("category").select("*");
  return { data, error };
};

export const addCategory = async (name: string) => {
  const client = await createSSRClient();
  const error = await client
    .from("category")
    .insert([{ category_name: name }])
    .select();
  return error;
};

export const removeCategory = async (id: number) => {
  const client = await createSSRClient();
  const error = await client.from("category").delete().eq("id", id);
  return error;
};

export const updateCategory = async (category: Category) => {
  const updateData: Partial<Category> = {};
  const client = await createSSRClient();
  if (category.category_name) {
    updateData.category_name = category.category_name;
  }

  if (Object.keys(updateData).length > 0) {
    const error = await client
      .from("category")
      .update(updateData)
      .eq("id", category.id)
      .select();
    return error;
  }
};
