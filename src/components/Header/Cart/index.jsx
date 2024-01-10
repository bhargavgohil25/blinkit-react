import { useHistory } from "react-router-dom";
import cartIcon from "../../../assets/images/cart.svg";
import "./Cart.style.css";
import { useSelector } from "react-redux";
import {
  selectCartTotalCost,
  selectCartTotalProductCount,
} from "../../../state/reducers/selectors/carts";

const Cart = () => {
  const totalCartCost = useSelector(selectCartTotalCost);
  const cartQuantity = useSelector(selectCartTotalProductCount);
  const history = useHistory();

  const handleClick = () => {
    if (cartQuantity > 0) {
      history.push("/blinkit-react/checkout");
    }
  };

  return (
    <div className="cart">
      <div className="cart__button" onClick={handleClick}>
        <div className="cart__icon">
          <img src={cartIcon} alt="cart" />
        </div>
        <div className="cart__detail">
          {cartQuantity > 0 ? (
            <div>
              <div>
                {cartQuantity} item{cartQuantity === 1 ? "" : "s"}
              </div>
              <div>₹{totalCartCost}</div>
            </div>
          ) : (
            <span>My Cart</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
