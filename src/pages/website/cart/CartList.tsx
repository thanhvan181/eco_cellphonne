import { Button, Col, Row } from 'antd'
import React from 'react'
import * as S from "./styles"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addToCart, decreaseCart, getTotals } from '../../../store/cart/cartSlide'
import { useDispatch } from 'react-redux'



const CartList = () => {
    const dispatch = useDispatch();
    const carts = useSelector((state: any) => state.cart.items)
    console.log("carts", carts);
    const cartTotal = useSelector((state: any) => state.cart.cartTotalAmount)
    console.log("cartTotal", cartTotal)
    useEffect(() => {
        dispatch(getTotals({}))
    }, [carts, dispatch])
    // const hanldeRomveFromCart = (id: any) => {
    //     // console.log("itemcart", id)
    //     dispatch(removeItemFromCart(id))


    // }
    const hanldeClickDecreaseCart = (itemcart: any) => {
        dispatch(decreaseCart(itemcart))


    }
    const hanldeClickincreaseCart = (itemcart: any) => {
        dispatch(addToCart(itemcart))
    }
  return (
      <S.Wrapper>
          {
              carts && carts.map((o: any) => (
                  <Row>
                      <Col span={12}>
                          <img src={o.image} alt="" />
                      </Col>
                      <Col span={12}>
                          <h1>{o.name}</h1>
                          <p>{o.originalPrice }</p>
                          <button

                                onClick={() => hanldeClickDecreaseCart(o)}
                              //   type="button"
                              style={{ height: 30, width: 30 }}
                          >
                              -
                          </button>
                          <input
                              type="text"

                              defaultValue="1"
                              style={{ height: 30 }}
                            value={o.cartQuanlity}
                          />
                          <button
                              style={{ height: 30, width: 30 }}
                                onClick={() => hanldeClickincreaseCart(o)}
                              // className="btn btn-primary text-white"
                              type="button"
                          >
                              +
                          </button>
                          <p>{o.description}</p>
                      </Col>

                  </Row>
              ))
          }
          <Row>
              <Col span={12}>
                  <p>Tong tien tam tinh</p>
              </Col>
              <Col span={12}>
                  <span>{cartTotal}</span>
              </Col>
          </Row>
          <Row>
              <S.Btn>Tiep tuc dat hang</S.Btn>
          </Row>
          <Row>
              <S.BtnOuline>Chon them san pham khac</S.BtnOuline>
          </Row>
          
    </S.Wrapper>
  )
}

export default CartList