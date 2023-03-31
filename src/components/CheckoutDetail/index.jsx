import "./CheckoutDetail.style.css";
const CheckoutDetails = ({ cartTotalCost, totalDiscount, totalOriginalCost }) => {
  return (
    <div className="checkout_details">
      <div className="detail">
        <span>MRP</span>
        <span>₹{totalOriginalCost}</span>
      </div>
      <div className="detail">
        <span>Product Discount</span>
        <span style={{ color: "#0c831f" }}>- ₹{totalDiscount}</span>
      </div>
      <div className="detail">
        <span>Delivery Charge</span>
        <span style={{ textDecoration: "line-through" }}>₹15</span>
      </div>
      <div className="total">
        <span>Grand Total</span>
        <span>₹{cartTotalCost}</span>
      </div>
    </div>
  );
};

export default CheckoutDetails;
