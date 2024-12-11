import Link from "next/link";
import { routePath } from "../utils/utils";

export default function Page() {
  return (
    <div>
      <Link href={routePath.home}>
        <div
          style={{
            textAlign: "center",
            fontSize: "40px",
            height: "65px",
            width: "250px",
            borderColor: "gray",
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "10px",
          }}
        >
          ENTER
        </div>
      </Link>
    </div>
  );
}
