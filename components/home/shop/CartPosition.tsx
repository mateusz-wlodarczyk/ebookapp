import { CartPositionProps } from "@/utils/utilsShop";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";

export default function CartPosition({
  cart,
  handleIncrease,
  handleDecrease,
  handleDeleteItem,
}: CartPositionProps) {
  return (
    <>
      {cart.length > 0 &&
        cart.map((el, index) => (
          <tr key={`${el.id}${index}`}>
            <td>{el.name}</td>
            <td>{el.quantity}</td>
            <td>
              <button onClick={() => handleIncrease(el.id)}>
                <CiSquarePlus />
              </button>
            </td>
            <td>
              <button onClick={() => handleDecrease(el.id)}>
                <CiSquareMinus />
              </button>
            </td>
            <td>
              <button onClick={() => handleDeleteItem(el.id)}>
                <MdOutlineDeleteOutline />
              </button>
            </td>
          </tr>
        ))}
    </>
  );
}
