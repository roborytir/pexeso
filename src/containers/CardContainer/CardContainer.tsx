import React, {
    useEffect, useRef, useState
} from 'react';
import { generateRandomCards } from '_Base/logic/utils';
import { IPexesoCard } from '_Base/logic/types';

import Card from '../../components/Card/Card';
import css from './CardContainer.css';

interface ICardContainerProps {
    sets: number;
    colors: number;
    onGameOver: () => void;
}

export const CardContainer = ({ colors, sets, onGameOver }:ICardContainerProps) => {
    const [ cards, setCards ] = useState<IPexesoCard[]>(generateRandomCards(sets, colors));
    const timerId = useRef<NodeJS.Timeout>();
    const timerActive = useRef(false);
    const [ firstCardId, setFirstCardId ] = useState(-1);

    useEffect(()=>{
        if (cards.length > 0 && cards.every(c=>c.isHidden)){
            setTimeout(() => {
                onGameOver();
            }, 1000);
        }

    }, [ cards, onGameOver ]);

    const flipCard = (cardId: number) => {
        setCards((prevCards)=> prevCards.map(card=>{
            if (card.cardId === cardId){
                card.isFlipped = true;
            }
            return card;
        }));
    };

    const hideCards = (firstId: number, secondId: number) => {
        setCards((prevCards)=> prevCards.map(card=>{
            if (card.cardId === firstId || card.cardId === secondId){
                card.isHidden = true;
            }
            return card;
        }));
    };

    const resetCards = () => {
        setCards((prevCards)=> prevCards.map(card=>{
            card.isFlipped = false;
            return card;
        }));
    };

    const handleCardClick = (cardId:number) => {
        if (timerActive.current) return;
        if (firstCardId === cardId) return;
        flipCard(cardId);
        setFirstCardId(cardId);
        const currentCard = cards.find(c=>c.cardId === cardId);
        const pairCard = cards.find(c=>c.isFlipped && c.cardId !== cardId && c.cardName === currentCard?.cardName && c.color === currentCard?.color);

        if (pairCard && currentCard){
            timerActive.current = true;
            timerId.current = setTimeout(() => {
                hideCards(currentCard.cardId, pairCard.cardId );
                setFirstCardId(-1);
                timerActive.current = false;
            }, 1000);
        } else if (firstCardId !== -1){
            timerActive.current = true;
            timerId.current = setTimeout(() => {
                resetCards();
                setFirstCardId(-1);
                timerActive.current = false;
            }, 1000);
        }
    };

    return (
        <div className={css.cardContainer}>
            {cards.map(card=>
                (
                    <Card
                        key={card.cardId}
                        cardId={card.cardId}
                        cardName={card.cardName}
                        isFlipped={card.isFlipped}
                        isHidden={card.isHidden}
                        color={card.color}
                        onClick={handleCardClick}
                    />
                ))}
        </div>
    );
};

export default CardContainer;
