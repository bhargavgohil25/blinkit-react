import SideNavItem from "./SideNavItem";
import "./SideNavBar.style.css";
import { memo } from "react";
import { useSelector } from "react-redux";
import { selectSideNavCategoryIds } from "../../state/reducers/selectors/sideNavCategories";

const SideNavBar = () => {
  const categoryIds = useSelector(selectSideNavCategoryIds);

  return (
    <div className="side__nav">
      {categoryIds.length > 0 &&
        categoryIds.map((categoryId) => {
          return <SideNavItem key={categoryId} categoryId={categoryId} />;
        })}
    </div>
  );
};

export default memo(SideNavBar);
