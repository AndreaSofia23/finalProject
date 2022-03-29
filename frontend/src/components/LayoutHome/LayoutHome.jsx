/* eslint-disable max-len */
import {Layout} from 'antd';
import React, { useState } from 'react';
import './LayoutHome.css';
import logo from '../../images/funkoLogo.png';
import Login from '../Login/Login';
import estilo from './estilo.less';
import FooterContact from '../FooterContact/FooterContact';
import FunkosInformation from '../FunkosInformation/FunkosInformation';


const {Header, Content, Footer} = Layout;

const LayoutHome = () =>{

 const [isLoggedIn, setIsLoggedIn] = useState(false)

 const loginHandler = () => setIsLoggedIn(!isLoggedIn);

  return (
    <Layout>
      <Header style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%'}}
      className={estilo.customHeader}>
        <div className="headerBar" style={{display: 'flex', justifyContent: 'space-between'}}>
          <img src={logo} width ="64px" className='logo' alt='Logo Funko Pop'/>
          <div className="loginModal" >
            <Login sesionState={isLoggedIn} booleanLoginHandler={loginHandler}/>
          </div>
        </div>
      </Header>
      <Content className="site-layout" style={{
        padding: '0 50px',
        marginTop: 64,
      }}>

        <div className="site-layout-background" style={{
          padding: 24,
          minHeight: 380,
        }}>
          <FunkosInformation isLoggedIn={isLoggedIn}/>
        </div>
      </Content>
      <Footer style={{
        textAlign: 'center',
      }}>Contact Us
        <FooterContact/>
      </Footer>
    </Layout>
  );
};
export default LayoutHome;
