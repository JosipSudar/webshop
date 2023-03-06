import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cartslice";
import dynamic from "next/dynamic";

const MyComponent= dynamic(() => import("@/components/cart/cart"), {
ssr: false,
});
const Checkout = () => {

  return (
    <div className="">
<MyComponent/>
    </div>
  );
};

export default Checkout;
