import React from 'react';
import FunkosCarousel from '../FunkosCarousel/FunkosCarousel';
import './FunkosInformation.css';
import popLogo from '../../images/popLogo.jpg';
import CardsMenu from '../CardsMenu/CardsMenu';
import {Routes, Route} from 'react-router-dom'
import CrudUsers from '../CrudUsers/CrudUsers'
import FunkosPage from '../FunkosPage/FunkosPage'

const FunkosInformation = () => {


  return window.localStorage.getItem('token') &&
    window.localStorage.getItem('token') !== 'null' ? (
    <Routes>
          <Route path={'/'} element={<CardsMenu />}/>
          <Route path={'/users'} element={<CrudUsers/>}/>
          <Route path={'/funkos'} element={<FunkosPage />} />
    </Routes>
  ) : (
    <>
      <div className="titleFunkosInformationBox">
        <h1 className="titleFunkosInformation">¿Que son los Funkos?</h1>
        <img
          className="titleFunkosInformation"
          id="logoPop"
          src={popLogo}
          alt="pop logo"
        />
      </div>
      <div className="funkosInformation">
        <h3 className="descriptiveText">
          La marca POP! de figuras es la más importante de Funko y su estilo
          está basado en el concepto chibi japonés, de estilo aniñado, de
          detalles simples. Las figuras, con un tamaño de unos nueve o diez
          centímetros generalmente y un coste aproximado en Estados Unidos desde
          nueve o diez dólares, tienen como otras características: unos cuerpos
          reducidos y cabezas extra grandes en comparación con el tamaño de todo
          el cuerpo, además de unos ojos grandes negros sin expresión, una nariz
          triangular minúscula y generalmente no tienen boca (dependiendo del
          personaje). El diseño peculiar de estas figuras, con su propia
          propiedad intelectual, está considerado como uno de los grandes
          valores de Funko.
        </h3>
        <div className="descriptiveImages">
          <FunkosCarousel />
        </div>
      </div>
    </>
  );
};

export default FunkosInformation;
