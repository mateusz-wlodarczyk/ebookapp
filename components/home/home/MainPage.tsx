"use client";
import { routePath } from "@/utils/utils";
import Link from "next/link";
import { PiChefHatLight } from "react-icons/pi";

import useBlogSinglePostMainPage from "@/utils/useOwnHooks/useBlogSinglePostMainPage";
import { styleBlogNote } from "@/utils/utilsBlog";
import { iconMainStyle } from "@/utils/utilsHome";

export default function MainPage() {
  const downloadedSimpleBlogPosts = useBlogSinglePostMainPage();
  return (
    <>
      <main
        style={{
          height: "650px",
          gap: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", gap: "10px", height: "100%" }}>
          {downloadedSimpleBlogPosts &&
          downloadedSimpleBlogPosts?.length > 0 ? (
            downloadedSimpleBlogPosts.map((el) => (
              <Link href={`/blog/${el.id}`} key={el.id} style={styleBlogNote}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <p>{el.title}</p>
                  <p>post#{el.id}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>loading posts...</p>
          )}
        </div>

        <p>Start by searching for a recipe or an ingredient. Have fun!</p>
        <Link href={routePath.shop}>
          <div style={{ display: "flex", gap: "10px" }}>
            GO!! <PiChefHatLight style={iconMainStyle} />
            <p>click</p>
            <PiChefHatLight style={iconMainStyle} />
          </div>
        </Link>
      </main>
    </>
  );
}
