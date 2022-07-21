import React from "react";
import styled from "styled-components";
import {
  Typography,
  Button,
  Input,
  Upload,
  UploadProps,
  message,
  UploadFile,
} from "antd";
import { PlusCircleOutlined, UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { upload } from "../../service/image";
import { triggerFocus } from "antd/lib/input/Input";
import { RcFile } from "antd/lib/upload";

const { TextArea } = Input;
// const getBase64 = (file: RcFile): Promise<string> =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result as string);
//     reader.onerror = (error) => reject(error);
//   });
const UploadImage = (prop:any) => {
  const [base64Image, setBase64Image] = React.useState("");
  const [uploadedImage, setUploadedImage] = React.useState("");
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);
  const [isUpload, setIsUpload] = React.useState(true)


 

  const uploadImage = async (base64Image: string) => {
    console.log("baase64", base64Image);
    try {
      const res = await upload(base64Image);
      const data = res.data;
      console.log(data);
      setUploadedImage(data.url);
      prop.setImageUrl(data.url);
    } catch (err) {
      console.log(err);
    }
  };


  

  

  const hanldeBeforeUpload = (file: any) => {
    const isLt2M = file.size / 1024 / 1024 < 2;
    console.log("IMage size: ", file.size, typeof file.size)
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg" || file.type ==="image/gif";
    if (!isJpgOrPng) {
   
      message.error(`${file.name} is not a png file`);
      return false
    }
    if (!isLt2M) {
        console.log("size")
    
        message.error("Image must smaller than 2MB!");
        return false
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => uploadImage(reader.result as string);
  
    

    return isJpgOrPng || isLt2M || Upload.LIST_IGNORE ;
  };
  const props: UploadProps = {
   
    multiple: false,

    beforeUpload: hanldeBeforeUpload,
    // customRequest: uploadImage,
  };

  return (
    <Container>
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
      <Label>Mô tả ngắn</Label>
      <TextArea rows={4} placeholder="Mô tả ngắn" />
    </Container>
  );
};

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

export default UploadImage;
