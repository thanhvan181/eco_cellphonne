import React, { useState } from "react";
import styled from "styled-components";
import { Typography, Col, Row, Button, Checkbox, Form, Input, InputNumber, Select, message, Upload, UploadProps } from 'antd'
import UploadImage from "../../../components/product/UploadImage";
import { create, read, updateproduct } from "../../../service/product";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { upload } from "../../../service/image";
import { PlusCircleOutlined } from "@ant-design/icons";


const { TextArea } = Input
const { Option } = Select;


const EditProductPage = () => {
	const [imageUrl, setImageUrl] = useState("")
	console.log("ImageUrl: ", imageUrl)
	const navigate = useNavigate()
	const [isImageEdit, setIsImageEdit] = useState(false)
	const [uploadedImage, setUploadedImage] = React.useState("");
	const [fileList, setFileList] = useState<any>([])
	const onFinish = async (values: any) => {

		if (values.saleOffPrice > values.originalPrice) {
			message.error(`gia khuyen mai${values.saleOffPrice} khong duoc lon hon gia goc ${values.originalPrice}`)
			return false
		}


		try {
			// values.image = uploadedImage
			values = {...values, "image": imageUrl}
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
	const uploadImage = async (base64Image: string) => {
		console.log("baase64", base64Image);
		try {
			const res = await upload(base64Image);
			const data = res.data;
			console.log("data", data);
			setImageUrl(data.url)

			setUploadedImage(data.url);

		} catch (err) {
			console.log(err);
		}
	};






	const hanldeBeforeUpload = (file: any) => {
		const isLt2M = file.size / 1024 < 200;
		console.log("IMage size: ", file.size, typeof file.size)
		const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg" || file.type === "image/gif";
		if (!isJpgOrPng) {

			message.error(`${file.name} is not a png file`);
			return false
		}
		if (!isLt2M) {


			message.error("Image must smaller than 2kB!");
			return false
		}

		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => uploadImage(reader.result as string);
		


		return isJpgOrPng || isLt2M || Upload.LIST_IGNORE;
	};
	const props: UploadProps = {

		multiple: false,

		beforeUpload: hanldeBeforeUpload,
		// customRequest: uploadImage,
	};

	useEffect(() => {
		const loadreadone = async () => {
			const result = await read(id)
			const res = result.data
			console.log("res", res)
			setImageUrl(res.image)
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
					<UploadWrapper>

						<Upload {...props} fileList={fileList}>
							<Button
								icon={<PlusCircleOutlined style={{ fontSize: 30 }} />}
							></Button>
						</Upload>


					
							<ImagePreview style={{}} src={imageUrl} alt="Image" />
						
					</UploadWrapper>

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
const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  border: 1px dashed gray;
`;
const ImagePreview = styled.img`
  width: 100%;
`;

export default EditProductPage