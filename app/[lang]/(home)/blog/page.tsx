"use client";

import useBlogPosts from "@/utils/useOwnHooks/useBlogPosts";
import useBlogPagination from "@/utils/useOwnHooks/useBlogPagination";
import BlogPostsView from "@/components/home/blog/BlogPostsView";

export default function Page() {
  const downloadedSimpleBlogPosts = useBlogPosts();

  const { currentPage, paginatedData, handleNextClick, handlePrevClick } =
    useBlogPagination(downloadedSimpleBlogPosts);

  return (
    <>
      <BlogPostsView
        downloadedSimpleBlogPosts={downloadedSimpleBlogPosts}
        paginatedData={paginatedData}
        currentPage={currentPage}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
    </>
  );
}
