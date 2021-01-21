import React from 'react';
import css from './GameOver.css';

interface IGameOverProps{
    onBackToMainMenu: () => void;
    onGameReset: () => void;
}

export const GameOver = ({ onBackToMainMenu, onGameReset }:IGameOverProps) => {

    return (
        <div className={css.gameOver}>
            <h1>Congratulations</h1>
            <button onClick={()=>{onBackToMainMenu();}}>Main Menu</button>
            <button onClick={()=>{onGameReset();}}>Play Again</button>
        </div>
    );
};

export default GameOver;
