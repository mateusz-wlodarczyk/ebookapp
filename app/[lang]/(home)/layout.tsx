import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "../globals.css";

import Navigation from "@/components/home/home/Navigation";
import HomeFooter from "@/components/home/home/HomeFooter";
// const geistSans = localFont({
//   src: "../fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "../fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      style={{
        height: "700px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px",
      }}
    >
      <div>
        <Navigation />
        <div
          style={{
            height: "600px",
            width: "100%",
            // height: "650px",
            gap: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
          }}
        >
          {children}
        </div>
        <HomeFooter />
      </div>
    </div>
  );
}
