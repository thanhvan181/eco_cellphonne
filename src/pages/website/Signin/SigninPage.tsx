import React from "react";
import { Button, Form, Input, InputNumber, message } from "antd";
import logo from "../../../assets/image/lg.png";
import fb from "../../../assets/image/fb.png";
import gg from "../../../assets/image/gg.png";
import styled from "styled-components";
import { useDispatch } from "react-redux";
// import { useAppDispatch } from "../../../app/hooks";
import { Link, useNavigate } from "react-router-dom";
// import { login } from "../../../feartures/user/userSilice";
import "./signin.css";
import { signIn } from "../../../store/user/userSlide";

type Props = {};

const Signin = (props: Props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        dispatch(signIn(values) as any)
        navigate("/")
    }
    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <div>
            <Container>
                <Login>
                    <Wraper>
                        <LoginForm>
                            <Form
                                name="basic"
                                labelCol={{ span: 5 }}
                                wrapperCol={{ span: 24 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                        { required: true, message: "Please input your E-mail!" },
                                        { type: "email", message: "Email is not a valid E-mail!" },
                                    ]}
                                >
                                    <Input style={{ width: 300 }} minLength={10} />
                                </Form.Item>

                                <Form.Item
                                    label="Mật khẩu"
                                    name="password"
                                    rules={[
                                        { required: true, message: "Please input your password!" },
                                    ]}
                                    labelCol={{ span: 6 }}
                                >
                                    <Input.Password style={{ width: 300 }} />
                                </Form.Item>

                                <Form.Item wrapperCol={{ span: 16 }} style={{ marginTop: 45 }}>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        danger
                                        style={{ width: 300, borderRadius: 5 }}
                                    >
                                        Đăng Nhap
                                    </Button>
                                </Form.Item>
                            </Form>

                            <Link to={"/signup"}>
                                <p>Ban chua co tk</p>
                            </Link>


                            <MainLogin>
                                <p>Hoặc đăng nhập bằng</p>
                                <ul style={{ padding: 0 }}>
                                    <LoginWith>
                                        <a href="">
                                            <img src={fb} alt="" style={{ width: "70%" }} />
                                        </a>
                                    </LoginWith>
                                    <LoginWith>
                                        <a href="">
                                            <img src={gg} alt="" style={{ width: "70%" }} />
                                        </a>
                                    </LoginWith>
                                </ul>
                            </MainLogin>
                        </LoginForm>
                        <LoginLogo>
                            <img src={logo} alt="" width={150} />
                        </LoginLogo>
                    </Wraper>
                </Login>
            </Container>
        </div>
    );
};
const Container = styled.div`
  background: #e5e5e5;
  min-height: 100vh;
`;
const Login = styled.div`
  padding-top: 100px;
`;
const Wraper = styled.div`
  background: #f8f8f8;
  display: flex;
  align-items: center;
  max-width: 800px;
  margin: auto;
  border-radius: 10px;
`;
const LoginForm = styled.div`
  background: #fff;
  padding: 90px;
  border-radius: 10px;
`;
const MainLogin = styled.div`
  margin-top: 40px;
  text-align: center;
`;
const LoginWith = styled.li`
  display: inline-block;
`;
const LoginLogo = styled.div`
  padding: 0 50px;
`;

export default Signin;