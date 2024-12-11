"use server";

import { createSSRClient } from "@/utils/supabase/server";
import { ReviewProduct } from "@/utils/utilsShop";

export const showProductReview = async (slug: string | null) => {
  const client = await createSSRClient();
  if (slug !== null) {
    const { data, error } = await client
      .from("review")
      .select("*")
      .eq("review_product_id", slug);
    return data;
  }
};

export const addReview = async (review: ReviewProduct) => {
  const client = await createSSRClient();
  const error = await client
    .from("review")
    .insert([
      {
        review_text: review.review_text,
        review_product_id: review.review_product_id,
        review_stars: review.review_stars,
      },
    ])
    .select();
  return error;
};

export const removeReview = async (id: number) => {
  const client = await createSSRClient();
  const error = await client.from("review").delete().eq("id", id);
  return error;
};
export const getAllReviews = async () => {
  const client = await createSSRClient();
  const { data, error } = await client.from("review").select("*");
  return { data, error };
};
