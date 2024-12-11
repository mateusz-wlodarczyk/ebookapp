import { Params } from "../../../../../utils/utilsBlog";
import useBlogSlug from "@/utils/useOwnHooks/useBlogSlug";
import useBlogSinglePost from "@/utils/useOwnHooks/useBlogSinglePost";
import SinglePostBlog from "@/components/home/blog/SinglePostBlog";

export default function Page({ params }: { params: Promise<Params> }) {
  const slug = useBlogSlug(params);
  const downloadedSimpleBlogPosts = useBlogSinglePost(slug);

  return (
    <>
      <SinglePostBlog
        slug={slug}
        downloadedSimpleBlogPosts={downloadedSimpleBlogPosts}
      />
    </>
  );
}
