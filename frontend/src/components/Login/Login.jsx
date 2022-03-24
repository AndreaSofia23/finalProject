import React, {useState} from 'react';
import {Modal, Button} from 'antd';
import './Login.css';
import FormLogin from '../FormLogin/FormLogin';

const Login = () => {
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

  return (
    <div className='loginModal'>
      <Button type="primary" onClick={showModal}>
        Login
      </Button>
      <Modal
        title="Login"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}>
        <FormLogin/>
      </Modal>
    </div>
  );
};

export default Login;
