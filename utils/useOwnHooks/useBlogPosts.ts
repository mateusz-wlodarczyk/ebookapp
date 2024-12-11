"use client";
import { useEffect, useState } from "react";
import { SingleBlogPost } from "../utilsHome";
import { URL_BLOG_POSTS, URL_JSON_POSTS } from "../utils";

export default function useBlogPosts() {
  const [downloadedSimpleBlogPosts, setDownloadedSimpleBlogPosts] = useState<
    SingleBlogPost[] | null
  >(null);

  useEffect(() => {
    let url = `${URL_BLOG_POSTS}${URL_JSON_POSTS}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDownloadedSimpleBlogPosts(data));
  }, []);
  return downloadedSimpleBlogPosts;
}
