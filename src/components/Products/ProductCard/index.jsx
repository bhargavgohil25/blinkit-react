import sourceAtIcon from "../../../assets/images/sourced-icon.webp";
import "./ProductCard.style.css";
import PropTypes from "prop-types";
import { useCallback } from "react";
import { selectProductById } from "../../../state/reducers/selectors/products";
import { useSelector } from "react-redux";
import { selectProductCount } from "../../../state/reducers/selectors/carts";
import { useActions } from "../../../hooks/useActions";
import AddButton from "../../Buttons/AddButton";

const ProductCard = ({ productId }) => {
  const product = useSelector((state) => selectProductById(state, productId));

  const {
    offPercentage,
    productName,
    imgSrc,
    quantity,
    discountedPrice,
    actualPrice,
  } = product;

  const productCount = useSelector((state) =>
    selectProductCount(state, productId)
  );

  const { addProductToCart, removeProductFromCart } = useActions();

  const handleAddClick = useCallback(() => {
    addProductToCart(productId);
  }, [addProductToCart, productId]);

  const handleRemoveClick = useCallback(() => {
    removeProductFromCart(productId);
  }, [removeProductFromCart, productId]);

  return (
    <div className="product__card">
      {offPercentage && <div className="offer__tag">{offPercentage}% OFF</div>}
      <div className="product__image">
        <img src={imgSrc} alt={productName} />
        <div className="source__tag">
          <img src={sourceAtIcon} alt="source-at-icon" />
          Sourced At 5 AM
        </div>
      </div>
      <div className="product__detail">
        <div className="product__detail--name">{productName}</div>
        <div className="product__detail--quantity">{quantity}</div>
      </div>
      <div className="product__price--container">
        <div className="product__cost">
          ₹{discountedPrice}
          <div className="actual__cost">₹{actualPrice}</div>
        </div>
        <div className="product__add">
          <AddButton
            productCount={productCount}
            handleAddClick={handleAddClick}
            handleRemoveClick={handleRemoveClick}
          />
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default ProductCard;
