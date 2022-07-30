import { ShoppingCartOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import * as S from "./Header.styles"
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'



const Header = () => {
  const [countcart, setCountCart] = useState(0)
  const carts = useSelector((state: any) => state.cart.items)
  useEffect(() => {
    setCountCart(carts.length)
  }, [carts])
  return (
    <S.StyleHeader>
      <S.Container>
        <Link to="/cart">
          <Button >

            Cart<ShoppingCartOutlined /> {countcart}

          </Button>

        </Link>


      </S.Container>



    </S.StyleHeader>
  )
}

export default Header