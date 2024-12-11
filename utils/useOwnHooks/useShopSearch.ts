"use client";
import { useEffect, useState } from "react";
import { DownloadedRecipes, SingleRecipe } from "../utilsShop";

export default function useShopSearch(
  downloadedRecipes: DownloadedRecipes | null
) {
  const [clickedRecipeId, setClickedRecipeId] = useState<string>("");
  const [clickedRecipe, setClickedRecipe] = useState<SingleRecipe | null>(null);

  useEffect(() => {
    if (downloadedRecipes) {

      const helperArr: SingleRecipe | undefined =
        downloadedRecipes?.find((el) => el.id === clickedRecipeId);
      setClickedRecipe(helperArr || null);
    }
  }, [clickedRecipeId, downloadedRecipes]);

  function handleClickSearched(id: string) {
    setClickedRecipeId(id);
  }
  return { clickedRecipe, handleClickSearched };
}
