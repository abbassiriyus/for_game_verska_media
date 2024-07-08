import React from 'react';
import header_right from '../img/Group 4.svg';
import header_left from '../img/Group 4 (1).svg';
import header_home_button from '../img/Vector.svg'
import header_lenta_first from '../img/Vector (1).svg'
import header_lenta__second from '../img/Vector (2).svg'
import header_lenta__three from '../img/Vector (3).svg'
import header_lenta__four from '../img/Vector (4).svg'
import header__rectangle_button from "../img/Vector (5).svg"
import game_ball from "../img/bot.svg"
import patron  from "../img/Group 11.svg"
import Game__gun from "../img/c70bd21f0d260b05052d1e3efdda726d.png"
import Game__time_img from '../img/Vector 6.svg'
import Game__time_img_right from "../img/Vector (6).svg"
import Game__time_img_left from "../img/Vector (7).svg"


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
        <h1 className='Game__header__right__h1'>Меню</h1>

      </div>




     </header>
     <div className="Game__time">
      <div className="Game__time__credits">
      <h1 className='Game__time__credits__h1'>CREDITS</h1>
     <img src={Game__time_img} alt="" className="Game__time__backImg" />
      <img src={Game__time_img_left} alt="" className="Game__time__credits__rigthLine" />
      <img src={Game__time_img_right} alt="" className="Game__time__credits__leftLine" />
      </div>
     </div>
     <div className="game_body">
 <img src={game_ball} alt='' className="Game__bot" />
<img src={patron} alt="" className="Game__patron" />
<img src={Game__gun} alt="" className='Game__gun' /> 
</div>

    </div>
  );
}

export default Game;
