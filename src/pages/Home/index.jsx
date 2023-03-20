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

  const addProductToCart = useCallback(
    (productId) => {
      const newCart = addToCart(cart, productId);
      setCart(newCart);
    },
    [cart]
  );

  const removeProductFromCart = useCallback(
    (productId) => {
      const newCart = removeFromCart(cart, productId);
      setCart(newCart);
    },
    [cart]
  );

  const { cartQuantity, totalCartCost } = calculateCartDetails(cart, products);

  return (
    <>
      <div className="top">
        <Header cartQuantity={cartQuantity} totalCartCost={totalCartCost} />
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
