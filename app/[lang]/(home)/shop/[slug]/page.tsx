"use client";
import { Params } from "../../../../../utils/utilsShop";
import useShopSlug from "@/utils/useOwnHooks/useShopSlug";
import useShopSingleProduct from "@/utils/useOwnHooks/UseShopSingleProduct";
import ShopSingleFullProduct from "@/components/home/shop/ShopSIngleFullProduct";
import Review from "@/components/home/shop/Review";
import useProductReviews from "@/utils/useOwnHooks/useProductReviews";

export default function Page({ params }: { params: Promise<Params> }) {
  const slug = useShopSlug(params);
  const downloadedRecipe = useShopSingleProduct(slug);
  const { downloadedProductReviews } = useProductReviews(slug);

  return (
    <>
      <ShopSingleFullProduct downloadedRecipe={downloadedRecipe} />
      <Review downloadedProductReviews={downloadedProductReviews} slug={slug} />
    </>
  );
}
