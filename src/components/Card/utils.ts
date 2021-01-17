import { IPexesoCard } from '_Base/redux/types';
import { cardsData, cardSymbols } from './cardsData';
import { ICardData } from './types';

export function getCardSymbol(name:string):React.FC<React.SVGProps<SVGElement>>{
    return cardSymbols.find(symbol => symbol.name === name)?.symbol || cardSymbols[0].symbol;
}


export function getCardDataCoordinates(name:string){
    for (const set of cardsData){
        const card = set.find(c => c.name === name);
        if (card){
            return {
                x: card.positionTopX,
                y: card.positionTopY,
            };
        }
    }

    return {
        x: 0,
        y: 0
    };
}
const colorSet = [
    'C62D1C',
    '31C61C',
    'C6B41C',
    '1C4EC6',
    '881CC6'
];

export function generateRandomColor(){
    return colorSet[Math.floor(Math.random() * colorSet.length)];
}

export function generateRandomCards(sets = cardsData.length):IPexesoCard[]{
    const cards: IPexesoCard[] = [];
    let flattenedCardsList:ICardData[] = [];

    for (let c = 0; c < sets; c++) {
        flattenedCardsList = [ ...flattenedCardsList, ...cardsData[c] ];

    }

    for (let i = 0; i < flattenedCardsList.length; i++) {
        const element = flattenedCardsList[i];
        const color = generateRandomColor();
        cards.push({
            cardName: element.name,
            cardId: i,
            isFlipped: false,
            isHidden: false,
            color: color,
        });
        cards.push({
            cardName: element.name,
            cardId: i + flattenedCardsList.length,
            isFlipped: false,
            isHidden: false,
            color: color,
        });
    }
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [ cards[i], cards[j] ] = [ cards[j], cards[i] ];
    }
    return cards;
}