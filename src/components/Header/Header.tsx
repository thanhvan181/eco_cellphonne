import { ShoppingCartOutlined, SearchOutlined, EnvironmentOutlined, CarOutlined } from '@ant-design/icons'
import { Button, Row, Col, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import * as S from "./Header.styles"
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getTotals } from '../../store/cart/cartSlide'



const Header = () => {
  const [countcart, setCountCart] = useState(0)
  const carts = useSelector((state: any) => state.cart.items)
  console.log("cartItems", carts)

  const dataHeaderLeft = [
    { text: "Gọi mua hàng 1800.2097", icon: "", link: "/" },
    { text: "Cửa hàng gần bạn", icon: <EnvironmentOutlined style={{ fontSize: '150%' }} />, link: "/" },
    { text: "Tra cứu đơn hàng", icon: <CarOutlined style={{ fontSize: '150%' }} />, link: "/" },
    { text: `Gio hang(${countcart})`, icon: <ShoppingCartOutlined style={{ fontSize: '150%' }} />, link: "/cart" },
  ]
  useEffect(() => {
    setCountCart(carts.length)
  }, [carts])
  return (
    <S.StyleHeader>
      <S.Container>

        <Row justify='space-between' align='middle' gutter={40}>
          <Col span={2}>
            <div className="logo">
              <img src="https://picsum.photos/200" alt="" width={56} />
            </div>
          </Col>
          <Col span={10}>
            <Input style={{ borderRadius: 10 }} prefix={<SearchOutlined onClick={() => console.log('search')
            } />} placeholder="search..." allowClear />
          </Col>
          <Col span={12}>
            <Row justify='end'>
              {dataHeaderLeft.map(item => (
                <Col key={item.text}>
                  <Link to={item.link}>
                    <Row justify='center' gutter={4} style={{ maxWidth: 140, color: 'white' }}>
                      <Col span={6}>
                        {item.icon}
                      </Col>
                      <Col span={18}>
                        {item.text}
                      </Col>
                    </Row>
                  </Link>

                </Col>
              ))}
            </Row>
          </Col>
        </Row>

      </S.Container>



    </S.StyleHeader>
  )
}

export default Header