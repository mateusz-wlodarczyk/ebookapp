import { ChangeEvent, ChangeEventHandler } from "react";

// types
export type ButtonNewsletterProps = {
  button_text: string;
  setIdButton: (e: number) => void;
  button_color: string;
};

export type InputNewsletterProps = { email: string; handleInput: (event: ChangeEvent<HTMLInputElement>) => void };

export type SingleBlogPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// style

export const iconNavStyle = { height: "35px", width: "35px" };
export const iconMainStyle = { height: "35px", width: "35px" };
export const iconFooterStyle = { height: "35px", width: "35px" };
export const styleBlogNote = {
  borderColor: "grey",
  width: "200px",
  height: "350px",
  border: "solid",
  borderRadius: "10px",
  padding: "10px",
};
