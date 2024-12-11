"use client";
import { routePath } from "@/utils/utils";
import Link from "next/link";
import { CiShop, CiShoppingCart } from "react-icons/ci";

import { GrLanguage } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { IoBookOutline, IoHomeOutline } from "react-icons/io5";

import { useSelector } from "react-redux";
import { RootState } from "@/utils/redux/store";
import { useState } from "react";
import CartModal from "../shop/CartModal";
import { iconNavStyle } from "@/utils/utilsHome";
import LocaleSwitcher from "./Lang";

export default function Navigation() {
  const totalQuantity = useSelector((state: RootState) =>
    state.cartSlice.reduce((total, item) => total + (item.quantity || 0), 0)
  );
  const [isCartVisible, setIsCartVisible] = useState(false);
  function toggleCartModal() {
    setIsCartVisible((show) => !show);
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          // height: "100px",
        }}
      >
        <div style={{ display: "flex", gap: "25px", position: "relative" }}>
          <Link href={routePath.home}>
            <IoHomeOutline style={iconNavStyle} />
          </Link>
          <Link href={routePath.blog}>
            <IoBookOutline style={iconNavStyle} />
          </Link>
          <Link href={routePath.shop}>
            <CiShop style={iconNavStyle} />{" "}
          </Link>
        </div>
        <div style={{ display: "flex", gap: "25px" }}>
          <GrLanguage style={iconNavStyle} />
          <LocaleSwitcher />
          <Link href={routePath.login}>
            <IoIosContact style={iconNavStyle} />
          </Link>
          <button
            onClick={toggleCartModal}
            style={{
              position: "relative",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <CiShoppingCart style={iconNavStyle} />
            {totalQuantity > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -10,
                  right: -10,
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: "bold",
                  border: "2px solid white",
                }}
              >
                {totalQuantity}
              </span>
            )}
          </button>
        </div>
      </div>
      {isCartVisible && (
        <CartModal
          isCartVisible={isCartVisible}
          toggleCartModal={toggleCartModal}
        />
      )}
    </>
  );
}
