import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/cartslice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  console.log(cart);

  return (
    <div className="table">
    {cart.length === 0 ? (
      <h1 className=" text-xl text-center">Your Cart is Empty!<br/>Please go to products page to shop for products</h1>
    ) : (
      <>
        <div className="table-header">
          <div>Image</div>
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Actions</div>
          <div>Total Price</div>
        </div>
        {cart.map((item) => (
          <div className="table-body">
            <div className="table-image">
              <img src={item.thumbnail} height="90" width="65" />
            </div>
            <p>{item.title}</p>
            <p>$ {item.price}</p>
            <p>{item.quantity}</p>
            <div className="table-buttons">
              <button onClick={() => dispatch(incrementQuantity(item.id))}>
                <span>+</span>
              </button>
              <button onClick={() => dispatch(decrementQuantity(item.id))}>
                <span>-</span>
              </button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                <span>*</span>
              </button>
            </div>
            <p>$ {item.quantity * item.price}</p>
          </div>
        ))}
        <h2>Grand Total: $ {getTotalPrice()}</h2>
      </>
    )}
  </div>
  );
};

export default Cart;
