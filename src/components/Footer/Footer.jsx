import { memo } from "react";
import { BlinkitAddress, socialData } from "../../assets/constants";
import { applicationData } from "../../assets/constants";
import "./Footer.style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="address">{BlinkitAddress}</div>
        <div className="application">
          <div className="application__header">Download App</div>
          {applicationData.length > 0 &&
            applicationData.map((app) => {
              return (
                <div key={app.applicationName} className="application__icon">
                  <img src={app.imageSource} alt={app.applicationName} />
                </div>
              );
            })}
        </div>
        <div className="social">
          {socialData.length > 0 &&
            socialData.map((socialEntity) => {
              return (
                <div
                  key={socialEntity.socialName}
                  className="application__icon"
                >
                  <img
                    src={socialEntity.imageSource}
                    alt={socialEntity.socialName}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
