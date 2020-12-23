import { IPexesoCard } from '_Base/redux/types';
import { cardsData } from './cardsData';

export function getCardDataCoordinates(name:string){
    const card = cardsData.find(c => c.name === name);
    if (card){
        return {
            x: card.positionTopX,
            y: card.positionTopY,
        };
    }
    return {
        x: 0,
        y: 0
    };
}

export function generateRandomCards():IPexesoCard[]{
    const cards: IPexesoCard[] = [];
    for (let i = 0; i < cardsData.length; i++) {
        const element = cardsData[i];
        cards.push({
            cardName: element.name,
            cardId: i,
            isFlipped: false,
            isHidden: false,
        });
        cards.push({
            cardName: element.name,
            cardId: i + cardsData.length,
            isFlipped: false,
            isHidden: false,
        });
    }
    return cards;
}