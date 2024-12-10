import React from 'react';
import './services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './saeedcv.pdf';

const services = ()=> {

  return (
    <div className="services">
        {/*Left side*/}
        <div className="awesome">
            <span >My Awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit officiis dolorum.
            <br />
            is sit amet consectetur adipisicing
            </span>
            <a href={Resume} download>
            <button className='button s-button'>Download CV</button>
            </a>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>

         {/* Right side*/}
         <div className="cards">

          <div style={{left:"14rem"}}>
            <Card Emoji = {HeartEmoji}
            heading = {'Design'}
            detail = {'Figma, Skectch, Pohotoshop, Adobe , Adobe xd'}/>
            </div>
            {/*Second card*/}
            <div style={{top:"12rem", left:"-4rem"}}>
            <Card Emoji = {Glasses}
            heading = {'Developer'}
            detail = {'Html, Css, Javascript , React'}/>
            </div>
             {/*3rd card*/}
             <div style={{top:"19rem", left:"12rem"}}>
            <Card Emoji = {Humble}
            heading = {'UI/UX'}
            detail = {"Lorem ipsum dolor sit amet consectetur adipisicing elit officiis dolorum."}/>
            </div>
            <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default services
