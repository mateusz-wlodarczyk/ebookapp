"use server";

import { createSSRClient } from "@/utils/supabase/server";

export const showNewsletters = async () => {
  const client = await createSSRClient();
  const { data, error } = await client.from("newsletters").select("*");
  return { data, error };
};

export const addMailNewsletters = async (name: string) => {
  const client = await createSSRClient();
  const { data, error } = await client
    .from("newsletters")
    .insert([{ email_user: name }])
    .select();
  return { data, error };
};

export const removeMailNewsletters = async (email: string) => {
  const client = await createSSRClient();
  const { data, error } = await client
    .from("newsletters")
    .delete()
    .eq("email_user", email);
  return { data, error };
};
