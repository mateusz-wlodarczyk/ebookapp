"use client";
import { useState, useEffect } from "react";
import { URL_BLOG_POSTS, URL_JSON_POSTS } from "@/utils/utils";
import { SingleBlogPost } from "../utilsBlog";

export default function useBlogSinglePost(slug: string | null) {
  const [blogPost, setBlogPost] = useState<SingleBlogPost | null>(null);

  useEffect(() => {
    if (!slug) return;
    const url = `${URL_BLOG_POSTS}${URL_JSON_POSTS}/${slug}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setBlogPost(data))
      .catch((error) => console.error("Failed to fetch blog post:", error));
  }, [slug]);

  return blogPost;
}
