import React from 'react';

import {
  WhatsAppOutlined,
  FacebookOutlined,
  InstagramOutlined,
  GithubOutlined,
} from '@ant-design/icons';

const FooterContact = () =>{
  return (<div>
    <a href='https://www.whatsapp.com/?lang=es'>
      <WhatsAppOutlined style={{fontSize: '2em', padding: "0.5em"}}/>
    </a>
    <a href='https://es-la.facebook.com/'>
      <FacebookOutlined style={{fontSize: '2em', padding: "0.5em"}}/> 
    </a>
    <a href='https://www.instagram.com/'>
      <InstagramOutlined style={{fontSize: '2em', padding: "0.5em"}}/>
    </a>
    <a href='https://github.com/AndreaSofia23/finalProject'>
      <GithubOutlined style={{fontSize: '2em', padding: "0.5em"}}/>
    </a>
    

  </div>);
};
export default FooterContact;
