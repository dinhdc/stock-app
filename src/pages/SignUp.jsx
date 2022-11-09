import React from "react";
import { Button, Form, Input } from 'antd';
import moment from 'moment/moment';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../store/redux/user';

const SignUp = () => {

  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const success = useSelector(state => state.users.success);

   const onFinish = async (value) => {
     const data = {
       ...value,
      dateOfBirth: moment(value.dateOfBirth).format("YYYY-MM-DD")
     };
     console.log(data);
     await dispatch(signUp(data));
     if(success){
      alert('đăng ký thành công')
      form.resetFields();
     }
    //  await dispatch(getAllStocks());
    //  setOpen(false);
   };

   const initilizerValueForm = {
     cccd: '',
     firstName: '',
     lastName: '',
     dateOfBirth: '',
     sex: '',
     address: '',
     phoneNumber: '',
     email: '',
     username: '',
     password: ''
   };

  return (
    <Form
      name='basic'
      form={form}
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={initilizerValueForm}
      onFinish={onFinish}
      autoComplete='off'
    >
      <Form.Item
        label='Họ'
        name='firstName'
        style={{
          textAlign: 'center',
        }}
        rules={[
          {
            required: true,
            message: 'Họ không được để trống!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Tên'
        name='lastName'
        style={{
          textAlign: 'center',
        }}
        rules={[
          {
            required: true,
            message: 'Tên không được để trống!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Ngày sinh'
        name='dateOfBirth'
        style={{
          textAlign: 'center',
        }}
        rules={[
          {
            required: true,
            message: 'Ngày sinh không được để trống!',
          },
        ]}
      >
        <Input type='date' />
      </Form.Item>
      <Form.Item
        label='Giới tính'
        name='sex'
        style={{
          textAlign: 'center',
        }}
        rules={[
          {
            required: true,
            message: 'Giới tính không được để trống!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Địa chỉ'
        name='address'
        style={{
          textAlign: 'center',
        }}
        rules={[
          {
            required: true,
            message: 'Địa chỉ không được để trống!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Số điện thoại'
        name='phoneNumber'
        style={{
          textAlign: 'center',
        }}
        rules={[
          {
            required: true,
            message: 'Số điện thoại không được để trống!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='CCCD/CMND'
        name='cccd'
        style={{
          textAlign: 'center',
        }}
        rules={[
          {
            required: true,
            message: 'CCCD/CMND không được để trống!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Email'
        name='email'
        style={{
          textAlign: 'center',
        }}
        rules={[
          {
            required: true,
            message: 'Email không được để trống!',
          },
        ]}
      >
        <Input type='email' />
      </Form.Item>
      <Form.Item
        label='Tài khoản'
        name='username'
        style={{
          textAlign: 'center',
        }}
        rules={[
          {
            required: true,
            message: 'Tài khoản không được để trống!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Mật khẩu'
        name='password'
        style={{
          textAlign: 'center',
        }}
        rules={[
          {
            required: true,
            message: 'Mật khẩu không được để trống!',
          },
        ]}
      >
        <Input type='password' />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 20,
          span: 4,
        }}
        className='text-right'
      >
        <Button type='primary' htmlType='submit'>
          Đăng ký
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;
