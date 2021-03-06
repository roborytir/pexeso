import React from 'react';
import css from './SetsChanger.css';

export interface ISetsChangerProps {
    onChange: (amount: number) => void;
    amount: number;
    maxAmount: number;
    minAmount: number;
}

export const SetsChanger = ({ amount, onChange, maxAmount, minAmount }: ISetsChangerProps) => {

    const handleChange = (decrease = false) => {
        if (decrease && amount > minAmount){
            onChange(amount - 1);
        }

        if (!decrease && amount < maxAmount){
            onChange(amount + 1);
        }

    };


    return (
        <div className={css.setsChanger}>
            <span className={`${css.arrow} ${css.leftArrow}`} onClick={()=> {handleChange(true);}}/>
            <span className={css.amount}>{amount}</span>
            <span className={`${css.arrow} ${css.rightArrow}`} onClick={()=> {handleChange();}}/>
        </div>
    );
};

export default SetsChanger;