import { useState } from "react";
import "./LocationModal.style.css";

const LocationModal = ({ setLocationModalOpen, getLocation }) => {
  const [location, setLocation] = useState("");

  return (
    <>
      <div
        className="modal__background"
        onClick={() => {
          setLocationModalOpen(false);
          getLocation(location);
        }}
      ></div>
      <div className="modal__container">
        <div className="modal__header">
          <div className="modal__title">Change Location</div>
        </div>
        <div className="modal__body">
          <div className="detect__location--btn">Detect Location</div>
          <div className="or-circle">
            <span className="or-text">OR</span>
          </div>
          <div className="location__input">
            <input
              type="text"
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Type your city Society/Colony/Appartment"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationModal;
