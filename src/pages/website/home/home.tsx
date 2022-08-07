
import { Col, Row } from "antd";
import BannerMenu from "../../../components/Banner/Banner";
import CategoryListBox from "../../../components/CategoryListBox";
import Footer from "../../../components/Footer/Footer";
import HomeMenu from "../../../components/Home/Menu";
import Producttop from "../../../components/ProductTop/Producttop";

const HomePage = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const color = [
    { id: 1, color: "#FFA3A3" },
    { id: 2, color: "#FF94EB" },
    { id: 3, color: "#E0B3FF" },
    { id: 4, color: "#4D91FF" },
    { id: 5, color: "#F5D63D" },
    { id: 6, color: "#FDA363" },
    { id: 7, color: "#FF6666" },
    { id: 8, color: "#D6D6D6" },
    { id: 9, color: "#6BCEFF" },
    { id: 10, color: "#FFD1E1" },
    { id: 11, color: "#FCD34B" },
  ];
  const cateAccessory = {
    title: "Phụ kiện",
    data: [
      {
        id: 1,
        name: "Nổi bật",
        color: color[Math.floor(Math.random() * color.length)].color,
      },
      {
        id: 2,
        name: "Phụ kiện Apple",
        color: color[Math.floor(Math.random() * color.length)].color,
      },
      {
        id: 3,
        name: "Dán màn hình",
        color: color[Math.floor(Math.random() * color.length)].color,
      },
      {
        id: 4,
        name: "Ốp lưng - Bao da",
        color: color[Math.floor(Math.random() * color.length)].color,
      },
      {
        id: 5,
        name: "Cáp, sạc",
        color: color[Math.floor(Math.random() * color.length)].color,
      },
      {
        id: 6,
        name: "Pin dự phòng",
        color: color[Math.floor(Math.random() * color.length)].color,
      },
      {
        id: 7,
        name: "Thiết bị mạng",
        color: color[Math.floor(Math.random() * color.length)].color,
      },
      {
        id: 8,
        name: "Camera",
        color: color[Math.floor(Math.random() * color.length)].color,
      },
      {
        id: 9,
        name: "Chuột, bàn phím",
        color: color[Math.floor(Math.random() * color.length)].color,
      },
      {
        id: 10,
        name: "Thẻ nhớ, USB",
        color: color[Math.floor(Math.random() * color.length)].color,
      },
      {
        id: 11,
        name: "Apple Care",
        color: color[Math.floor(Math.random() * color.length)].color,
      },
      {
        id: 12,
        name: "Dây đeo Airtag",
        color: color[Math.floor(Math.random() * color.length)].color,
      },
      {
        id: 13,
        name: "Gaming Gear",
        color: color[Math.floor(Math.random() * color.length)].color,
      },
    ],
  };
  return (
    <>

      <div>
        <BannerMenu />


      </div>
      <Producttop />
      {/* <Outstanding /> */}
      <CategoryListBox data={cateAccessory} />

    </>
  );
};

export default HomePage;
