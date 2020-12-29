import React from 'react';
import { useDispatch } from 'react-redux';
import { changeGameStateAction } from '_Base/redux/pexesoActions';
import css from './GameOver.css';

export const GameOver = () => {
    const dispatch = useDispatch();

    return (
        <div className={css.gameOver}>
            <h1>Congratulations</h1>
            <button onClick={()=>{dispatch(changeGameStateAction('menu'));}}>Main Menu</button>
            <button onClick={()=>{dispatch(changeGameStateAction('playing'));}}>Play Again</button>
        </div>
    );
};

export default GameOver;
