import { InputNewsletterProps } from "@/utils/utilsHome";
import React from "react";

export default function InputNewsletter({
  email,
  handleInput,
}: InputNewsletterProps) {
  return (
    <>
      <input
        type="email"
        placeholder="Enter your email address here"
        value={email}
        onChange={(e) => handleInput(e)}
        style={{
          padding: "10px",
          fontSize: "16px",
          border: "2px solid #ddd",
          borderRadius: "5px",
          color: "white",
        }}
      />
    </>
  );
}
