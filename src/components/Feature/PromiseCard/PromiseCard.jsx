import "./PromiseCard.style.css";

const PromiseCard = ({ cardData }) => {
  return (
    <>
      <div className="feature__block">
        <div className="promise_img">
          <img src={cardData.imageSource} alt={cardData.headline} />
        </div>
        <div className="promise_tagline">
          <div className="promise_header">{cardData.headline}</div>
          <div className="promise_subtitle">{cardData.subtitle}</div>
        </div>
      </div>
    </>
  );
};

export default PromiseCard;
