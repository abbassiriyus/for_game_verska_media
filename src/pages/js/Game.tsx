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
import Game__gun from "../img/gamer hand.svg"
import Game__time_img from '../img/Vector 6.svg'
import Game__time_img_right from "../img/Vector (6).svg"
import Game__time_img_left from "../img/Vector (7).svg"
import Game__time__record from "../img/Vector (9).svg"
import Game_vektor_line_left from "../img/Vector (4).png"
import Game_vektor_line_right from "../img/Vector (5).png"
import top_rekord from "../img/Vector (8).svg"  
import bottom_el_game from "../img/el.svg"
import sloy_joistik from "../img/Слой 2.svg"
import arrow_joistik from "../img/Vector (11).svg"
import box_shadow_for_joistik from "../img/Ellipse 3.svg"
import middle_joistik from "../img/Ellipse 4.svg"
import tap_svg from "../img/tap.svg"
import bottom_level_back from "../img/Group 4 (3).svg"
import top_grid_first_img from "../img/1.svg"
import top_grid_second_img from "../img/2.svg"
import image_for_back from "../img/Rectangle 92.svg"
import new_gun from "../img/new 2 4 (1).svg"
import el_handle from "../img/el (1).svg"
import el_handle_second from "../img/el (2).svg"
import el_handle_back_first from "../img/Rectangle 18.svg"
import el_handle_back_second from "../img/Rectangle 18 (1).svg"
import left_handle from "../img/left.svg"
import right_handle from "../img/right.svg"
import '../css/Game.css';
import line_viability from "../img/line.png"
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
<div className="bottom_line_light"></div>

      </div>
      <div className="Game__time__record">
        <img className='record_game' src={Game__time__record} alt="" />
        <span>1,235,954</span>
        <img className='Game_vektor_line_left' src={Game_vektor_line_left} alt="" />
        <img className='Game_vektor_line_right' src={Game_vektor_line_right} alt="" />
        <img className='top_rekord' src={top_rekord} alt="" />
        <img className='header_lenta_first' src={header_lenta_first} alt="" />
        <img className='header_lenta__second' src={header_lenta__second} alt="" />
        <img className='header_lenta__three' src={header_lenta__three} alt="" />
        <img className='header_lenta__four' src={header_lenta__four} alt="" />
        <img className='bottom_el_game' src={bottom_el_game} alt="" />
      </div>
     </div>
     <div className="game_body">
 <img src={game_ball} alt='' className="Game__bot" />
<img src={patron} alt="" className="Game__patron" />
<img src={Game__gun} alt="" className='Game__gun' />
<div  className="click_joistik">
  <img className='sloy_joistik' src={sloy_joistik} alt="" />
  <img className='box_shadow_for_joistik' src={box_shadow_for_joistik} alt="" />
  <img className='arrow_joistik' src={arrow_joistik} alt="" />
  <img className='arrow_joistik_second' src={arrow_joistik} alt="" />
  <img className='arrow_joistik_third' src={arrow_joistik} alt="" />
  <img className='arrow_joistik_four' src={arrow_joistik} alt="" />
  <img className='middle_joistik' src={middle_joistik} alt="" />
</div> 
<img className='tap_svg' src={tap_svg} alt="" />
</div>


<div className="level_game">
  <img className='bottom_level_back' src={bottom_level_back} alt="" />
  <div className="game_grid">
<div className="game_grid_first">
  <div className="handle_first_div">
    <img className='el_handle' src={el_handle} alt="" />
    <img className='el_handle_back_first' src={el_handle_back_first} alt="" />
  <span>обойма:</span>
  <h3>1234</h3>
  </div>
</div>
<div className="game_grid_second">
  <img className='top_grid_first_img' src={top_grid_first_img} alt="" />
  <img className='top_grid_second_img' src={top_grid_second_img} alt="" />
  <img className='image_for_back' src={image_for_back} alt="" />
  <img className='new_gun' src={new_gun} alt="" />
  <div className="line_shadow_green"></div>
  <div className="line_shadow_green2"></div>
</div>
<div className="game_grid_third">
<img className='el_handle_back_second' src={el_handle_back_second} alt="" />
<img className='el_handle_second' src={el_handle_second} alt="" />
<span>мощность:</span>
<h3>1234</h3>
</div>

  </div>
  <div className="viability">
    <img className='left_handle' src={left_handle} alt="" />
    <div className="line_for_viability">
      <img className='line_viability' src={line_viability} alt="" />
      <div className="red_yellow_green">
      <div style={{background:'#D22439',border:'1px solid #D22439 '}}  className="red"></div>
      <div style={{background:'#D22439',border:'1px solid #D22439'}}  className="red"></div>
      <div style={{background:'#D22439',border:'1px solid #D22439'}}  className="red"></div>
      <div style={{background:'#D22439',border:'1px solid #D22439'}}  className="red"></div>
      <div style={{background:'#D22439',border:'1px solid #D22439'}}  className="red"></div>

      <div style={{background:'#D25831',border:'1px solid #D25831'}} className="red"></div>
      <div style={{background:'#D25831',border:'1px solid #D25831'}} className="red"></div>
      <div style={{background:'#D25831',border:'1px solid #D25831'}} className="red"></div>
      <div style={{background:'#D25831',border:'1px solid #D25831'}} className="red"></div>
      <div style={{background:'#D25831',border:'1px solid #D25831'}} className="red"></div>
      
      <div style={{background:'#EB9319',border:'1px solid #EB9319'}} className="red"></div>
      <div style={{background:'#EB9319',border:'1px solid #EB9319'}} className="red"></div>
      <div style={{background:'#EB9319',border:'1px solid #EB9319'}} className="red"></div>
      <div style={{background:'#EB9319',border:'1px solid #EB9319'}} className="red"></div>
      <div style={{background:'#EB9319',border:'1px solid #EB9319'}} className="red"></div>

      <div style={{background: '#FFD233',border:'1px solid #FFD233'
}} className="red"></div>
      <div style={{background: '#FFD233',border:'1px solid #FFD233'
}}  className="red"></div>
      <div  className="red"></div>
      <div className="red"></div>
      <div className="red"></div>
      <div className="red"></div>
      <div className="red"></div>
      <div className="red"></div>
      <div className="red"></div>
      <div className="red"></div>
        
      </div>
    </div>
    <img className='right_handle' src={right_handle} alt="" />
  </div>
</div>

    </div>
  );
}

export default Game;
