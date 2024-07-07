import React from 'react';
import header_right from '../img/Group 4.svg';
import header_left from '../img/Group 4 (1).svg';
import header_home_button from '../img/Vector.svg'
import header_lenta_first from '../img/Vector (1).svg'
import header_lenta__second from '../img/Vector (2).svg'
import header_lenta__three from '../img/Vector (3).svg'
import header_lenta__four from '../img/Vector (4).svg'
import header__rectangle_button from "../img/Vector (5).svg"
import '../css/Game.css';

function Game() {
  return (
    <div className="Game">
     <header className="Game__header">
      <div className="Game__header__left">
        <img className='Game__header__left__image' src={header_right} alt="" />
        <div className="Game__header__left__button">
         <img src={header_home_button} alt="" className="Game__header__button" />
         <img src={header_lenta_first} alt="" className="Game__header__lenta__first" />
         <img src={header_lenta__second} alt="" className="Game__header__lenta__second" />
         <img src={header_lenta__three} alt="" className="Game__header__lenta__three" />
         <img src={header_lenta__four} alt="" className="Game__header__lenta__four" />
        </div>
        <h1 className='Game__header__left__h1'>домой</h1>
      </div>
      <div className="Game__header__right">
        <img className='Game__header__right__image' src={header_left} alt="" />
        <div className="Game__header__right__button">
         <img src={header__rectangle_button } alt="" className="Game__header__button" />
         <img src={header_lenta_first} alt="" className="Game__header__lenta__first" />
         <img src={header_lenta__second} alt="" className="Game__header__lenta__second" />
         <img src={header_lenta__three} alt="" className="Game__header__lenta__three" />
         <img src={header_lenta__four} alt="" className="Game__header__lenta__four" />
        </div>
      </div>
     </header>
    </div>
  );
}

export default Game;
