import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { resetMessage } from "../redux/cart.slice";

function PopMessage() {
  let dispatch = useDispatch();
  let message = useSelector((state) => state.cart.message);
  useEffect(() => {
    if (message.type !== "") {
      Swal.fire({
        icon: message.icon,
        title: message.text,
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        dispatch(resetMessage());
      });
    }
  }, [message]);
  return <></>;
}

export default PopMessage;
