"use client";

import { removeOrder } from "@/actions/handleOrders";
import useOrdersDownload from "@/utils/useOwnHooks/useOrdersDownload";
import { useState } from "react";

export default function Pages() {
  const [idOrder, setIdOrder] = useState(0);
  const { downloadOrders, error } = useOrdersDownload(idOrder);
  console.log(downloadOrders);
  function handleRemoveOrder(id: number) {
    console.log(id);
    removeOrder(id);
    setIdOrder(id);
  }

  return (
    <>
      <div>
        <div>
          <p>orders list</p>
          <div>
            {downloadOrders !== null &&
              downloadOrders !== undefined &&
              downloadOrders.map((el) => (
                <div key={el.id} style={{ display: "flex", gap: "3px" }}>
                  <p>{el.email_user}</p> <p>{el.email_user}</p>
                  {el.email_user.map((el, index) => {
                    return (
                      <div key={`${index}${el.id}${el.name}${el.quantity}`}>
                        <p>{el.id}</p>;<p>{el.name}</p>;<p>{el.quantity}</p>
                      </div>
                    );
                  })}
                  <button onClick={() => handleRemoveOrder(el.id!)}>
                    delete
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
