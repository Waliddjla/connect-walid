import React, {useEffect, useState} from 'react';
import '../Game.css';
import GameCircle from './GameCircle';
import Hearder from './Hearder';
import Footer from './footer';
import { isWinner, isDraw } from '../helper';
import { Game_State_Playin,Game_State_win, NO_player, PLAYER_1, PLAYER_2, NO_circle, Game_State_Drow } from '../Constant';

const Gamebored = () => {
    const [gameBord, setGameBored] = useState(Array(16).fill(NO_player));
    const [currentPlayer, setcurrentPlayer] = useState(PLAYER_1);
    const [gameState, setgameState] = useState(Game_State_Playin);
    const [winPlayer, setwinPlayer] = useState(NO_player);

    console.log(gameBord);

    useEffect(() => {
        initGame();
    }, []);

    const initGame = () => {
        setGameBored(Array(16).fill(NO_player));
        setcurrentPlayer(PLAYER_1);
    }

    const initBord = () => {
        const circles = [];
        for (let i = 0; i < NO_circle; i++) {
           circles.push(renderCircle(i)) ;
         }
         return circles;

    }

    const circleClicked = (id) => {
        console.log('circle : ' + id);

        if (isWinner(gameBord, id, currentPlayer)) { 
            setgameState(Game_State_win);
            setwinPlayer(currentPlayer);
        }

        if (isDraw(gameBord, id, currentPlayer)) { 
            setgameState(Game_State_Drow);
            setwinPlayer(NO_player);
        }

        
        setGameBored(prev => {
            return prev.map((circle, pos) => {
                if (pos === id) return currentPlayer;
                return circle;
            })
        })

      
        setcurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);

        console.log(gameBord);
        console.log(currentPlayer);
        }

    const renderCircle = (id)=> {

        return <GameCircle key={id} 
        id={id} 
        className={`player_${gameBord[id]}`} 
        onCircleClicked={circleClicked}/> 
    }

    return (
        <> 
        <Hearder gameState= {gameState} currentPlayer={currentPlayer} winPlayer={winPlayer} />
        <div className= "gamebord">
        {initBord()}
    </div>
    <Footer onClickEvent = {initGame} />
    </>
    )
}

export default Gamebored;