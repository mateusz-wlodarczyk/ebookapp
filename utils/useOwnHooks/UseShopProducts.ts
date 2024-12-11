"use client";
import { useState, useEffect } from "react";
import { URL_RECIPE, URL_RECIPES_VALUE, URL_SEARCH_VALUE } from "../utils";
import { DownloadedRecipes } from "../utilsShop";

export default function useShopProducts() {
  const [downloadedRecipes, setDownloadedRecipes] =
    useState<DownloadedRecipes | null>(null);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    let url = `${URL_RECIPE}${URL_RECIPES_VALUE}${URL_SEARCH_VALUE}${searchValue}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDownloadedRecipes(data.data.recipes));
  }, [searchValue]);

  return { downloadedRecipes, setSearchValue, searchValue };
}
