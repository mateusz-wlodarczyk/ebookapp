import { ButtonNewsletterProps } from "@/utils/utilsHome";
import React from "react";

export default function ButtonNewsletter({
  button_text,
  setIdButton,
  button_color,
}: ButtonNewsletterProps) {
  return (
    <>
      <button
        onClick={() => setIdButton(1)}
        type="submit"
        style={{
          margin: "10px",
          padding: "10px",
          backgroundColor: button_color,
          border: "none",
          color: "white",
          fontSize: "16px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {button_text}
      </button>{" "}
    </>
  );
}
