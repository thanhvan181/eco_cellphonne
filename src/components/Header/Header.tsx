import { ShoppingCartOutlined, SearchOutlined, EnvironmentOutlined, CarOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Row, Col, Input, Select, Form } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import * as S from "./Header.styles"
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getTotals } from '../../store/cart/cartSlide'
import { logout } from '../../store/user/userSlide'
import { searchSanpham } from '../../store/products/actions'




const Header = () => {
  const [countcart, setCountCart] = useState(0)
  const carts = useSelector((state: any) => state.cart.items)
  const { Option } = Select;
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(
    (state: any) => state.user.isAuthenticated
  );
  const user = useSelector((state: any) => state.user.currentUser);
  const onFinish = (value: any) => {
    console.log('va', value)
    dispatch(searchSanpham(value) as any);

  }
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
            <Form onFinish={onFinish} >
              <Form.Item name="q">
                <Input style={{ borderRadius: 10 }} prefix={<SearchOutlined onClick={() => console.log('search')
                } />} placeholder="search..." allowClear />

              </Form.Item>
             

            </Form>
           
          </Col>
          <Col span={12}>
            <Row justify='end'>
              
                <Col >
                  <Link to={"/"}>
                    <Row justify='center' gutter={4} style={{ maxWidth: 140, color: 'white' }}>
                      <Col span={6}>
                      <EnvironmentOutlined style={{ fontSize: '150%' }} />
                      </Col>
                      <Col span={18}>
                      Gọi mua hàng 1800.2097
                      </Col>
                    </Row>
                  </Link>

              </Col>
              <Col >
                <Link to={"/"}>
                  <Row justify='center' gutter={4} style={{ maxWidth: 140, color: 'white' }}>
                    <Col span={6}>

                    </Col>
                    <Col span={18}>
                      Cửa hàng gần bạn
                    </Col>
                  </Row>
                </Link>

              </Col>
              <Col >
                <Link to={"/cart"}>
                  <Row justify='center' gutter={4} style={{ maxWidth: 140, color: 'white' }}>
                    <Col span={6}>
                      <ShoppingCartOutlined style={{ fontSize: '150%' }} />
                    </Col>
                    <Col span={18}>
                      Gio hang({countcart})
                    </Col>
                  </Row>
                </Link>

              </Col>
             
              {!isAuthenticated ? (
                <Col >
                  <Link to={"/signin"}>
                    <Row justify='center' gutter={4} style={{ maxWidth: 140, color: 'white' }}>
                      <Col span={6}>
                        <UserOutlined style={{ fontSize: '150%' }} />
                      </Col>
                      <Col span={18}>
                        Dang nhap
                      </Col>
                    </Row>
                  </Link>

                </Col>
              ) : (
                <>
                    <Col >
                      
                        <Row justify='center' gutter={4} style={{ maxWidth: 140, color: 'white' }}>
                          <Col span={6}>
                            <UserOutlined style={{ fontSize: '150%' }} />
                          </Col>
                          <Col span={18}>
                          {user.user.email}
                        </Col>
                        <Col span={18}>
                          <a href="" onClick={(e) => dispatch(logout(e))}>logout</a>
                        </Col>
                        </Row>
                      

                    </Col>
                   
                    
                </>
              )}
              
            </Row>
          </Col>
        </Row>

      </S.Container>



    </S.StyleHeader>
  )
}

export default Header