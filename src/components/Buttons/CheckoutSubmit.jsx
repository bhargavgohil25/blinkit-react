import "./CheckoutSubmit.style.css";
import sideArrow from "../../assets/images/side-arrow.svg";

const CheckoutSubmit = () => {
  return (
    <div className="submit_wrapper">
      <div className="proceed_payment_btn">
        <span>6 items • ₹144</span>
        <div className="proceed">
          <span>Proceed</span>
          <div className="proceed_icon">
            {/* <img src={sideArrow} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSubmit;
