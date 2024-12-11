import { SingleBlogPost, SinglePostBlogProps } from "@/utils/utilsBlog";
import Link from "next/link";

export default function SinglePostBlog({
  downloadedSimpleBlogPosts,
  slug,
}: SinglePostBlogProps) {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {downloadedSimpleBlogPosts ? (
          <>
            {" "}
            <p>
              userId:
              {downloadedSimpleBlogPosts.userId}
            </p>
            <p> id: {downloadedSimpleBlogPosts.id} </p>
            <p> title: {downloadedSimpleBlogPosts.title} </p>
            <p>
              body:
              {downloadedSimpleBlogPosts.body}
            </p>
          </>
        ) : (
          <p>loading....</p>
        )}
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link href={`${Number(slug) - 1}`}>prev</Link>
        <Link href={`${Number(slug) + 1}`}>next</Link>
      </div>
    </>
  );
}
