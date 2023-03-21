import "./CheckoutHeader.style.css";

const CheckoutHeader = () => {
  return (
    <>
      <div className="checkout__heading">Place Order</div>
      <div className="checkout__delivery">
        <div className="checkout__duration">Delivery in 10 minutes</div>
        <div className="checkout__items">6 items</div>
      </div>
    </>
  );
};

export default CheckoutHeader;
