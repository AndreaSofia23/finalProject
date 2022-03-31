import React from 'react';

import {
  WhatsAppOutlined,
  FacebookOutlined,
  InstagramOutlined,
  GithubOutlined,
} from '@ant-design/icons';


const FooterContact = () =>{
  const styleItemsFooter = {fontSize: '2em', padding: "0.5em",color: '#68b38f'};
  return (<div>
    <a href='https://www.whatsapp.com/?lang=es'>
      <WhatsAppOutlined style={styleItemsFooter}/>
    </a>
    <a href='https://es-la.facebook.com/'>
      <FacebookOutlined style={styleItemsFooter}/> 
    </a>
    <a href='https://www.instagram.com/'>
      <InstagramOutlined style={styleItemsFooter}/>
    </a>
    <a href='https://github.com/AndreaSofia23/finalProject'>
      <GithubOutlined style={styleItemsFooter}/>
    </a>
    

  </div>);
};
export default FooterContact;
