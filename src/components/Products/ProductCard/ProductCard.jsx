import minusIcon from "../../../assets/images/minus-3108.svg";
import plusIcon from "../../../assets/images/plus-3107.svg";
import sourceAtIcon from "../../../assets/images/sourced-icon.webp";
import "./ProductCard.style.css";

const ProductCard = ({
  product,
  addClickHandler,
  removeClickHandler,
  productCount,
}) => {
  const {
    productId,
    offPercentage,
    productName,
    imgSrc,
    quantity,
    discountedPrice,
    actualPrice,
  } = product;

  return (
    <>
      <div className="product__card">
        {offPercentage && (
          <div className="offer__tag">{offPercentage}% OFF</div>
        )}
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
              <div
                className="add_btn"
                onClick={() => addClickHandler(productId)}
              >
                ADD
              </div>
            ) : (
              <div className="product_added">
                <button
                  className="icon minus"
                  onClick={() => removeClickHandler(productId)}
                >
                  <img src={minusIcon} alt="minus-icon" />
                </button>
                <div className="product-quantity">{productCount}</div>
                <button
                  className="icon plus"
                  onClick={() => addClickHandler(productId)}
                >
                  <img src={plusIcon} alt="plus-icon" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
