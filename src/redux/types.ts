import { ADD_CARDS, FLIP_CARD } from './pexesoActions';

export interface IPexesoCard {
    cardId: number;
    cardName: string;
    isFlipped: boolean;
    isHidden: boolean;

}

export interface IPlaygroundState {
    hello: string;
}

interface IPexesoFlipCardAction {
    type: typeof FLIP_CARD;
    payload: number;
}
interface IPexesoAddCardsAction {
    type: typeof ADD_CARDS;
    payload: IPexesoCard[];
}


export type PexesoActionsTypes = IPexesoFlipCardAction | IPexesoAddCardsAction;