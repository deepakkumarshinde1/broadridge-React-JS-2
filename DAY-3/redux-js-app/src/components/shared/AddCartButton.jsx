import { memo } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";

function AddCartButton({ product }) {
  let dispatch = useDispatch();
  return (
    <>
      <button
        className="add-cart"
        onClick={(event) => {
          event.stopPropagation();
          dispatch(addToCart(product));
        }}
      >
        Add Cart
      </button>
    </>
  );
}

export default memo(AddCartButton);

// props form parent to child is change
// internal state is update

// parent 5 state => child 1 3 4
// state 2
