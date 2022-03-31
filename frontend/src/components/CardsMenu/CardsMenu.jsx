import React from 'react';
import { Card } from 'antd';
import './CardsMenu.css';
import supermanImage from '../../images/superman.png';
import usuarioImage from '../../images/usuario.png';
const { Meta } = Card;

const CardsMenu = () => {
  const styleCard={ width: 240 ,padding:"1em"}
  return (
    <div className="cardContainer">
      <div className="menuCard">
        <a href="http://localhost:3000/users">
          <Card
            hoverable
            style={styleCard}
            cover={<img alt="example" src={usuarioImage} />}
          >
            <Meta title="Users" description="Users Management" />
          </Card>
        </a>
      </div>

      <div className="menuCard">
        <a href="http://localhost:3000/funkos">
          <Card
            hoverable
            style={styleCard}
            cover={<img alt="example" src={supermanImage} />}
          >
            <Meta title="Funkos" description="Funkos Management" />
          </Card>
        </a>
      </div>
    </div>
  );
};
export default CardsMenu;
