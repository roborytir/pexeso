import React from 'react';
import css from './Card.css';
import { getCardDataCoordinates } from './utils';

export interface ICardProps {
    onClick?: (cardId:number) => void;
    cardName: string;
    cardId: number;
    isFlipped?:boolean;
    isHidden?:boolean;
    sizeX?: number;
    sizeY?:number;
}

export const Card = ({ sizeX = 128, sizeY = 128, isFlipped, isHidden, cardName, cardId, onClick }: ICardProps) => {
    const { x, y } = getCardDataCoordinates(cardName);
    const posX = isFlipped ? sizeX : 0;

    return (
        <div
            style={{
                backgroundPositionX: -posX, width: sizeX, height: sizeY
            }}
            className={css.card}
            onClick={()=> {onClick && onClick(cardId);} }
        >
            {isFlipped && (
                <div style={{
                    backgroundPositionX: -x, backgroundPositionY: -y, width: sizeX, height: sizeY
                }} className={css.cardSymbol} />
            )}
        </div>
    );
};

export default Card;
