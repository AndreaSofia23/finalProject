import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import './Login.css';
import FormLogin from '../FormLogin/FormLogin';
import LoginContext from '../../context/LoginContext';
import { useContext } from 'react';

const Login = (props) => {
  const { setIsLoggedIn, setToken, setUser } = useContext(LoginContext);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const LogOut = () => {
    setIsLoggedIn(null);
    setUser(null);
    setToken(null);
    window.localStorage.removeItem('token');
  };

  if (
    window.localStorage.getItem('token') &&
    window.localStorage.getItem('token') !== 'null'
  ) {
    return (
      <>
        <Button onClick={LogOut}>Logout</Button>
      </>
    );
  } else {
    return (
      <>
        <Button type="primary" onClick={showModal}>
          Login
        </Button>
        <Modal
          visible={isModalVisible}
          title="Login"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>,
          ]}
        >
          <FormLogin />
        </Modal>
      </>
    );
  }
};

export default Login;
