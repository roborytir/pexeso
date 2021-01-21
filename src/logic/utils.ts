import { cardSymbols, colorSet } from './cardsData';
import { IPexesoCard } from './types';

export function generateRandomCards(numberOfSets = cardSymbols.length, numberOfColors = colorSet.length):IPexesoCard[]{
    const cards: IPexesoCard[] = [];
    let cardId = 0;

    for (let i = 0; i < numberOfSets; i++) {
        const element = cardSymbols[i];
        for (let c = 0; c < numberOfColors; c++){
            cards.push({
                cardName: element.name,
                cardId: cardId,
                isFlipped: false,
                isHidden: false,
                color: colorSet[c],
            });
            cardId++;
            cards.push({
                cardName: element.name,
                cardId: cardId,
                isFlipped: false,
                isHidden: false,
                color: colorSet[c],
            });
            cardId++;
        }
    }
    // Shuffle cards
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [ cards[i], cards[j] ] = [ cards[j], cards[i] ];
    }
    return cards;
}