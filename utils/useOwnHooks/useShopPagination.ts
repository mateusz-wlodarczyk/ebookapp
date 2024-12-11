"use client";
import {
  RECIPES_PER_PAGE,
} from "@/utils/utils";
import { useEffect, useState } from "react";
import { DownloadedRecipes } from "../utilsShop";

export default function useShopPagination(
  downloadedRecipe: DownloadedRecipes | null
) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginatedData, setPaginatedData] = useState<DownloadedRecipes | null>(
    null
  );

  useEffect(() => {
    if (downloadedRecipe) {
      // let itemsPerPage = downloadedRecipe?.length / RECIPES_PER_PAGE;
      // console.log("itemsPerPage", itemsPerPage);
      const startIndex = (currentPage - 1) * RECIPES_PER_PAGE;
      const endIndex = startIndex + RECIPES_PER_PAGE;
      setPaginatedData(downloadedRecipe?.slice(startIndex, endIndex));
    }
  }, [currentPage, downloadedRecipe]);

  function handleNextClick() {
    setCurrentPage((el) => el + 1);
  }
  function handlePrevClick() {
    if (currentPage > 1) {
      setCurrentPage((el) => el - 1);
    }
  }
  return {
    currentPage,
    setCurrentPage,
    paginatedData,
    handleNextClick,
    handlePrevClick,
  };
}
