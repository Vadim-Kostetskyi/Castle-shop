import Footer from "modules/core/containers/Footer";
import Header from "modules/core/containers/Header";
import Banner from "modules/product/conteiners/Banner";
import Categories from "modules/product/conteiners/Categories";
import Achievements from "modules/storeInfo/modules/Achievements";
import Benefits from "modules/storeInfo/modules/Benefits";

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Achievements />
      <Benefits />
      <Categories />
      <Footer />
    </>
  );
};

export default HomePage;
