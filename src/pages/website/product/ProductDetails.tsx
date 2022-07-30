import { Button, Col, Image, Row } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { readone } from '../../../store/products/actions'
import { useParams } from 'react-router-dom'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { addToCart } from '../../../store/cart/cartSlide'


const ProductDetails = () => {
    const productone = useSelector((store: any) => store.product.item.result)
    console.log("productone", productone)
    const dispatch = useDispatch();
    const params = useParams();
    console.log("params", params)
    useEffect(() => {
        dispatch(readone(params.id) as any)
        

    }, [params])

    const addCart = (product: any) => {
        console.log("productaddcart", product)
        dispatch(addToCart(product))


    }
    return (
        <div>
            <Row>
                <Col span={8}>
                    <Image
                        width={400}
                        src={productone.imageUrl}
                    />
                    
                </Col>
                <Col span={16}>
                    <h1>Price: {productone.originalPrice}</h1>
                    <p>{productone.description}</p>
                    <Button onClick={() => addCart(productone)}>
                        Mua Ngay
                    </Button>
                    <span><ShoppingCartOutlined /></span>
                    <span>Them vao gio hang</span>

                </Col>
            </Row>
            
        </div>
    )
}

export default ProductDetails
