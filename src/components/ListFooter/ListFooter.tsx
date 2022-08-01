import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type Props = {}

const ListFooter = (props: Props) => {
    return (
        <Container>
            <div style={{ maxWidth: 1100, margin: 'auto' }}>
                <Box>
                    <List>
                        <Li><Link style={{ color: "black", fontSize: "10px" }} to="">Điện thoại iPhone 13 - Điện thoại iPhone 12 - Điện thoại iPhone 11</Link></Li>
                        <Li><Link style={{ color: "black", fontSize: "10px" }} to="">Điện thoại iPhone 13 Pro Max - Điện thoại iPhone 11 Pro Max</Link></Li>
                        <Li><Link style={{ color: "black", fontSize: "10px" }} to="">iPhone cũ giá rẻ - iPhone 13 cũ - iPhone 12 cũ - iPhone 11 cũ</Link></Li>
                    </List>
                    <List>
                        <Li><Link style={{ color: "black", fontSize: "10px" }} to="">Điện thoại iPhone - Điện thoại Samsung - Điện thoại Samsung A</Link></Li>
                        <Li><Link style={{ color: "black", fontSize: "10px" }} to="">Điện thoại OPPO - Điện thoại Xiaomi - Điện thoại Vivo - Điện thoại Nokia</Link></Li>
                        <Li><Link style={{ color: "black", fontSize: "10px" }} to="">Samsung Fold 3 - Samsung S22 - Samsung A73 - Samsung A53</Link></Li>
                    </List>
                    <List>
                        <Li><Link style={{ color: "black", fontSize: "10px" }} to="">Laptop - Laptop HP - Laptop Dell - Laptop Acer</Link></Li>
                        <Li><Link style={{ color: "black", fontSize: "10px" }} to="">Microsoft Surface - Laptop Lenovo - Laptop Asus</Link></Li>
                        <Li><Link style={{ color: "black", fontSize: "10px" }} to="">Máy tính để bàn - Màn hình máy tính - Camera - Camera hành trình</Link></Li>
                    </List>
                </Box>
                <p style={{ fontSize: "10px" }}>Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</p>
            </div>
        </Container>
    )
}

const Container = styled.div`
   background-color: #F8F8F8;
`
const Box = styled.div`
   
     display: flex;
`

const List = styled.ul`
   
`

const Li = styled.li`
    list-style: none;
`
export default ListFooter