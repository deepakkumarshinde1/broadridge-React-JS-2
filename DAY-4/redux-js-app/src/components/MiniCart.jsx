import { useSelector } from "react-redux";
import { useState } from "react";

function MiniCart() {
  let cartList = useSelector((state) => state.cart.cartList);
  let [toggle, setToggle] = useState(false);
  return (
    <section className="mini-cart-section">
      <span onClick={() => setToggle(!toggle)}>Cart {cartList.length}</span>
      {toggle && (
        <section>
          <ul className="mini-cart-list">
            {cartList.map((cartProduct) => {
              return (
                <li key={cartProduct.id} className="mini-cart-list-item">
                  <section>
                    <img src={cartProduct.image} alt={cartProduct.title} />
                    <span>{cartProduct.title}</span>
                    <span>{cartProduct.count}</span>
                  </section>
                  <button>Remove</button>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </section>
  );
}

export default MiniCart;
