import {
  ClockCircleOutlined,
  HomeOutlined,
  LaptopOutlined,
  PhoneOutlined,
  TabletOutlined,
} from "@ant-design/icons";
import { Col, MenuProps, Row } from "antd";
import { Menu } from "antd";
import styled from "styled-components";
import Banner from "../../assets/image/banner.png";
import * as S from "./style"
type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Điện thoại", "sub1", <PhoneOutlined />, [
    getItem(
      "Item 1",
      null,
      null,
      [getItem("Option 1", "1"), getItem("Option 2", "2")],
      "group"
    ),
    getItem(
      "Item 2",
      null,
      null,
      [getItem("Option 3", "3"), getItem("Option 4", "4")],
      "group"
    ),
  ]),

  getItem("Laptop", "sub2", <LaptopOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub15", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),

  getItem("Máy tính bảng", "sub3", <TabletOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  getItem("Âm thanh", "sub4", <TabletOutlined />, [
    getItem("Option 9", "91"),
    getItem("Option 10", "101"),
  ]),

  getItem("Đồng hồ", "sub5", <ClockCircleOutlined />, [
    getItem("Option 9", "92"),
    getItem("Option 10", "102"),
  ]),
  getItem("Nhà Thông Minh", "sub6", <HomeOutlined />, [
    getItem("Option 9", "93"),
    getItem("Option 10", "103"),
  ]),
];

const onClick: MenuProps["onClick"] = (e) => {
  console.log("click", e);
};
type Props = {};

const BannerMenu = (props: Props) => {
  return (
    <S.Wrapper>
      <Row gutter={12}>
        <Col>
          <Menu
            onClick={onClick}
            style={{ width: 240 }}
            mode="vertical"
            items={items}
          />
        </Col>
        <Col>
          <>
            <img src={Banner} alt="" width={`85%`} />
          </>
        </Col>

      </Row>
    </S.Wrapper>
    
  );
};



export default BannerMenu;