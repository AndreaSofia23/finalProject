import React, {useState} from 'react';
import {Modal, Button} from 'antd';
import './Login.css';
import FormLogin from '../FormLogin/FormLogin';

const Login = (props) => {
  

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

  if (props.sesionState) {
     return(<Button onClick={props.booleanLoginHandler}>Logout</Button>)
  }

  else{
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
        <FormLogin sesionState={props.sesionState} booleanLoginHandler={props.booleanLoginHandler}/>
      </Modal>
    </>
    );
  }
    
  
}


export default Login;
