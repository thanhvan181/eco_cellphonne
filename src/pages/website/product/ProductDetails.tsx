import { Button, Col, Image, Row } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProductinCategory, readone } from '../../../store/products/actions'
import { Link, useParams } from 'react-router-dom'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { addToCart } from '../../../store/cart/cartSlide'


const ProductDetails = () => {
    const productone = useSelector((store: any) => store.product.item.result)
    const list = useSelector((store: any) => store.product.list.result)
    console.log("list", list)

    console.log("productone", productone)
    const dispatch = useDispatch();
    const params = useParams();
    console.log("params", params)
    useEffect(() => {
        dispatch(readone(params.id) as any)



    }, [params])
    useEffect(() => {
        dispatch(getProductinCategory(productone.category_id) as any)
        // dispatch(getProductinCategory(list.categoryId) as any)

    }, [productone.category_id])

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
                        src={productone.image}
                    />

                </Col>
                <Col span={16}>
                    <h1>Name: { productone.name}</h1>
                    <h1>Price: {productone.originalPrice}</h1>
                    <p>{productone.description}</p>
                    <Button onClick={() => addCart(productone)}>
                        Mua Ngay
                    </Button>
                    <span><ShoppingCartOutlined /></span>
                    <span>Them vao gio hang</span>

                </Col>
            </Row>
            <Row>
                <h2>San pham cung loai</h2>

                {list && list.map((item: any) => {
                    return (
                        <Link to={`/product/${item._id}`}>
                            <Col span={4}>
                                <img src={item.image} alt="" />
                                <p>{item.saleOffPrice}</p>
                                <p>{item.description}</p>


                            </Col>
                        </Link>
                    )
                })}

            </Row>

        </div>
    )
}

export default ProductDetails
