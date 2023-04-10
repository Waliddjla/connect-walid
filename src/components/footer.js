import React from 'react';

const Footer = ({onNewgameClick, OnSugestClick}) => {
  return (
    <div className="panel footer">
        <button onClick={onNewgameClick}>New Game</button>
        <button onClick={OnSugestClick}>Suggest</button>
    </div>
  );
};

export default Footer;