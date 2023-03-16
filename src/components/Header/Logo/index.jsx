import { memo } from "react";
import blinkitLogo from "../../../assets/images/Blinkit.svg";
import "./Logo.style.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <a href="http://localhost:3000">
        <img src={blinkitLogo} alt="blinkit-logo" />
      </a>
    </div>
  );
};

export default memo(Logo);
