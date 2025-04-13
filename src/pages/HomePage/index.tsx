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
    </>
  );
};

export default HomePage;
