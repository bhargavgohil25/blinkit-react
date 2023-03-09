import { memo, useEffect, useState } from "react";
import "./SubHeader.style.css";
import fetchJsonData from "../../api";

const SubHeader = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchJsonData("/data/subHeaderCategories.json");
      setCategories(data.subHeaderCategories);
    };
 
    fetchData();
  }, []);

  return (
    <>
      <div className="sub-header">
        <div className="sub-header__category">
          {categories &&
            categories.map((category) => {
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
    </>
  );
};

export default memo(SubHeader);
