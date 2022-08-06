import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
	Typography,
	Col,
	Row,
	Button,

	Form,
	Input,
	InputNumber,
	Select,
	message,
	Upload,
	UploadProps,
} from "antd";
// import UploadImage from "../../../components/product/UploadImage";
import { create } from "../../../service/product";
import { useNavigate } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";
import { upload } from "../../../service/image";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchMany } from "../../../store/category/actions";

// import UploadTest from "../../../components/Product/UploadTest";

const { TextArea } = Input;
const { Option } = Select;

const AddProductPage = () => {

	const [fileList, setFileList] = useState<any>([])
	console.log("fileList", fileList)
	const [uploadedImage, setUploadedImage] = React.useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const list = useSelector((store: any) => store.category.list.result)
	console.log("listcate", list)


	const onFinish = async (values: any) => {

		if (values.saleOffPrice > values.originalPrice) {
			message.error(
				`gia khuyen mai${values.saleOffPrice} khong duoc lon hon gia goc ${values.originalPrice}`
			);
			return false;
		}

		try {

			values.image = uploadedImage
			console.log("VALUE:: ", values);

			const data = await create(values);
			console.log("Data", data);
			// const result = []

			message.success("Tạo mới thành công");
			navigate(-1);
		} catch (err) {
			message.error("Có lỗi xảy ra");
		}
	}

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};
	const uploadImage = async (base64Image: string) => {
		console.log("baase64", base64Image);
		try {
			const res = await upload(base64Image);
			const data = res.data;
			console.log("data", data);

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
		dispatch(fetchMany() as any)
	}, [])

	return (
		<>

			<Breadcrumb>
				<Typography.Title level={2} style={{ margin: 0 }}>
					Thêm mới
				</Typography.Title>
			</Breadcrumb>


			<Form initialValues={{}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="on"
				labelCol={{ span: 24 }}>
				<Row gutter={16}>
					<Col span={10}>

						<Container>
							<Form.Item name="image">
								<UploadWrapper>
									{uploadedImage ? (
										" "
									) : (
										<Upload {...props} fileList={fileList}>
											<Button
												icon={<PlusCircleOutlined style={{ fontSize: 30 }} />}
											></Button>
										</Upload>
									)}

									{uploadedImage && (
										<ImagePreview style={{}} src={uploadedImage} alt="Image" />
									)}
								</UploadWrapper>

							</Form.Item>

							<Label>Mô tả ngắn</Label>
							<TextArea rows={4} placeholder="Mô tả ngắn" />
						</Container>



					</Col>
					<Col span={14}>
						<Typography.Title level={5}>Thông tin sản phẩm</Typography.Title>





						<Form.Item
							name="name"
							labelCol={{ span: 24 }}
							label="Tên sản phẩm"
							rules={[
								{ required: true, message: "Tên sản phẩm không được trống" },
							]}
						>
							<Input size="large" />
						</Form.Item>


						<Row gutter={16}>
							<Col span={12}>
								<Form.Item
									name="originalPrice"
									label="Giá gốc"
									labelCol={{ span: 24 }}
									rules={[{ required: true, message: "Gía sản phẩm" }]}
								>
									<InputNumber style={{ width: "100%" }} size="large" />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name="saleOffPrice"
									label="Giá giảm"
									labelCol={{ span: 24 }}
									rules={[{ required: true, message: "Gía sản phẩm" }]}
								>
									<InputNumber style={{ width: "100%" }} size="large" />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									label="Phân loại"
									name="category_id"
									rules={[{ required: true }]}
								>
									<Select style={{ width: "100%" }} size="large">
										{list && list.map((sub: any) => {
											return (
												<>
													<Option value={sub._id}>{sub.name}</Option>
												</>
											)
										})}
										


									</Select>
								</Form.Item>
							</Col>
						</Row>

						<Form.Item
							name="feature"
							labelCol={{ span: 24 }}
							label="Đặc điểm nổi bật"
							rules={[{ required: true, message: "Đặc điểm sản phẩm" }]}
						>
							<TextArea name="feature" />
						</Form.Item>
						<Form.Item
							name="description"
							labelCol={{ span: 24 }}
							label="Mô tả sản phẩm"
							rules={[{ required: true, message: "Mô tả sản phẩm" }]}
						>
							<TextArea name="description" />
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit">
								Tạo mới sản phẩm
							</Button>
						</Form.Item>

					</Col>
				</Row>

			</Form>


		</>
	);
};

const Breadcrumb = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;


const Container = styled.div``;

const Label = styled.div`
  font-weight: bold;
  font-size: 13px;
  text-align: left;
`;

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  border: 1px dashed gray;
`;

const UploadIcon = styled.label`
  input {
    display: none;
  }
`;

const ImagePreview = styled.img`
  width: 100%;
`;


export default AddProductPage;
