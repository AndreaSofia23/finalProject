import { Carousel } from 'antd';
import React from 'react';  
import harryPotterImage from '../../images/HarryPotter_Harry_POP.webp';
import lokisImage from '../../images/Lokis.jpg'
import lucaImage from '../../images/luca-funko.jpg'
import freddieImage from '../../images/freddieMercury.jpg'
import thor from '../../images/thor.png'
import spiderMan from '../../images/spiderMan.webp'


const FunkosCarousel = () =>{


  return(
    <Carousel autoplay>
      <div className='imagesCarousel'>
      <img src={harryPotterImage} width ="90%" alt='HarryPotter'/>
      </div>
      <div>
      <img src={lokisImage} width ="90%"alt='lokis'/>
      </div>
      <div>
      <img src={freddieImage} width ="90%"alt='luca'/>
      </div>
      <div>
      <img src={thor} width ="90%"alt='luca'/>
      </div>
      <div>
      <img src={spiderMan} width ="90%"alt='luca'/>
      </div>
      <div>
        <h3 ><img src={lucaImage} width ="90%"alt='luca'/>.</h3>
      </div>

    </Carousel>
  );

}
export default FunkosCarousel;



