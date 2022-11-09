import React from "react";
import { Button, Form, Input, Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../store/redux/user";

const Login = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const success = useSelector((state) => state.users.success);

  const onFinish = async (value) => {
    await dispatch(signIn(value));
    if (success) {
      alert("đăng nhập thành công");
      form.resetFields();
    }
    //  await dispatch(getAllStocks());
    //  setOpen(false);
  };

  const initilizerValueForm = {
    username: "",
    password: "",
  };

  return (
    <Layout
      style={{
        height: "100vh",
        paddingTop: "100px",
      }}
    >
      <h1 className="text-center">Đăng ký tài khoản</h1>
      <Form
        name="basic"
        form={form}
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={initilizerValueForm}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Tài khoản"
          name="username"
          style={{
            textAlign: "center",
          }}
          rules={[
            {
              required: true,
              message: "Tài khoản không được để trống!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mật khẩu"
          name="password"
          style={{
            textAlign: "center",
          }}
          rules={[
            {
              required: true,
              message: "Mật khẩu không được để trống!",
            },
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 12,
            span: 8,
          }}
          className="text-right"
        >
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default Login;
