import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import FormLogin from '../FormLogin/FormLogin';
import LoginContext from '../../context/LoginContext';
import { useContext } from 'react';

const Login = () => {
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
    window.location.reload(true);

  };

  const LogOut = () => {
    setIsLoggedIn(null);
    setUser(null);
    setToken(null);
    window.localStorage.removeItem('token');
    window.location.reload(true);
  };

  if (
    window.localStorage.getItem('token') &&
    window.localStorage.getItem('token') !== 'null'
  ) {
    
    return (
      <>
        
        <Button 
          onClick={LogOut}
          style={{
            background: '#a7ddc6',
            borderColor: '#22563e',
          }}
        >
          Logout
        </Button>
      </>
    );
  } else {
    return (
      <>
        <Button type="primary" onClick={showModal} style={{background: '#22563e',borderColor: '#a7ddc6'}}>
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
