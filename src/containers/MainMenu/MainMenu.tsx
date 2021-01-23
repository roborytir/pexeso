import React, { useState } from 'react';
import SetsChanger from '_Base/components/SetsChanger/SetsChanger';
import { cardSymbols, colorSet } from '_Base/logic/cardsData';
import css from './MainMenu.css';

interface IMainMenuProps {
    onGameStart: (sets:number, colors:number) => void;
}

export const MainMenu = ({ onGameStart }:IMainMenuProps) => {

    const [ numberOfSets, setNumberOfSets ] = useState(3);
    const [ numberOfColors, setNumberOfColors ] = useState(3);

    return (
        <div className={css.mainMenu}>
            <h1 className={css.title}>PEXESO</h1>
            <div className={css.settingsContainer}>
                <div className={css.settingsChanger}>
                    <h3>Sets:&nbsp;</h3>
                    <SetsChanger
                        amount={numberOfSets}
                        onChange={(amount)=> {setNumberOfSets(amount);}}
                        maxAmount={cardSymbols.length}
                        minAmount={3}
                    />
                </div>
                <div className={css.settingsChanger}>
                    <h3>Colors:&nbsp;</h3>
                    <SetsChanger
                        amount={numberOfColors}
                        onChange={(amount)=> {setNumberOfColors(amount);}}
                        maxAmount={colorSet.length}
                        minAmount={3}
                    />
                </div>
            </div>
            <button
                className={css.playButton}
                onClick={()=>{onGameStart(numberOfSets, numberOfColors) ;}}
            >
                Play
            </button>
        </div>
    );
};

export default MainMenu;
