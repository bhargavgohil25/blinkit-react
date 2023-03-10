import { useNavigate } from "react-router-dom";
import cartIcon from "../../../assets/images/cart.svg";
import "./Cart.style.css";

const Cart = ({ cartDetail }) => {
  const { cartQuantity, totalCartCost } = cartDetail;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout");
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
              <div>{cartQuantity} items</div>
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
