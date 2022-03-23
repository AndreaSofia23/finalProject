/* eslint-disable max-len */
import {Layout} from 'antd';
import React from 'react';
import './LayoutHome.css';
import logo from '../../images/funkoLogo.png';
import Login from '../Login/Login';
import estilo from './estilo.less';
import FooterContact from '../FooterContact/FooterContact';


const {Header, Content, Footer} = Layout;

const LayoutHome = () =>{
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
            <Login />
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
          <h1>¿Que son los Funkos?</h1>
          <h3>La marca POP! de figuras es la más importante de Funko y su estilo está basado en el concepto chibi japonés, de estilo aniñado, de detalles simples. Las figuras, con un tamaño de unos nueve o diez centímetros generalmente y un coste aproximado en Estados Unidos desde nueve o diez dólares, tienen como otras características: unos cuerpos reducidos y cabezas extra grandes en comparación con el tamaño de todo el cuerpo, además de unos ojos grandes negros sin expresión, una nariz triangular minúscula y generalmente no tienen boca (dependiendo del personaje). El diseño peculiar de estas figuras, con su propia propiedad intelectual, está considerado como uno de los grandes valores de Funko.</h3>
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
