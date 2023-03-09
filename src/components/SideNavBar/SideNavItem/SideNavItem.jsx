import "./SideNavItem.style.css";

const SideNavItem = ({
  handleSideNavClick,
  categoryId,
  categoryName,
  categoryImg,
  selectedCategory,
}) => {
  return (
    <li
      className={
        selectedCategory === categoryId
          ? "nav__item nav__item--active"
          : "nav__item"
      }
      onClick={() => handleSideNavClick(categoryId)}
    >
      <div className="side__nav__icon">
        <img src={categoryImg} alt={categoryName} className="nav__item--img" />
      </div>
      <div className="nav__item--name">{categoryName}</div>
    </li>
  );
};

export default SideNavItem;
