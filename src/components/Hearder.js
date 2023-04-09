import React from 'react';
import { Game_State_Playin, Game_State_win } from '../Constant';

const Hearder = ({gameState, currentPlayer, winPlayer}) => {
  const renderLabel = () => {
    switch (gameState) {
      case Game_State_Playin:
        return <div>Player {currentPlayer} turn </div>
        case Game_State_win:
          return <div>Player {winPlayer} wins </div>
          default :
    }
  }
  return (
    <div className="panel header">
        <div className="header-text">{renderLabel()}</div>
    </div>
  );
};

export default Hearder;