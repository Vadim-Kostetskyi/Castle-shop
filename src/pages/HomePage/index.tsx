import Header from "modules/core/containers/Header";
import Banner from "modules/product/conteiners/Banner";
import Achievements from "modules/storeInfo/modules/Achievements";
import Benefits from "modules/storeInfo/modules/Benefits";

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Achievements />
      <Benefits />
    </>
  );
};

export default HomePage;
