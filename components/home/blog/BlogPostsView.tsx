import { BLOG_PER_PAGE } from "@/utils/utils";
import {
  BlogPostViewProps,
  SingleBlogPost,
  styleBlogNote,
} from "@/utils/utilsBlog";
import Link from "next/link";

export default function BlogPostsView({
  downloadedSimpleBlogPosts,
  paginatedData,
  currentPage,
  handlePrevClick,
  handleNextClick,
}: BlogPostViewProps) {
  return (
    <>
      <main
        style={{
          height: "650px",
          gap: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "10px",
            height: "100%",
            gridTemplateColumns: "repeat(5, 1fr)",
          }}
        >
          {paginatedData && paginatedData?.length > 0 ? (
            paginatedData.map((el) => (
              <Link href={`/blog/${el.id}`} key={el.id} style={styleBlogNote}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p>post#{el.id}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>loading posts...</p>
          )}
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          {currentPage > 1 && (
            <button onClick={() => handlePrevClick()}>prev</button>
          )}
          <p>{currentPage}</p>
          {downloadedSimpleBlogPosts &&
            Math.ceil(downloadedSimpleBlogPosts?.length / BLOG_PER_PAGE) >
              currentPage && (
              <button onClick={() => handleNextClick()}>next</button>
            )}
        </div>
      </main>
    </>
  );
}
