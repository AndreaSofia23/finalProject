/* eslint-disable max-len */
import { Layout } from 'antd';
import React, { useEffect } from 'react';
import './LayoutHome.css';
import logo from '../../images/funkoLogo.png';
import Login from '../Login/Login';
import FooterContact from '../FooterContact/FooterContact';
import FunkosInformation from '../FunkosInformation/FunkosInformation';
import { IsLoggedInProvider } from '../../context/LoginContext';
import { HomeOutlined } from '@ant-design/icons'
import NavPage from '../NavPage/NavPage';
const { Header, Content, Footer , } = Layout;

const LayoutHome = () => {
  useEffect(()=> {
  

  })
  return (
    <IsLoggedInProvider>
      <Layout>
        <Header
          style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%',
            background:'#68b38f'
          }}
        >
          <div
            style={{ 
              display: 'flex',
              justifyContent: 'space-between' 
            }}
          >
            <div style={{
            }}>
            <a href="/"><img
              src={logo}
              height="20%"
              className="logo"
              alt="Logo Funko Pop"
              style={{
                paddingBottom: '0.5em'
              }}
            />
            </a>
            <a style={{
              color: '#a7ddc6',
              fontSize: '1.2em',
              margin: '1em'
            }}href="/"><HomeOutlined />HOME</a>

            <NavPage/>
            
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
            <FunkosInformation />
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
