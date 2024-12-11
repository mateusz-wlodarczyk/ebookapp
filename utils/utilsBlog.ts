export type BlogPostViewProps = {
  downloadedSimpleBlogPosts: SingleBlogPost[] | null;
  paginatedData: SingleBlogPost[] | null;
  currentPage: number;
  handlePrevClick: () => void;
  handleNextClick: () => void;
};

export type ErrorNotFoundParams = {
  message: "string";
  status: "string";
};

export type Params = { slug: string };

export type SingleBlogPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type SinglePostBlogProps = {
  downloadedSimpleBlogPosts: SingleBlogPost | null;
  slug: string | null;
};

// style
export let styleBlogNote = {
  borderColor: "grey",
  width: "130px",
  height: "100px",
  border: "solid",
  borderRadius: "10px",
  padding: "10px",
};


