"use client";
import { loginInput } from "@/utils/utils";
import { useState } from "react";

export default function UserLogin() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    surname: "",
    password: "",
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
      <div style={{ display: "flex", minWidth: "250px" }}>
        <div>
          <form onSubmit={handleSubmit}>
            {loginInput.map((el) => (
              <div
                key={el.name}
                style={{
                  display: "flex",
                  //   alignItems: "center",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                <label htmlFor={el.name} style={{ width: "150px" }}>
                  {el.description}
                </label>
                <input
                  style={{ minWidth: "200px" }}
                  type={el.type}
                  id={el.name}
                  name={el.name}
                  value={formData[el.name]}
                  onChange={handleInputChange}
                />
              </div>
            ))}
            <button type="submit">login</button>
          </form>
        </div>
      </div>
    </>
  );
}
