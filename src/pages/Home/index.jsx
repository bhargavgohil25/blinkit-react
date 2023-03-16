import { useEffect } from "react";
import "./Home.style.css";
import Feature from "../../components/Feature";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Products from "../../components/Products";
import SideNavBar from "../../components/SideNavBar";
import SubHeader from "../../components/SubHeader";
import { useActions } from "../../hooks/useActions";

const Home = () => {
  const { fetchProducts, fetchSideNavCategories, fetchSubHeaderCategories } =
    useActions();

  useEffect(() => {
    fetchProducts();
    fetchSideNavCategories();
    fetchSubHeaderCategories();
  }, []);

  return (
    <>
      <div className="top">
        <Header />
        <SubHeader />
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
