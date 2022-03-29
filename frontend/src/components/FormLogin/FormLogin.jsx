import React, { useState } from 'react'
import axios from 'axios'
import { Form, Input, Button } from 'antd';
import LoginResult from '../LoginResult/LoginResult';
import LoginResultInvalid from '../LoginResultInvalid/LoginResultInvalid'

const FormLogin = (props) => {

  const [stateOfLogin, setStateOfLogin]= useState(0);

  const successfulLogin = () => { setStateOfLogin(1) };
  const failedLogin = () => { setStateOfLogin(2) };
  const restartLogin = () =>{ setStateOfLogin(0) };

  const onFinish = (values) => {
    console.log('Success:', values);
    axios.post('http://localhost:8080/api/users/logIn', values)

    .then(function (response) {
      console.log(values)
      console.log(response)
      console.log(response.data.mensaje);
      if(response.data.mensaje === "Autenticación correcta"){
        successfulLogin();
        
      
      }
      if(response.data.mensaje === "Credenciales Invalidas"){
        
        
        failedLogin();
      
      }
      
      
    })
    .catch(function (error) {
      console.log("error");
      console.log(error);
    });

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  



  if (stateOfLogin===0){
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      
    );
  }
  if(stateOfLogin === 1 ){
    return(<LoginResult booleanLoginHandler = {props.booleanLoginHandler}/>)
  }
  if(stateOfLogin === 2 ){
    return(<LoginResultInvalid  restartLogin = {restartLogin}/>)
  }
};




export default FormLogin;