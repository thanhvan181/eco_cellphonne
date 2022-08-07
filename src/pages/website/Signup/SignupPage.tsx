import React from "react";
import { Button, Form, Input, InputNumber, message } from "antd";
import logo from "../../../assets/image/lg.png";
import fb from "../../../assets/image/fb.png";
import gg from "../../../assets/image/gg.png";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { login } from "../../../feartures/user/userSilice";
import "./signup.css";
import { signUp } from "../../../store/user/userSlide";

type Props = {};

const SignUP = (props: Props) => {
    // const dispatch = useAppDispatch();

    const onFinish = (values: any) => {
        console.log("value",values)
        dispatch(signUp(values) as any);
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector((state: any) => state.user.userInfo)
    const isAuthenticated = useSelector((state: any) => state.user.isAuthenticated)
    const accessToken = useSelector((state: any) => state.user.accessToken)
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
                                    // labelCol={{ span: 6 }}
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
                                        Đăng ky
                                    </Button>
                                </Form.Item>
                            </Form>
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

export default SignUP;