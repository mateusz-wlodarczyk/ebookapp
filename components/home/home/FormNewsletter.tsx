"use client";
import {
  addMailNewsletters,
  removeMailNewsletters,
} from "@/actions/handleNewsletter";
import { sendMail } from "@/actions/routeEmail";
import React, { useState } from "react";
import ButtonNewsletter from "./ButtonNewsletter";
import InputNewsletter from "./InputNewsletter";
export default function FormNewsletter() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [idButton, setIdButton] = useState(0);
  const [errorMail, setErrorMail] = useState(false);
  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      switch (idButton) {
        case 1:
          setIsEmailValid(true);
          const senderMailObj = {
            sendTo: email,
            subject: "NEWSLETTER",
            text: "NEWSLETTERNEWSLETTERNEWSLETTERNEWSLETTERNEWSLETTER",
          };

          const { error: errorAddMail } = await addMailNewsletters(email);
          const isError_2 = errorAddMail !== null;

          if (isError_2) {
            const info = await sendMail(senderMailObj);
            const isError_1 = !(
              info?.accepted !== undefined && info?.accepted?.length > 0
            );
            setErrorMail(isError_1);
          }
          setErrorMail(isError_2);
          setEmail("");

          break;

        case 2:
          const { error: errorRemoveMail } = await removeMailNewsletters(email);
          const isError_3 = errorRemoveMail !== null;
          setErrorMail(isError_3);
          setEmail("");
          break;
        default:
          console.log(`Sorry, we are out of ${idButton}.`);
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputNewsletter email={email} handleInput={handleInput} />
        <ButtonNewsletter
          button_text="subscribe"
          setIdButton={setIdButton}
          button_color="green"
        />
        <ButtonNewsletter
          button_text="unsubscribe"
          setIdButton={setIdButton}
          button_color="red"
        />

        {!isEmailValid ? (
          <p style={{ color: "red" }}>Please enter a valid email address</p>
        ) : null}
      </form>
      {errorMail && <p>something went wrong, try again</p>}
    </>
  );
}
