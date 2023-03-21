import "./CheckoutDetail.style.css";
const CheckoutDetails = ({ cartTotal, totalDiscount, totalOriginal }) => {
  return (
    <div className="checkout_details">
      <div className="detail">
        <span>MRP</span>
        <span>₹{totalOriginal}</span>
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
        <span>₹{cartTotal}</span>
      </div>
    </div>
  );
};

export default CheckoutDetails;
