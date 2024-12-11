"use client";
import { useState, useEffect } from "react";
import { ErrorNotFoundParams, Params } from "../utilsBlog";

export default function useShopSlug(params: Promise<Params>) {
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    params
      .then((par: Params) => setSlug(par.slug))
      .catch((error: ErrorNotFoundParams) =>
        console.error("Failed to resolve params:", error)
      );
  }, [params]);

  return slug;
}
