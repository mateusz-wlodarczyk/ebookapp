"use client";
import {
  addCategory,
  removeCategory,
  updateCategory,
} from "@/actions/handleCategories";
import useCategoryDownload from "@/utils/useOwnHooks/useCategoryDownload";

import { FormEvent, useState } from "react";
import InputCategory from "@/components/admin/category/InputCategory";
import ButtonCategory from "@/components/admin/category/ButtonCategory";

import LabelCategory from "@/components/admin/category/LabelCategory";
import { ErrorCouponSupabase } from "@/utils/supabase/server";

export default function Pages() {
  const [inputValues, setInputValues] = useState<Record<number, string>>({});
  const [errorMessage, setErrorMessage] = useState<ErrorCouponSupabase | null>(
    null
  );
  const [idCategory, setIdCategory] = useState(0);
  const { downloadCategories, error } = useCategoryDownload(idCategory);

  const handleError = (error: any) => {
    if (error !== null) {
      setErrorMessage(error);
    } else {
      setErrorMessage(null);
    }
  };

  async function handleAddCategory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const categoryName = event.currentTarget.category_name.value;
    const id = Math.floor(Math.random() * 100000);

    const error = await addCategory(categoryName);
    handleError(error);
    setIdCategory(id);
  }

  async function handleRemoveCategory(id: number) {
    const error = await removeCategory(id);
    handleError(error);
    setIdCategory(id);
  }

  const handleInputChange = (id: number, value: string) => {
    setInputValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  async function handleUpdateCategory(id: number) {
    const updatedCategory = {
      id,
      category_name: inputValues[id],
    };
    if (inputValues[id] === undefined) return;
    const error = await updateCategory(updatedCategory);
    handleError(error);
    setIdCategory(id);
  }
  return (
    <>
      <div>
        <div>
          <p>category list</p>
          <div>
            {downloadCategories !== null &&
              downloadCategories !== undefined &&
              downloadCategories.map((el) => (
                <div key={el.id} style={{ display: "flex", gap: "20px" }}>
                  <LabelCategory text="category text:" el={el} />
                  <InputCategory
                    handleInputChange={handleInputChange}
                    inputValues={inputValues}
                    el={el}
                    placeholder="new text"
                    type="text"
                  />
                  <ButtonCategory
                    handleClickButton={handleRemoveCategory}
                    text={"delete"}
                    id={el.id}
                  />
                  <ButtonCategory
                    handleClickButton={handleUpdateCategory}
                    text={"update"}
                    id={el.id}
                  />
                </div>
              ))}
          </div>
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <form onSubmit={handleAddCategory}>
            <label htmlFor="category_name">category text:</label>
            <input type="text" name="category_name" id="category_name" />
            <button type="submit">add</button>
          </form>
        </div>
        {(error || errorMessage) && (
          <p style={{ color: "red" }}>{errorMessage?.message}</p>
        )}
      </div>
    </>
  );
}
