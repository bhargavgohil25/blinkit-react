import "./Header.style.css";
import Logo from "./Logo";
import Delivery from "./Delivery";
import Cart from "./Cart";
import { memo } from "react";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";

const Header = ({ cartQuantity, totalCartCost }) => {
  return (
    <header className="header">
      <Logo />
      <Delivery />
      <SearchBar />
      <div className="header--right">
        <div className="login--button">Login</div>
        <Cart cartQuantity={cartQuantity} totalCartCost={totalCartCost} />
      </div>
    </header>
  );
};

// Header.propTypes = {
//   cartDetail: PropTypes.shape({
//     cartQuantity: PropTypes.number,
//     totalCartCost: PropTypes.number,
//   }),
// };

// Header.defaultProps = {
//   cartDetail: {
//     cartQuantity: 0,
//     totalCartCost: 0,
//   },
// };
export default memo(Header);
