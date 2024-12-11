"use client";
import { BLOG_PER_PAGE} from "@/utils/utils";
import { useEffect, useState } from "react";
import { SingleBlogPost } from "../utilsBlog";

export default function useBlogPagination(
  downloadedSimpleBlogPosts: SingleBlogPost[] | null
) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginatedData, setPaginatedData] = useState<SingleBlogPost[] | null>(
    null
  );

  useEffect(() => {
    if (downloadedSimpleBlogPosts) {
      // let itemsPerPage = downloadedSimpleBlogPosts?.length / BLOG_PER_PAGE;
      const startIndex = (currentPage - 1) * BLOG_PER_PAGE;
      const endIndex = startIndex + BLOG_PER_PAGE;

      setPaginatedData(downloadedSimpleBlogPosts?.slice(startIndex, endIndex));
    }
  }, [currentPage, downloadedSimpleBlogPosts]);

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
