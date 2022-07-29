
import Producttop from "../../components/ProductTop/Producttop";

const HomePage = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <>
      <Producttop />
    </>
  );
};

export default HomePage;
