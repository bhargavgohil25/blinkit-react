import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Feature from "../../components/Feature";
import Footer from "../../components/Footer";
import CheckoutHeader from "../../components/CheckoutHeader";
import "./Checkout.style.css";
import CheckoutCartItems from "../../components/CheckoutCartItems";
import CheckoutDetails from "../../components/CheckoutDetail";
import { useSelector } from "react-redux";
import {
  selectCartTotalCost,
  selectTotalDiscount,
  selectTotalOriginalCost,
} from "../../state/reducers/selectors/carts";

const Checkout = () => {
  const cartTotal = useSelector(selectCartTotalCost);

  const totalDiscount = useSelector(selectTotalDiscount);
  const totalOriginal = useSelector(selectTotalOriginalCost);
  return (
    <>
      <div className="top">
        <Header />
        <SubHeader />
      </div>
      <main className="main">
        <div className="checkout-cart__box">
          <CheckoutHeader />
          <CheckoutCartItems />
          <CheckoutDetails
            cartTotal={cartTotal}
            totalDiscount={totalDiscount}
            totalOriginal={totalOriginal}
          />
        </div>
      </main>
      <Feature />
      <Footer />
    </>
  );
};

export default Checkout;
