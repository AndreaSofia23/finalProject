import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';
import LoginResult from '../LoginResult/LoginResult';
import LoginResultInvalid from '../LoginResultInvalid/LoginResultInvalid';
import { useContext } from 'react';
import LoginContext from '../../context/LoginContext';
const FormLogin = () => {
  const { setUser, token, setToken } = useContext(LoginContext);
  const [stateOfLogin, setStateOfLogin] = useState(null);

  const restartLogin = () => {
    setStateOfLogin(null);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    axios
      .post('http://localhost:8080/api/users/logIn', values)

      .then(function (response) {
        console.log(values);
        console.log(response);
        console.log(response.data.mensaje);
        if (response.data.mensaje === 'Autenticación correcta') {
          console.log(values);
          setUser(values);
          console.log(response.data.token);
          setToken(response.data.token);
          setStateOfLogin('success');
        }
        if (response.data.mensaje === 'Credenciales Invalidas') {
          setStateOfLogin('failed');
        }
      })
      .catch(function (error) {
        console.log('error');
        console.log(error);
      });
  };

  useEffect(() => {
    window.localStorage.setItem('token', JSON.stringify(token));
  }, [token]);
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (stateOfLogin === null) {
    return (
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          values="values"
          label="Username"
          name="userName"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" style={{background: '#22563e',borderColor: '#a7ddc6'}}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
  if (stateOfLogin === 'success') {
    return <LoginResult />;
  }
  if (stateOfLogin === 'failed') {
    return <LoginResultInvalid restartLogin={restartLogin} />;
  }
};

export default FormLogin;
