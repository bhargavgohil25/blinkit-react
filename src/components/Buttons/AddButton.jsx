import minusIcon from "../../assets/images/minus-3108.svg";
import plusIcon from "../../assets/images/plus-3107.svg";
import "./AddButton.style.css";

const AddButton = ({ productCount, handleAddClick, handleRemoveClick }) => {
  return (
    <>
      {productCount === 0 ? (
        <button className="add_btn" onClick={handleAddClick}>
          ADD
        </button>
      ) : (
        <div className="product_added">
          <button className="icon minus" onClick={handleRemoveClick}>
            <img src={minusIcon} alt="minus-icon" />
          </button>
          <div className="product-quantity">{productCount}</div>
          <button className="icon plus" onClick={handleAddClick}>
            <img src={plusIcon} alt="plus-icon" />
          </button>
        </div>
      )}
    </>
  );
};

export default AddButton;
