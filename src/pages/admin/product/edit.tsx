import React, {useState} from "react";
import styled from "styled-components";
import { Typography, Col, Row, Button, Checkbox, Form, Input, InputNumber, Select, message } from 'antd'
import UploadImage from "../../../components/product/UploadImage";
import { createProduct, readoneProduct, updateproduct } from "../../../service/product";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { upload } from "../../../service/image";


const { TextArea } = Input
const { Option } = Select;


const EditProductPage = () => {
	const [imageUrl, setImageUrl] = useState("")
	const navigate = useNavigate()
	const onFinish = async (values: any) => {
		// console.log("ImageUrl: ", imageUrl)
		if(values.saleOffPrice > values.originalPrice){
			message.error(`gia khuyen mai${values.saleOffPrice} khong duoc lon hon gia goc ${values.originalPrice}`)
			return false
		}
		

		try {
			// values = {...values, "imageUrl": imageUrl}
			// console.log("VALUE:: ", values)
			const data = await updateproduct(id, values)
			console.log("Data", data.data);
            
			// const result = []

			message.success("Update  thành công")
			navigate(-1)
		} catch (err) {
			message.error("Có lỗi xảy ra")
		}
	};
    const { id } = useParams();
    const [form] = Form.useForm();

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};
    useEffect(() => {
        const loadreadone = async () => {
            const result = await readoneProduct(id)
            const res = result.data
            form.setFieldsValue(res)
        

        }
        loadreadone()
       
    }, [id])

	return (
		<>
			<Breadcrumb>
				<Typography.Title level={2} style={{ margin: 0 }}>
					cap nhat san pham
				</Typography.Title>
			</Breadcrumb>
			<Row gutter={16}>
				<Col span={10}>
					<UploadImage setImageUrl={setImageUrl}/>
					{/* <UploadTest/> */}
				</Col>
				<Col span={14}>
					<Typography.Title level={5}>Thông tin sản phẩm</Typography.Title>
					<Form
                        form={form}
						// name="product"
						initialValues={{}}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="on"
						labelCol={{ span: 24 }}
					>
						<Form.Item
							name="name"
							labelCol={{ span: 24 }}
							label="Tên sản phẩm"
							rules={[{ required: true, message: 'Tên sản phẩm không được trống' }]}
						>
							<Input size="large" />
						</Form.Item>	
						{/* <Form.Item
							name="image_url"
							labelCol={{ span: 24 }}
							label="image_url"
							// hidden={true}
							setFieldsValue={"image_url": imageUrl}
						>
							<Input size="large" />
						</Form.Item> */}

						<Row gutter={16}>
							<Col span={12}>
								<Form.Item
									name="originalPrice"
									label="Giá gốc"
									labelCol={{ span: 24 }}
									rules={[{ required: true, message: 'Gía sản phẩm' }]}
								>
									<InputNumber style={{ width: '100%' }} size="large" />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name="saleOffPrice"
									label="Giá giảm"
									labelCol={{ span: 24 }}
									rules={[{ required: true, message: 'Gía sản phẩm' }]}
								>
									<InputNumber style={{ width: '100%' }} size="large" />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									label="Phân loại"
									name="categories"
									rules={[{ required: true }]}
								>
									<Select style={{ width: '100%' }} size="large">
										<Option value="phone">Điện thoại</Option>
										<Option value="laptop">Laptop</Option>
										<Option value="accessories" disabled>
											Phụ kiện
										</Option>
										<Option value="tablet">Máy tính bảng</Option>
									</Select>
								</Form.Item>
							</Col>
						</Row>

						<Form.Item
							name="feature"
							labelCol={{ span: 24 }}
							label="Đặc điểm nổi bật"
							rules={[{ required: true, message: 'Đặc điểm sản phẩm' }]}
						>
							<TextArea name="feature" />
						</Form.Item>
						<Form.Item
							name="description"
							labelCol={{ span: 24 }}
							label="Mô tả sản phẩm"
							rules={[{ required: true, message: 'Mô tả sản phẩm' }]}
						>
							<TextArea name="description" />
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit">
								Cap nhat sản phẩm
							</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</>
	)
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

const Label = styled.div`
	font-size: 13px;
`

export default EditProductPage