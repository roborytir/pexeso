import React, { useEffect, useRef } from 'react';
import css from './Card.css';
import { getCardSymbol } from './utils';
import CardBack from '_Assets/card-back.svg?sprite';
import CardFront from '_Assets/card-front.svg?sprite';
import Sprite from '../Sprite/Sprite';

export interface ICardProps {
    onClick: (cardId:number) => void;
    cardName: string;
    cardId: number;
    color: string;
    isFlipped?:boolean;
    isHidden?:boolean;
}

export const Card = ({ isFlipped, isHidden, cardName, cardId, onClick, color }: ICardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    let flippedRotation = isFlipped ? -180 : 0;
    const defaultRotation = `perspective(100px) rotateX(0deg) rotateY(${flippedRotation}deg)`;
    const newTransform = useRef(defaultRotation);

    useEffect(()=>{
        if (ref.current){
            ref.current.style.transform = defaultRotation;
        }
    }, [ isFlipped, defaultRotation ]);

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isFlipped) return;
        onClick(cardId);
    };

    const calculateCardTranfsorm = (
        mouseX:number, mouseY:number, invert?:boolean
    ) => {
        if (!ref.current) return defaultRotation;
        const boundingBox = ref.current.getBoundingClientRect();
        const rotationLimit = 4;
        const rotateY = (mouseX - boundingBox.x - (boundingBox.width / 2)) / rotationLimit;
        const rotateX = (mouseY - boundingBox.y - (boundingBox.height / 2)) / rotationLimit;
        if (invert){
            flippedRotation = isFlipped ? 0 : -180;
        }
        return `perspective(100px) rotateX(${-rotateX}deg) rotateY(${rotateY + flippedRotation}deg)`;
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        requestAnimationFrame(()=>{
            if (!ref.current) return;
            ref.current.style.transform = calculateCardTranfsorm(e.clientX, e.clientY);
        });
    };

    const handleMouseLeave = () => {
        requestAnimationFrame(()=>{
            if (!ref.current) return;
            ref.current.style.transform = defaultRotation;
        });
    };
    const Symbol = getCardSymbol(cardName);

    return (
        <div
            data-cardname={cardName}
            ref={ref}
            style={{
                pointerEvents: (isHidden) ? 'none' : 'all',
                transform: newTransform.current,
                animationName: isHidden ? 'popout' : 'initial',
            }}
            className={css.card}
            onClick={handleClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {isFlipped ? <Sprite sprite={CardFront} /> : <Sprite sprite={CardBack} />}

            {isFlipped && (
                <Symbol
                    className={css.cardSymbol}
                    style={{ fill: color }}
                />
            )}
        </div>
    );
};

export default Card;
