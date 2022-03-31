import React from 'react';
import { Card } from 'antd';
import './CardsMenu.css';
import supermanImage from '../../images/superman.png';
import usuarioImage from '../../images/usuario.webp';
const { Meta } = Card;

const CardsMenu = () => {
  return (
    <div className="cardContainer">
      <div className="menuCard">
        <a href="http://localhost:3000/users">
          <Card
            hoverable
            style={{ width: 240 }}
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
            style={{ width: 240 }}
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
