import { useCallback, useEffect, useMemo, useState } from "react";
import fetchJsonData from "../../api";
import "./Home.style.css";
import Feature from "../../components/Feature";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Products from "../../components/Products";
import SideNavBar from "../../components/SideNavBar";
import SubHeader from "../../components/SubHeader";
import {
  addToCart,
  calculateCartDetails,
  getFilteredProducts,
  removeFromCart,
} from "../../utilities";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("DAIRY_PRODUCTS");
  const [categories, setCategories] = useState([]);
  const [subHeaderCategories, setSubHeaderCategories] = useState([]);
  const [cart, setCart] = useState({});
  const [cartDetail, setCartDetail] = useState({
    cartQuantity: 0,
    totalCartCost: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const { sideNavCategories: categories } = await fetchJsonData(
        "/data/sideNavCategories.json"
      );
      const { products } = await fetchJsonData("/data/products.json");
      const { subHeaderCategories } = await fetchJsonData(
        "/data/subHeaderCategories.json"
      );
      setSubHeaderCategories(subHeaderCategories);
      setProducts(products);
      setCategories(categories);
    };

    fetchData();
  }, []);

  const filteredProducts = useMemo(
    () => getFilteredProducts(products, selectedCategory),
    [products, selectedCategory]
  );

  const handleSideNavClick = useCallback((categoryId) => {
    setSelectedCategory(categoryId);
  }, []);

  const addProductToCart = (productId) => {
    setCart((prevCart) => {
      const newCart = addToCart(prevCart, productId);
      const { cartQuantity, totalCartCost } = calculateCartDetails(
        newCart,
        products
      );
      setCartDetail({ cartQuantity, totalCartCost });
      return newCart;
    });
  };

  const removeProductFromCart = (productId) => {
    setCart((prevCart) => {
      const newCart = removeFromCart(prevCart, productId);
      const { cartQuantity, totalCartCost } = calculateCartDetails(
        newCart,
        products
      );
      setCartDetail({ cartQuantity, totalCartCost });
      return newCart;
    });
  };

  return (
    <>
      <div className="top">
        <Header cartDetail={cartDetail} />
        <SubHeader subHeaderCategories={subHeaderCategories} />
      </div>
      <main className="main">
        <div className="product_container">
          <SideNavBar
            categories={categories}
            handleSideNavClick={handleSideNavClick}
            selectedCategory={selectedCategory}
          />
          <Products
            products={filteredProducts}
            addClickHandler={addProductToCart}
            removeClickHandler={removeProductFromCart}
            cart={cart}
          />
        </div>
      </main>
      <Feature />
      <Footer />
    </>
  );
};

export default Home;
