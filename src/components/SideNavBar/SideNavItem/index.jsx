import { useCallback } from "react";
import "./SideNavItem.style.css";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
  selectCurrentSideNavCategoryId,
  selectSideNavCategoryById,
} from "../../../state/reducers/sideNavCategoriesReducer";
import { useActions } from "../../../hooks/useActions";

const SideNavItem = ({ categoryId }) => {
  const { categoryName, categoryImg } = useSelector((state) =>
    selectSideNavCategoryById(state, categoryId)
  );
  const selectedCategory = useSelector((state) =>
    selectCurrentSideNavCategoryId(state)
  );

  const { sideNavCurrentCategoryChanged } = useActions();

  const handleClick = useCallback(
    () => sideNavCurrentCategoryChanged(categoryId),
    [sideNavCurrentCategoryChanged, categoryId]
  );

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

SideNavItem.propTypes = {
  categoryId: PropTypes.string.isRequired,
};

export default SideNavItem;
