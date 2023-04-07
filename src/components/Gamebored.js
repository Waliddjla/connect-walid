import React from 'react';
import GameCircle from './GameCircle';


const Gamebored = () => {
    return (
        <div style={{display: 'grid', gridTemplateCloumns:'1fr 1fr 1fr 1fr',  gridTemplateRows:'1fr 1fr 1fr 1fr'}}>
    <GameCircle id={1} color="red"> 
        <span style={{ color: 'red' }}>Red</span>
    </GameCircle>
    <GameCircle id={2} color="blue"> 
    <span style={{ color: 'blue' }}>Blue</span>
    </GameCircle>
    <GameCircle id={3} color="red">
    <span style={{ color: 'red' }}>Red</span>
    </GameCircle>
    <GameCircle id={4} color="blue">
    <span style={{ color: 'blue' }}>Blue</span>
    </GameCircle>
    <GameCircle id={5} color="red">
    <span style={{ color: 'red' }}>Red</span>
    </GameCircle>
    <GameCircle id={6} color="blue">
    <span style={{ color: 'blue' }}>Blue</span>
    </GameCircle>
    <GameCircle id={7} color="red">
    <span style={{ color: 'red' }}>Red</span>
    </GameCircle>
    <GameCircle id={8} color="blue">
    <span style={{ color: 'blue' }}>Blue</span>
    </GameCircle>
    
    </div>
    )
}

export default Gamebored;