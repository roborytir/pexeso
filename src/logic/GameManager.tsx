import React, { useState } from 'react';
import CardContainer from '_Base/containers/CardContainer/CardContainer';
import GameOver from '_Base/containers/GameOver/GameOver';
import MainMenu from '_Base/containers/MainMenu/MainMenu';

export const GameManager = () => {
    const [ numberOfSets, setNumberOfSets ] = useState(3);
    const [ numberOfColors, setNumberOfColors ] = useState(3);
    const [ gameState, setgameState ] = useState<GameState>('menu');

    return (
        <div>
            {gameState === 'menu' && (
                <MainMenu onGameStart={(sets, colors)=>{
                    setNumberOfSets(sets); setNumberOfColors(colors); setgameState('playing');
                }} />
            ) }
            {gameState === 'playing' && (
                <>
                    <button
                        style={{
                            position: 'absolute', top: '1rem', left: '1rem'
                        }}
                        onClick={()=> setgameState('menu')}
                    >
                        Main Menu
                    </button>
                    <CardContainer
                        sets={numberOfSets}
                        colors={numberOfColors}
                        onGameOver={()=> {setgameState('gameover');}}
                    />
                </>
            )}
            {gameState === 'gameover' && (
                <GameOver onBackToMainMenu={()=>{setgameState('menu');}} onGameReset={()=>{setgameState('playing');}}/>
            )}
        </div>
    );

};