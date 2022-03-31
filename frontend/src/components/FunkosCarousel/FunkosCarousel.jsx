import { Carousel } from 'antd';
import React from 'react';  
import harryPotterImage from '../../images/HarryPotter_Harry_POP.webp';
import lokisImage from '../../images/Lokis.jpg'
import lucaImage from '../../images/luca-funko.jpg'
import freddieImage from '../../images/freddieMercury.jpg'
import thorImage from '../../images/thor.png'
import spiderManImage from '../../images/spiderMan.webp'
import dobbyImage from '../../images/dobby.webp'
import jonnyImage from '../../images/JohnyBravo.webp'
import harryBoxImage from '../../images/HarryPotterBox.webp'


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
      <img src={freddieImage} width ="90%"alt='FreddieMercury'/>
      </div>
      <div>
      <img src={thorImage} width ="90%"alt='Thor'/>
      </div>
      <div>
      <img src={dobbyImage} width ="90%"alt='dobby'/>
      </div>
      <div>
      <img src={spiderManImage} width ="90%"alt='spiderMan'/>
      </div>
      <div>
      <img src={harryBoxImage} width ="90%"alt='harryPotterBox'/>
      </div>
      <div>
      <img src={jonnyImage} width ="90%"alt='JohnyBravo'/>
      </div>
      <div>
        <h3 ><img src={lucaImage} width ="90%"alt='luca'/>.</h3>
      </div>

    </Carousel>
  );

}
export default FunkosCarousel;



