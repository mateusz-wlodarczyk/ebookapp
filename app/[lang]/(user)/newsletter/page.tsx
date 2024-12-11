"use client";

import { sendMail } from "@/actions/routeEmail";
import useNewslettersDownload from "@/utils/useOwnHooks/useNewslettersDownloa";
import React, { FormEvent, useState } from "react";

export default function Pages() {
  //   const [idNewsletter, setIdNewsletter] = useState(0);
  const [idButton, setIdButton] = useState(0);
  const { downloadedNewsletter, error } = useNewslettersDownload(0);
  //   console.log(downloadedNewsletter);

  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleCheckboxChange = (email: string, checked: boolean) => {
    setSelectedEmails((prevSelectedEmails) => {
      if (checked) {
        return [...prevSelectedEmails, email];
      } else {
        return prevSelectedEmails.filter((emailItem) => emailItem !== email);
      }
    });
  };

  async function handleSubmit(error: FormEvent<HTMLFormElement>) {
    error.preventDefault();

    if (title.length > 0 && message.length > 0) {
      switch (idButton) {
        case 1:
          console.log(1, selectedEmails);
          break;
        case 2:
          console.log(2, selectedEmails);
          downloadedNewsletter &&
            downloadedNewsletter.map((el) => {
              setSelectedEmails((prevSelectedEmails) => [
                ...prevSelectedEmails,
                el.email_user,
              ]);
            });

          break;
        default:
          console.log("not today");
      }

      const senderMailObj = {
        sendTo: selectedEmails,
        subject: title,
        text: message,
      };
      const info = await sendMail(senderMailObj);
    }
  }

  return (
    <>
      <div>
        <div>
          <p>newsletter list</p>
          <form onSubmit={handleSubmit}>
            {downloadedNewsletter && downloadedNewsletter.length > 0 ? (
              <>
                {downloadedNewsletter.map((el) => (
                  <div key={el.id}>
                    <input
                      type="checkbox"
                      checked={selectedEmails.includes(el.email_user)}
                      onChange={(e) =>
                        handleCheckboxChange(el.email_user, e.target.checked)
                      }
                    />{" "}
                    <span>{el.email_user}</span>
                  </div>
                ))}
                <div>
                  <label>
                    Title:
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </label>
                </div>
                <label>
                  Message:
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </label>
                <div style={{ display: "flex", gap: "20px" }}>
                  <button type="submit" onClick={() => setIdButton(1)}>
                    send
                  </button>

                  <button type="submit" onClick={() => setIdButton(2)}>
                    send all
                  </button>
                </div>
              </>
            ) : (
              <p>no newsletter </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
