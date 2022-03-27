import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from './Pricing';
import Cards from './Cards';
import './Home.css';


function Home() {
  return (

<>
      <HeroSection {...homeObjOne} />
      <Cards/>
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>


//       <div>
    

//     <img className='img2'
    
//       src="images/back2.png"
//       alt="Canvas Logo"
//     />
// </div>


  );
}

export default Home;
