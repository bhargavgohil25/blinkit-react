import { useCallback, useState } from "react";
import "./Delivery.style.css";
import LocationModal from "./LocationModal/LocationModal";

const Delivery = () => {
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [location, setLocation] = useState("Delhi, India");

  const getLocation = useCallback((location) => {
    if(!location) return;
    setLocation(location);
  }, []);

  return (
    <>
      <div
        className="delivery-container"
        onClick={() => setLocationModalOpen(true)}
      >
        <div className="delivery__duration">Delivery in 10 minutes</div>
        <div className="delivery__location">{location}</div>
      </div>
      {locationModalOpen && (
        <LocationModal
          setLocationModalOpen={setLocationModalOpen}
          getLocation={getLocation}
        />
      )}
    </>
  );
};

export default Delivery;
