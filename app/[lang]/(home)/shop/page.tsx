"use client";

import ShopCategory from "@/components/home/shop/ShopCategory";
import ShopProductView from "@/components/home/shop/ShopProductView";
import useCategoryDownload from "@/utils/useOwnHooks/useCategoryDownload";
import useShopPagination from "@/utils/useOwnHooks/useShopPagination";

import useShopProducts from "@/utils/useOwnHooks/UseShopProducts";
import useShopSearch from "@/utils/useOwnHooks/useShopSearch";

export default function Shop() {
  const { downloadedRecipes, setSearchValue, searchValue } = useShopProducts();
  const { handleClickSearched } = useShopSearch(downloadedRecipes);
  const { currentPage, paginatedData, handleNextClick, handlePrevClick } =
    useShopPagination(downloadedRecipes);
  const { downloadCategories } = useCategoryDownload();
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        {downloadCategories !== null ? (
          downloadCategories.map((el) => (
            <ShopCategory
              key={el.id}
              name={el.category_name}
              setSearchValue={setSearchValue}
            />
          ))
        ) : (
          <p>no categories</p>
        )}
      </div>
      <ShopProductView
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleClickSearched={handleClickSearched}
        paginatedData={paginatedData}
        currentPage={currentPage}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
        downloadedRecipes={downloadedRecipes}
      />
    </>
  );
}
