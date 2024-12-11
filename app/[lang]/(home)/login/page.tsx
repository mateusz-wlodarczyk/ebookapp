"use client";

import UserLogin from "@/components/home/user/UserLogin";
import UserRegistration from "@/components/home/user/UserRegistration";
import { useState } from "react";

export default function Page() {
  const [wantLogin, setWantLogin] = useState(true);
  function toggleLogin() {
    setWantLogin((show) => !show);
  }
  return (
    <>
      <div style={{ display: "flex", gap: "40px" }}>
        {!wantLogin && (
          <>
            <p> already have account?</p>{" "}
            <button onClick={toggleLogin}>login</button>
          </>
        )}
        {wantLogin && (
          <>
            <p> no account?</p>
            <button onClick={toggleLogin}>register</button>
          </>
        )}
      </div>
      {wantLogin && <UserLogin />}
      {!wantLogin && <UserRegistration />}
    </>
  );
}
