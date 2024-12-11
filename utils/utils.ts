export const URL_RECIPE = "https://forkify-api.herokuapp.com/api/v2/";
export const API_KEY_RECIPE = "da1efcbf-e9e9-4304-9769-8961a67c3c7b";
export const URL_SEARCH_VALUE = "?search=";
export const URL_KEY_VALUE = "&key=";
export const URL_RECIPES_VALUE = "recipes";

export const URL_BLOG_POSTS = "https://jsonplaceholder.typicode.com/";
export const URL_JSON_POSTS = "posts";
export const BLOG_PER_PAGE = 10;
export const RECIPES_PER_PAGE = 15;
export const PRICE_PER_RECIPE = 15;
export const routePath = {
  home: "/home",
  blog: "/blog",
  products: "/products",
  shop: "/shop",
  cart: "/cart",
  login: "/login",
  contact: "/contact",
  summary: "/summary",
  admin:'/admin',

};
export const routePathAdmin = { 
  admin:'/admin', 
  reviews:'/reviews',
  coupons:'/coupons',  
  history:'/history',
  category:'/category',
  newsletter:'/newsletter'
}

export type UserInput = {
  name: keyof FormDataRegister;
  type: string;
  description: string;
};

export const loginInput: UserInput[] = [
  { name: "email", description: "email", type: "email" },
  { name: "password", description: "password", type: "password" },
];
export const registerInput: UserInput[] = [
  { name: "name", description: "name", type: "text" },
  { name: "surname", description: "surname", type: "text" },
  { name: "password", description: "password", type: "password" },
  { name: "email", description: "email", type: "email" },
];

export type FormDataRegister = {
  name: string;
  email: string;
  surname: string;
  password: string;
};
export interface AppProps {
  children: React.ReactNode;
}
