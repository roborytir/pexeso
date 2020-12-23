import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cardsData } from '_Base/components/Card/cardsData';
import { generateRandomCards } from '_Base/components/Card/utils';
import { addCards, flipCard } from '_Base/redux/pexesoActions';
import Card from '../../components/Card/Card';
import css from './CardContainer.css';

export const CardContainer = () => {
    const cards = useSelector((state:IReduxState)=> state.cards);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(addCards(generateRandomCards()));
    }, [ dispatch ]);

    const handleCardClick = (cardId:number) => {
        dispatch(flipCard(cardId));
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
                        onClick={handleCardClick}
                    />
                ))}
        </div>
    );
};

export default CardContainer;
