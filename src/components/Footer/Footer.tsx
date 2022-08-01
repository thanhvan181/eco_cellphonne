import React from 'react'
import { Link } from 'react-router-dom'
import ListFooter from '../ListFooter/ListFooter'
import * as S from "./style"
import lg1 from '../../assets/image/logo.png'
import lg2 from '../../assets/image/logo1.png'
import lg3 from '../../assets/image/logo5.png'
import lg4 from '../../assets/image/logo3.png'
import lg5 from '../../assets/image/logo4.png'
import dienthoaivui from '../../assets/image/dienthoaivui.png'



type Props = {}

const Footer = (props: Props) => {
    return (
        <div>
            <S.TopFooter>
                <ul>
                    <h3>Tìm cửa hàng</h3>
                    <S.Li><Link className='li' to="">Tìm cửa hàng gần nhất</Link></S.Li>
                    <S.Li><Link className='li' to="">Mua hàng từ xa</Link></S.Li>
                    <S.Li><Link style={{ color: "red", fontSize: 11 }} to="">Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</Link></S.Li>
                    <S.Li><Link className='li' to="">Phương thức thanh toán</Link></S.Li>
                    <S.Li>
                        <Link to={``}><img src={lg1} alt="" />
                        </Link> <Link to={``}><img src={lg2} alt="" />
                        </Link> <Link to={``}><img src={lg3} alt="" />
                        </Link> <Link to={``}><img src={lg4} alt="" />
                        </Link> <Link to={``}><img src={lg5} alt="" /> </Link>
                    </S.Li>
                </ul>
                <ul>
                    <S.Li><Link className="li" to="">Gọi mua hàng: 1800.2044 (8h00 - 22h00)</Link></S.Li>
                    <S.Li><Link className="li" to="">Gọi khiếu nại: 1800.2063 (8h00 - 21h30)</Link></S.Li>
                    <S.Li><Link className="li" to="">Gọi bảo hành: 1800.2064 (8h00 - 21h00)</Link></S.Li>
                    <h3>Đối tác dịch vụ bảo hành</h3>
                    <S.Li><Link className="li" to="">Điện Thoại - Máy tính</Link></S.Li>
                    <h3>Trung tâm bảo hành uỷ quyền Apple</h3>
                    <img src={dienthoaivui} alt="" />
                </ul>
                <ul>
                    <S.Li><Link className="li" to={``}>Mua hàng và thanh toán Online</Link></S.Li>
                    <S.Li><Link className="li" to={``}>Mua hàng trả góp Online</Link></S.Li>
                    <S.Li><Link className="li" to={``}>Tra thông tin đơn hàng</Link></S.Li>
                    <S.Li><Link className="li" to={``}>Tra điểm Smember</Link></S.Li>
                    <S.Li><Link className="li" to={``}>Tra thông tin bảo hành</Link></S.Li>
                    <S.Li><Link style={{ color: "black", fontSize: 13, fontWeight: 600 }} to={``}>Tra cứu hoá đơn VAT điện tử</Link></S.Li>
                    <S.Li><Link className="li" to={``}>Trung tâm bảo hành chính hãng</Link></S.Li>
                    <S.Li><Link className="li" to={``}>Quy định về việc sao lưu dữ liệu</Link></S.Li>
                    <S.Li><Link style={{ color: "red", fontSize: 13, }} to={``}>Dịch vụ bảo hành điện thoại</Link></S.Li>
                </ul>
                <ul>
                    <S.Li><Link className="li" to={``}>Quy chế hoạt động</Link></S.Li>
                    <S.Li><Link className="li" to={``}>Chính sách Bảo hành</Link></S.Li>
                    <S.Li><Link className="li" to={``}>Liên hệ hợp tác kinh doanh</Link></S.Li>
                    <S.Li><Link className="li" to={``}>Khách hàng doanh nghiệp (B2B)</Link></S.Li>
                    <S.Li><Link style={{ color: "red", fontSize: 13, }} to={``}>Ưu đãi thanh toán</Link></S.Li>
                    <S.Li><Link className="li" to={``}>Tuyển dụng</Link></S.Li>
                </ul>
            </S.TopFooter>
            <div>
                <ListFooter />
            </div>
        </div>
    )
}



export default Footer