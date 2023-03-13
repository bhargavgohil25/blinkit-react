import { promiseCardData } from "../../assets/constants";
import PromiseCard from "./PromiseCard";
import "./Feature.style.css";
import { memo } from "react";

const Feature = () => {
  return (
    <div className="feature__container">
      {promiseCardData.length > 0 &&
        promiseCardData.map((cardData) => {
          return <PromiseCard key={cardData.id} cardData={cardData} />;
        })}
    </div>
  );
};

export default memo(Feature);
