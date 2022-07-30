
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../components/Header/Header";
import * as S from "./Website";
interface Props {}

const WebsiteLayout = (props: Props) => {
  return (
  
      <S.WrapperWebsite>
        <Header />
        <Outlet />
      </S.WrapperWebsite>
  
  );
};

export default WebsiteLayout;
