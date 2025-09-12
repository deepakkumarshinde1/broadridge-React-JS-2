import { useProductContext } from "../context/product.context";

export function withProductContext(Component) {
  return (props) => {
    let context = useProductContext();
    return <Component {...props} _productContext={context} />;
  };
}
