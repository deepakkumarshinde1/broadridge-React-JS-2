import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getCartListProcess,
  getCartListSuccess,
  saveCartToServerProcess,
} from "../redux/cart.slice";

function MiniCart() {
  let dispatch = useDispatch();
  let cartList = useSelector((state) => state.cart.cartList);
  let loginDetails = useSelector((state) => state.auth.loginDetails);
  let [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (loginDetails) {
      dispatch(getCartListProcess());
    } else {
      dispatch(getCartListSuccess([]));
    }
  }, [loginDetails]);
  return (
    <section className="mini-cart-section">
      <span onClick={() => setToggle(!toggle)}>Cart {cartList.length}</span>
      {toggle && (
        <section className="mini-cart">
          <ul className="mini-cart-list">
            {cartList.map((cartProduct) => {
              return (
                <li key={cartProduct.id} className="mini-cart-list-item">
                  <section>
                    <img src={cartProduct.image} alt={cartProduct.title} />
                    <span>{cartProduct.productName}</span>
                    <span>{cartProduct.quantity}</span>
                  </section>
                  <button>Remove</button>
                </li>
              );
            })}
          </ul>
          <button onClick={() => dispatch(saveCartToServerProcess(cartList))}>
            Process
          </button>
        </section>
      )}
    </section>
  );
}

export default MiniCart;
