import React from 'react';
import { useSelector } from 'react-redux';
import CardContainer from './containers/CardContainer/CardContainer';
import MainMenu from './containers/MainMenu/MainMenu';

export const App = () => {

    const gameState = useSelector((state:IReduxState)=> state.gameState);

    return (
        <div>
            {gameState === 'menu' && (
                <MainMenu />
            ) }
            {gameState === 'playing' && (
                <CardContainer />
            )}
        </div>
    );
};

export default App;
