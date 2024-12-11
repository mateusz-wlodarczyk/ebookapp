import { TiPhoneOutline } from "react-icons/ti";
import FormNewsletter from "./FormNewsletter";
import Link from "next/link";
import { routePath } from "@/utils/utils";
import { iconFooterStyle } from "@/utils/utilsHome";

export default function Newsletter() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          height: "75px",
        }}
      >
        <h2>Subscribe to our newsletter!</h2>
        <FormNewsletter />
        <Link href={routePath.contact}>
          <TiPhoneOutline style={iconFooterStyle} />
        </Link>
      </div>
    </>
  );
}
