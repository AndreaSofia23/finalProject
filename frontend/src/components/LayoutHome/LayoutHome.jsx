/* eslint-disable max-len */
import { Layout } from 'antd';
import React, { useEffect } from 'react';
import './LayoutHome.css';
import logo from '../../images/funkoLogo.png';
import Login from '../Login/Login';
import FooterContact from '../FooterContact/FooterContact';
import FunkosInformation from '../FunkosInformation/FunkosInformation';
import { IsLoggedInProvider } from '../../context/LoginContext';
import {ArrowLeftOutlined} from '@ant-design/icons'
import LoginContext from '../../context/LoginContext';
import { useContext } from 'react';
const { Header, Content, Footer } = Layout;

const LayoutHome = () => {
  const { user } = useContext(LoginContext);
  useEffect(()=>{

  },[user])
  return (
    <IsLoggedInProvider>
      <Layout>
        <Header
          style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%',
            background:'#68b38f',
          }}
        >
          <div
            style={{ 
              display: 'flex',
              justifyContent: 'space-between' 
            }}
          >
            <div>
            <a href="/"><ArrowLeftOutlined style={{ color: '#22563e' }}/></a>
            <a href="/"><img
              src={logo}
              width="20%"
              className="logo"
              alt="Logo Funko Pop"
            />
            </a>
            
            </div>
            <div >
              <Login />
            </div>
          </div>
        </Header>
        <Content
          className="site-layout"
          style={{
            padding: '0 50px',
            marginTop: 64,
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 450,
            }}
          >
            <FunkosInformation  />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            background:'#a7ddc6',
          }}
        >
          Contact Us
          <FooterContact />
        </Footer>
      </Layout>
    </IsLoggedInProvider>
  );
};
export default LayoutHome;
