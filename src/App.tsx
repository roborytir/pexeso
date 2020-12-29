import React from 'react';
import { useSelector } from 'react-redux';
import CardContainer from './containers/CardContainer/CardContainer';
import GameOver from './containers/GameOver/GameOver';
import MainMenu from './containers/MainMenu/MainMenu';

export const App = () => {

    const gameState = useSelector((state:IReduxState)=> state.gameState);

    return (
        <>
            {gameState === 'menu' && (
                <MainMenu />
            ) }
            {gameState === 'playing' && (
                <CardContainer />
            )}
            {gameState === 'gameover' && (
                <GameOver />
            )}
        </>
    );
};

export default App;
