import { ShopSingleFullProductProps } from "@/utils/utilsShop";
import ShopAddCart from "./ShopAddCart";

export default function ShopSingleFullProduct({
  downloadedRecipe,
}: ShopSingleFullProductProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {downloadedRecipe ? (
        <>
          <p> {downloadedRecipe.title}</p>
          <p> {downloadedRecipe.publisher}</p>
          <img
            style={{ height: "200px", width: "200px" }}
            src={downloadedRecipe.image_url}
          />
          {downloadedRecipe.ingredients.map((value, index) => (
            <div key={index}>
              quantity: {value.quantity}
              description: {value.description}
            </div>
          ))}
          <p> Cooking time:{downloadedRecipe.cooking_time}min</p>{" "}
          <ShopAddCart
            title={downloadedRecipe.title}
            id={downloadedRecipe.id}
          />
        </>
      ) : (
        <p>loading....</p>
      )}
    </div>
  );
}
