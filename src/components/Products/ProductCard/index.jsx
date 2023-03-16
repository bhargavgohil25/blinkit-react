import minusIcon from "../../../assets/images/minus-3108.svg";
import plusIcon from "../../../assets/images/plus-3107.svg";
import sourceAtIcon from "../../../assets/images/sourced-icon.webp";
import "./ProductCard.style.css";
import PropTypes from "prop-types";
import { useCallback } from "react";
import { selectProductById } from "../../../state/reducers/productsReducer";
import { useSelector } from "react-redux";
import { selectProductCount } from "../../../state/reducers/cartsReducer";
import { useActions } from "../../../hooks/useActions";

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
          {productCount === 0 ? (
            <div className="add_btn" onClick={handleAddClick}>
              ADD
            </div>
          ) : (
            <div className="product_added">
              <button className="icon minus" onClick={handleRemoveClick}>
                <img src={minusIcon} alt="minus-icon" />
              </button>
              <div className="product-quantity">{productCount}</div>
              <button className="icon plus" onClick={handleAddClick}>
                <img src={plusIcon} alt="plus-icon" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default ProductCard;
