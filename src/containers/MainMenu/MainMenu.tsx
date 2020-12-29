import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SetsChanger from '_Base/components/SetsChanger/SetsChanger';
import { updateNumberOfSetsAction, changeGameStateAction } from '_Base/redux/pexesoActions';
import css from './MainMenu.css';


export const MainMenu = () => {

    const numberOfSets = useSelector((state:IReduxState)=> state.numberOfSets);
    const dispatch = useDispatch();

    return (
        <div className={css.mainMenu}>
            <h1 className={css.title}>PEXESO</h1>
            <div>
                <h3>Number of sets</h3>
                <SetsChanger
                    amount={numberOfSets}
                    onChange={(amount)=> {dispatch(updateNumberOfSetsAction(amount));}}
                />
            </div>
            <button
                className={css.playButton}
                onClick={()=>{dispatch( changeGameStateAction('playing'));}}
            >
                Play
            </button>
        </div>
    );
};

export default MainMenu;
