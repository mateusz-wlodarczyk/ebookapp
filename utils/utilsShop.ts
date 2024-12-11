// type

import { cartState } from "./redux/store";

export type CartModalProps = {
  isCartVisible: boolean;
  toggleCartModal: () => void;
};

export type CartPositionProps = {
  cart: cartState;
  handleIncrease: (e: string) => void;
  handleDecrease: (e: string) => void;
  handleDeleteItem: (e: string) => void;
};

export type CouponProps = {
  coupon: string;
  setCoupon: () => void;
  handleCoupon: (e: string) => void;
};

export type DownloadedFullSingleRecipes = {
  status: string;
  results: number;
  data: { recipe: FullSingleRecipe };
};

export type DownloadedRecipes = SingleRecipe[];

export type ErrorNotFoundParams = {
  message: string;
  status: string;
};

export type FullSingleRecipe = {
  cooking_time: number;
  id: string;
  image_url: string;
  ingredients: IngredientRecipe[];
  publisher: string;
  servings: number;
  source_url: string;
  title: string;
};

export type IngredientRecipe = {
  quantity: number;
  description: string;
  unit: string;
};


export type InputCouponProps = {
  coupon: string;
  setCoupon: (e: string) => void;
  couponPlaceholder: string;
};

export type Params = {
  slug: string;
};

export type ReviewAllProducts = ReviewProduct[];

export type ReviewProduct = {
  id?: number;
  review_text: string;
  review_product_id: string;
  review_stars: number;
};

export type ReviewProps = {
  downloadedProductReviews: ReviewProduct[] | null | [];
  slug: string | null;
};

export type ShopAddCartProps = {
  id: string;
  title: string;
};

export type ShopCategoryProps = {
  name: string;
  setSearchValue: (e: string) => void;
};

export type ShopProductViewProps = {
  searchValue: string;
  setSearchValue: (e: string) => void;
  paginatedData: DownloadedRecipes | null;
  downloadedRecipes: DownloadedRecipes | null;
  handleClickSearched: (e: string) => void;
  currentPage: number;
  handlePrevClick: () => void;
  handleNextClick: () => void;
};

export type ShopSingleFullProductProps = {
  downloadedRecipe: FullSingleRecipe | null;
};

export type SingleRecipe = {
  publisher: string;
  image_url: string;
  title: string;
  id: string;
};

// icons

export const iconMainStyle = { height: "35px", width: "35px" };
