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
  selectCartTotalProductCount,
  selectTotalDiscount,
  selectTotalOriginalCost,
} from "../../state/reducers/selectors/carts";
import { useEffect } from "react";
import CheckoutSubmit from "../../components/Buttons/CheckoutSubmit";
import { useHistory } from "react-router-dom";

const Checkout = () => {
  const history = useHistory();

  const cartTotalCost = useSelector(selectCartTotalCost);
  const cartTotalQuantiy = useSelector(selectCartTotalProductCount);
  const totalDiscount = useSelector(selectTotalDiscount);
  const totalOriginalCost = useSelector(selectTotalOriginalCost);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (cartTotalQuantiy === 0) {
    history.push("/");
  }

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
            cartTotalCost={cartTotalCost}
            totalDiscount={totalDiscount}
            totalOriginalCost={totalOriginalCost}
          />
          <CheckoutSubmit />
        </div>
      </main>
      <Feature />
      <Footer />
    </>
  );
};

export default Checkout;
