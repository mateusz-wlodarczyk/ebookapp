"use client";

import { RootState } from "@/utils/redux/store";
import { PRICE_PER_RECIPE } from "@/utils/utils";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Summary() {
  const cart = useSelector((state: RootState) => state.cartSlice);
  const totalQuantity = useSelector((state: RootState) =>
    state.cartSlice.reduce((total, item) => total + (item.quantity || 0), 0)
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    surname: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(formData);
  }
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <p>summary:</p>
          <div>
            {cart.map((el) => (
              <p key={el.id}>{el.name}</p>
            ))}
          </div>
          <p>price: ${totalQuantity * PRICE_PER_RECIPE}</p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="surname">Surname:</label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" style={{ marginTop: "20px" }}>
              payment
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
