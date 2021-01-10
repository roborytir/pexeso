import React, { useEffect, useRef } from 'react';
import css from './Card.css';
import { getCardDataCoordinates } from './utils';
import CardBack from '_Assets/card-back.svg';

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
    const ref = useRef<HTMLDivElement>(null);

    useEffect(()=>{

    }, []);

    const calculateCardTranfsorm = (mouseX:number, mouseY:number) => {
        if (!ref.current) return '';
        const boundingBox = ref.current.getBoundingClientRect();
        const rotationLimit = 4;
        const rotateY = (mouseX - boundingBox.x - (boundingBox.width / 2)) / rotationLimit;
        const rotateX = (mouseY - boundingBox.y - (boundingBox.height / 2)) / rotationLimit;

        return `perspective(100px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(0.75)`;
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        requestAnimationFrame(()=>{
            if (!ref.current) return;
            ref.current.style.transform = calculateCardTranfsorm(e.clientX, e.clientY);
        });
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        requestAnimationFrame(()=>{
            if (!ref.current) return;
            ref.current.style.transform = 'perspective(100px) rotateX(0deg) rotateY(0deg) scale(0.75)';
        });
    };



    return (
        <div
            data-cardname={cardName}
            ref={ref}
            style={{
                backgroundPositionX: -posX,
                width: sizeX,
                height: sizeY,
                opacity: isHidden ? 0 : 1,
                pointerEvents: (isHidden || isFlipped) ? 'none' : 'all'
            }}
            className={css.card}
            onClick={()=> {onClick && onClick(cardId);} }
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
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
