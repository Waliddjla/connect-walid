import React from 'react';
import { Game_State_Playin } from '../Constant';

const Footer = ({onNewgameClick, OnSugestClick,gameState}) => {
  const renderButtons = () => {
  if(gameState === Game_State_Playin){
    return <button onClick={OnSugestClick}>Suggest</button>
  }
  return <button onClick={onNewgameClick}>New Game</button>
}
  return (
    <div className="panel footer">
      {renderButtons()}
    </div>
  );
};

export default Footer;