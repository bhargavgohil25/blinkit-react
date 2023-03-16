import { memo } from "react";
import "./SubHeader.style.css";
import { useSelector } from "react-redux";
import { selectSubHeaderCategories } from "../../state/reducers/subHeaderReducer";

const SubHeader = () => {
  const subHeaderCategories = useSelector(selectSubHeaderCategories);

  return (
    <div className="sub-header">
      <div className="sub-header__category">
        {subHeaderCategories.length > 0 &&
          subHeaderCategories.map((category) => {
            return (
              <li
                className="sub-header__category--item"
                key={category.categoryId}
              >
                {category.categoryName}
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default memo(SubHeader);
