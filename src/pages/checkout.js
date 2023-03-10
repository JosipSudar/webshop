import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cartslice";
import dynamic from "next/dynamic";
import { AuthContainer } from "@/components/layout/auth";

const MyComponent = dynamic(() => import("@/components/cart/cart"), {
  ssr: false,
});
const Checkout = () => {
  AuthContainer();

  return (
    <div className="">
      <MyComponent />
    </div>
  );
};

export default Checkout;
