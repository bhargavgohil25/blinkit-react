import { useCallback, useEffect, useState } from "react";
import fetchJsonData from "../../api";
import "./Home.style.css";
import Feature from "../../components/Feature/Feature";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import SideNavBar from "../../components/SideNavBar/SideNavBar";
import SubHeader from "../../components/SubHeader/SubHeader";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("DAIRY_PRODUCTS");
  const [categories, setCategories] = useState([]);
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
      setCategories(categories);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { products } = await fetchJsonData("/data/products.json");
      const reqProducts = products.filter(
        (product) => product.categoryId === selectedCategory
      );
      setProducts(reqProducts);
    };

    fetchData();
  }, [selectedCategory]);

  useEffect(() => {
    calculateCartDetails();
  }, [cart]);

  const calculateCartDetails = () => {
    let totalCartCost = 0;
    for (let productId in cart) {
      const product = products.find(
        (product) => product.productId === parseInt(productId)
      );
      totalCartCost += cart[productId].productCount * product.discountedPrice;
    }

    const cartQuantity = Object.keys(cart).reduce((acc, productId) => {
      return acc + cart[productId].productCount;
    }, 0);

    setCartDetail({ cartQuantity, totalCartCost });
  };

  const handleSideNavClick = useCallback((categoryId) => {
    setSelectedCategory(categoryId);
  }, []);

  // Function to add a product to the cart
  const addProductToCart = useCallback((productId) => {
    setCart((prevCart) => {
      // Check if the product is already in the cart
      if (prevCart[productId]) {
        // If it is, update the count of the product
        return {
          ...prevCart,
          [productId]: {
            productCount: prevCart[productId].productCount + 1,
          },
        };
      } else {
        // If it's not, add the product to the cart with a count of 1
        return {
          ...prevCart,
          [productId]: {
            productCount: 1,
          },
        };
      }
    });
  }, []);

  const removeProductFromCart = useCallback((productId) => {
    setCart((prevCart) => {
      // Check if the product is in the cart
      if (prevCart[productId]) {
        // If it is, check if the count is greater than 1
        if (prevCart[productId].productCount > 1) {
          // If it is, decrease the count of the product
          return {
            ...prevCart,
            [productId]: {
              productCount: prevCart[productId].productCount - 1,
            },
          };
        } else {
          // If the count is 1, remove the product from the cart
          const newCart = { ...prevCart };
          delete newCart[productId];
          return newCart;
        }
      } else {
        // If the product is not in the cart, return the previous cart state
        return prevCart;
      }
    });
  }, []);

  return (
    <>
      <div className="top">
        <Header cartDetail={cartDetail} />
        <SubHeader />
      </div>
      <main className="main">
        <div className="product_wrapper">
          <div className="product_container">
            <SideNavBar
              categories={categories}
              handleSideNavClick={handleSideNavClick}
              selectedCategory={selectedCategory}
            />
            <Products
              products={products}
              addClickHandler={addProductToCart}
              removeClickHandler={removeProductFromCart}
              cart={cart}
            />
          </div>
        </div>
      </main>
      <Feature />
      <Footer />
    </>
  );
};

export default Home;
