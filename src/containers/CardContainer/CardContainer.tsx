import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateRandomCards } from '_Base/components/Card/utils';
import {
    addCardsAction, flipCardAction, setFirstCardFlippedAction, hideCardsAction, resetCardsAction, changeGameStateAction
} from '_Base/redux/pexesoActions';
import Card from '../../components/Card/Card';
import css from './CardContainer.css';

export const CardContainer = () => {
    const cards = useSelector((state:IReduxState)=> state.cards);
    const timerId = useRef<NodeJS.Timeout>();
    const timerActive = useRef(false);
    const isFirstCardFlipped = useSelector((state:IReduxState)=> state.isFirstCardFlipped);
    const numberOfSets = useSelector((state:IReduxState)=> state.numberOfSets);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(addCardsAction(generateRandomCards(numberOfSets)));
    }, [ dispatch, numberOfSets ]);

    useEffect(()=>{
        if (cards.length > 0 && cards.every(c=>c.isHidden)){
            dispatch(addCardsAction([]));
            dispatch(changeGameStateAction('gameover'));
        }

    }, [ cards, dispatch ]);


    const handleCardClick = (cardId:number) => {
        if (timerActive.current) return;
        dispatch(flipCardAction(cardId));
        dispatch(setFirstCardFlippedAction(true));
        const currentCard = cards.find(c=>c.cardId === cardId);
        const pairCard = cards.find(c=>c.isFlipped && c.cardId !== cardId && c.cardName === currentCard?.cardName);

        if (pairCard && currentCard){
            timerActive.current = true;
            timerId.current = setTimeout(() => {
                dispatch(hideCardsAction({ firstId: currentCard.cardId, secondId: pairCard.cardId }));
                dispatch(setFirstCardFlippedAction(false));
                timerActive.current = false;
            }, 1000);
        } else if (isFirstCardFlipped){
            timerActive.current = true;
            timerId.current = setTimeout(() => {
                dispatch(resetCardsAction());
                dispatch(setFirstCardFlippedAction(false));
                timerActive.current = false;
            }, 2000);
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
