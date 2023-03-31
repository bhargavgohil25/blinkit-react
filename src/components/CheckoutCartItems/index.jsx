import "./CheckoutCartItems.style.css";
import { useSelector } from "react-redux";
import { selectProductsInCart } from "../../state/reducers/selectors/carts";
import CartItem from "./CartItem";

const CheckoutCartItems = () => {
  const productIds = useSelector(selectProductsInCart);

  return (
    <div className="cart__items">
      {productIds.length > 0 &&
        productIds.map((productId) => {
          return <CartItem key={productId} productId={productId} />;
        })}
    </div>
  );
};

export default CheckoutCartItems;
