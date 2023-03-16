import { useEffect, useState } from "react";
import "./Home.style.css";
import Feature from "../../components/Feature";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Products from "../../components/Products";
import SideNavBar from "../../components/SideNavBar";
import SubHeader from "../../components/SubHeader";
import { useActions } from "../../hooks/useActions";

const Home = () => {
  const [subHeaderCategories, setSubHeaderCategories] = useState([]);

  const { fetchProducts, fetchSideNavCategories } = useActions();

  useEffect(() => {
    fetchProducts();
    fetchSideNavCategories();
  }, []);

  return (
    <>
      <div className="top">
        <Header />
        <SubHeader subHeaderCategories={subHeaderCategories} />
      </div>
      <main className="main">
        <div className="product_container">
          <SideNavBar />
          <Products />
        </div>
      </main>
      <Feature />
      <Footer />
    </>
  );
};

export default Home;
