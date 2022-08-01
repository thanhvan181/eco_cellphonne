
import { Col, Row } from "antd";
import BannerMenu from "../../../components/Banner/Banner";
import Footer from "../../../components/Footer/Footer";
import HomeMenu from "../../../components/Home/Menu";
import Producttop from "../../../components/ProductTop/Producttop";

const HomePage = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <>

      <div>
        <BannerMenu/>


      </div>
      <Producttop />
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default HomePage;
