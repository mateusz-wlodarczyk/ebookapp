import { ReviewProduct } from "./utilsShop";

export const REVIEW_STARS_NUMBER = 5;

export type ButtonReviewProps = {
    handleClickButton: (id: number) => void;
    text: string;
    id: number;
  };
  
export type SingleReviewProps = { el: ReviewProduct };

