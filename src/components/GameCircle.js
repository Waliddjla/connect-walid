import React from 'react';
import '../Game.css';




const GameCircle = ({id, children, className, onCircleClicked}) => {
  
  return (
    <div className={`gamecircle ${className}`} onClick={() => onCircleClicked(id)}>
    {children}
    </div>
  )
}

export default GameCircle;