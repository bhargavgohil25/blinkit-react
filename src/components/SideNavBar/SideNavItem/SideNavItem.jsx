import { useCallback } from "react";
import "./SideNavItem.style.css";

const SideNavItem = ({
  handleSideNavClick,
  categoryId,
  categoryName,
  categoryImg,
  selectedCategory,
}) => {
  const handleClick = useCallback(() => handleSideNavClick(categoryId), []);

  return (
    <div
      className={
        selectedCategory === categoryId
          ? "nav__item nav__item--active"
          : "nav__item"
      }
      onClick={handleClick}
    >
      <div className="side__nav__icon">
        <img src={categoryImg} alt={categoryName} />
      </div>
      <div className="nav__item--name">{categoryName}</div>
    </div>
  );
};

export default SideNavItem;
