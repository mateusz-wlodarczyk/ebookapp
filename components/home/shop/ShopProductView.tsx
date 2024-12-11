import { ShopProductViewProps, SingleRecipe } from "@/utils/utilsShop";
import Link from "next/link";
import { RECIPES_PER_PAGE } from "@/utils/utils";

export default function ShopProductView({
  searchValue,
  setSearchValue,
  paginatedData,
  downloadedRecipes,
  currentPage,
  handlePrevClick,
  handleNextClick,
}: ShopProductViewProps) {
  return (
    <div
      style={{
        height: "650px",
        gap: "50px",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        fontSize: "24px",
        width: "100%",
      }}
    >
      <p>Start by searching for a recipe or an ingredient. Have fun!</p>
      <input
        // style={{ color: "grey", width: "100%" }}
        value={searchValue}
        placeholder="search"
        onChange={(event) => setSearchValue(event?.target.value)}
      />
      <div
        style={{
          overflow: "auto",
          height: "455px",
          width: "100%",
          flexWrap: "wrap",
          display: "flex",
          gap: "5px",
        }}
      >
        {paginatedData &&
        paginatedData !== undefined &&
        paginatedData?.length > 0 ? (
          paginatedData.map((el: SingleRecipe) => (
            <Link
              style={{ height: "", width: "100px" }}
              href={`shop/${el.id}`}
              key={el.id}
            >
              <img
                src={el.image_url}
                alt={el.title}
                style={{ width: "75px", height: "75px" }}
              />
              <p style={{ fontSize: "16px" }}>click</p>
              {/* <p style={{ fontSize: "16px" }}>{el.title}</p> */}
            </Link>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        {currentPage > 1 && (
          <button onClick={() => handlePrevClick()}>prev</button>
        )}
        <p>{currentPage}</p>
        {downloadedRecipes &&
          Math.ceil(downloadedRecipes?.length / RECIPES_PER_PAGE) >
            currentPage && (
            <button onClick={() => handleNextClick()}>next</button>
          )}
      </div>
    </div>
  );
}
