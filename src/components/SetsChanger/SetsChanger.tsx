import React from 'react';
import { cardsData } from '../Card/cardsData';
import css from './SetsChanger.css';

export interface ISetsChangerProps {
    onChange: (amount: number) => void;
    amount: number;
}

export const SetsChanger = ({ amount, onChange }: ISetsChangerProps) => {

    const handleChange = (decrease = false) => {
        if (decrease && amount > 1){
            onChange(amount - 1);
        }

        if (!decrease && amount < cardsData.length){
            onChange(amount + 1);
        }

    };


    return (
        <div className={css.setsChanger}>
            <span className={css.leftArrow} onClick={()=> {handleChange(true);}}/>
            <span className={css.amount}>{amount}</span>
            <span className={css.rightArrow} onClick={()=> {handleChange();}}/>
        </div>
    );
};

export default SetsChanger;