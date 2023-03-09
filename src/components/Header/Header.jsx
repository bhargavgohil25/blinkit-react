import "./Header.style.css";
import Logo from "./Logo/Logo";
import Delivery from "./Delivery/Delivery";
import Cart from "./Cart/Cart";
import { memo } from "react";
import SearchBar from "./SearchBar/SearchBar";

const Header = ({ cartDetail }) => {
  return (
    <>
      <header className="header">
        <Logo />
        <Delivery />
        <SearchBar />
        <div className="header--right">
          <div className="login--button">Login</div>
          <Cart cartDetail={cartDetail} />
        </div>
      </header>
    </>
  );
};

export default memo(Header);
