import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const CreateUserForm = props => {
  const { onFinish, handlerCreateUser } = props;
  return (
    <>
       <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            min: 3,
            max: 100,
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'username']}
        label="Username"
        rules={[
          {
            min: 3,
            max: 10,
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'password']}
        label="Password"
        rules={[
          {
            min: 3,
            max: 10,
            required: true,
          },
        ]}
      >
        <Input.Password
      placeholder="input password"
      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 15 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
  );
}


export default CreateUserForm;