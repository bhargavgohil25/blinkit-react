import SideNavItem from "./SideNavItem/SideNavItem";
import "./SideNavBar.style.css";
import { memo } from "react";

const SideNavBar = ({ categories, handleSideNavClick, selectedCategory }) => {
  return (
    <div className="side__nav">
      {categories.length > 0 &&
        categories.map((category) => {
          return (
            <SideNavItem
              selectedCategory={selectedCategory}
              handleSideNavClick={handleSideNavClick}
              key={category.categoryId}
              categoryId={category.categoryId}
              categoryName={category.categoryName}
              categoryImg={category.categoryImg}
            />
          );
        })}
    </div>
  );
};

export default memo(SideNavBar);
