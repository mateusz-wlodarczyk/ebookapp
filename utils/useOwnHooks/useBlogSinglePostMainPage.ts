"use client";
import { useState, useEffect } from "react";
import { URL_BLOG_POSTS, URL_JSON_POSTS } from "@/utils/utils";
import { SingleBlogPost } from "../utilsBlog";

export default function useBlogSinglePostMainPage() {
  const [downloadedSimpleBlogPosts, setDownloadedSimpleBlogPosts] = useState<
    SingleBlogPost[] | null
  >(null);
  useEffect(() => {
    let url = `${URL_BLOG_POSTS}${URL_JSON_POSTS}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDownloadedSimpleBlogPosts(data.slice(1, 4)));
  }, []);

  return downloadedSimpleBlogPosts;
}
