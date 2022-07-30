import { Col, Row, Slider } from "antd";
import React, { useState } from "react";
import * as S from "./styles";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAlls } from "../../store/products/actions";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProductTop: React.FC = () => {
  const dispatch = useDispatch();
  const productList = useSelector((store: any) => store.product.list.result);
    console.log("productList", productList);
    const params = useParams();
    console.log("params", params)

  useEffect(() => {
    dispatch(getAlls() as any);
  }, []);

  return (
    <>
      <Row gutter={16}>
        {productList &&
          productList.map((o: any) => (
            <Col className="gutter-row" span={4}>
                  <div>
                      <Link to={`/product/${o.id}`}>
                          <img
                              width={200}
                              height={200}
                              src={o.imageUrl}
                          />
                          <h3>{o.name}</h3>
                          <span>10.790.000 ₫</span>
                          <p>
                              [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
                              1.000.000đ
                          </p>
                      </Link>
                
              </div>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default ProductTop;
