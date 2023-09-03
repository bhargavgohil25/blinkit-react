import "./ItemDetail.style.css";

const ItemDetail = ({ product, productCount }) => {
  return (
    <div className="item__detail">
      <div className="item__name">{product.productName}</div>
      <div className="item__quantity">
        {productCount} x {product.quantity}
      </div>
      <div className="item__price">
        ₹{product.discountedPrice}
        <div className="item__actual_price">₹{product.actualPrice}</div>
      </div>
    </div>
  );
};

export default ItemDetail;
