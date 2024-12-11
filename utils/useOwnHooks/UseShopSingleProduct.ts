"use client";
import { useState, useEffect } from "react";
import { URL_RECIPE, URL_RECIPES_VALUE } from "../utils";
import { FullSingleRecipe } from "../utilsShop";

export default function useShopSingleProduct(slug: string | null) {
  const [downloadedRecipes, setDownloadedRecipes] =
    useState<FullSingleRecipe | null>(null);
  useEffect(() => {
    let url = `${URL_RECIPE}${URL_RECIPES_VALUE}/${slug}`;

    if (slug) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setDownloadedRecipes(data.data.recipe));
    }
  }, [slug]);

  return downloadedRecipes;
}
