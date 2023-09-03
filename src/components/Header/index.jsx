import "./Header.style.css";
import Logo from "./Logo";
import Delivery from "./Delivery";
import Cart from "./Cart";
import { memo } from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Delivery />
      <SearchBar />
      <div className="header--right">
        <div className="login--button">Login</div>
        <Cart />
      </div>
    </header>
  );
};

export default memo(Header);
