import React from 'react';
import { Form, Input, Button } from 'antd';

const UserForm = (props) => {
  const onFinish = (values) => {
    values.firstName = values.firstName.trim();
    values.lastName = values.lastName.trim();
    values.userName = values.userName.trim();
    values.city = values.city.trim();
    values.email = values.email.trim();

    props.createUser(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="Create User"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[
          {
            type: 'string',
            message: 'El nombre tiene que ser un String',
          },
          {
            required: true,
            message: 'El nombre es un campo requerido',
          },
          {
            pattern: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
            message: 'El nombre no acepta simbolos',
          },
          {
            whitespace: true,
            message: 'El nombre no puede estar vacío',
          },
          {
            min: 3,
            message: 'El nombre debe tener como minimo 3 carácteres',
          },
          {
            max: 12,
            message: 'El nombre debe tener como maximo 12 caracteres',
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[
          {
            type: 'string',
            message: 'El last name tiene que ser un String',
          },
          {
            required: true,
            message: 'El last name es un campo requerido',
          },
          {
            pattern: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
            message: 'El last name no acepta simbolos',
          },
          {
            whitespace: true,
            message: 'El last name no puede estar vacío',
          },
          {
            min: 3,
            message: 'El last name debe tener como minimo 3 carácteres',
          },
          {
            max: 12,
            message: 'El last name debe tener como maximo 12 caracteres',
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Username"
        name="userName"
        rules={[
          {
            type: 'string',
            message: 'El username tiene que ser un String',
          },
          {
            required: true,
            message: 'El username es un campo requerido',
          },
          {
            pattern: /^[A-Za-z][A-Za-z0-9_]+$/,
            message:
              'El usuario debe comenzar con una letra y puede ser alphanumerico',
          },
          {
            min: 7,
            message: 'El username debe tener como minimo 7 carácteres',
          },
          {
            max: 12,
            message: 'El username debe tener como maximo 12 caracteres',
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            type: 'string',
            message: 'El password tiene que ser un String',
          },
          {
            required: true,
            message: 'El password es un campo requerido',
          },
          {
            pattern: /^[a-zA-Z0-9]{8,30}$/,
            message: 'El password debe ser alphanumerico',
          },
          {
            min: 8,
            message: 'El password debe tener como minimo 8 carácteres',
          },
          {
            max: 30,
            message: 'El password debe tener como maximo 30 caracteres',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="City"
        name="city"
        rules={[
          {
            required: true,
            message: 'Please input your city!',
          },
          {
            min: 3,
            message: 'City debe tener como minimo 3 caracteres',
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
          {
            type: 'email',
            message: 'Ingrese una direccion de correo válida',
          },
          {
            max: 30,
            message: 'El email debe tener como maximo 30 caracteres',
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;
