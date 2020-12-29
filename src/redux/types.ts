import {
    ADD_CARDS, FLIP_CARD, HIDE_CARDS, RESET_CARDS, SET_FIRST_CARD_FLIPPED, UPDATE_SETS, CHANGE_GAME_STATE
} from './pexesoActions';
import { GameState } from './redux';

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

interface IPexesoSetFirstCardFlippedAction {
    type: typeof SET_FIRST_CARD_FLIPPED;
    payload: boolean;
}

interface IPexesoResetCardsAction {
    type: typeof RESET_CARDS;
}

interface IPexesoHideCardsAction {
    type: typeof HIDE_CARDS;
    payload: {firstId:number, secondId:number};
}

interface IPexesoUpdateNumberOfSets {
    type: typeof UPDATE_SETS;
    payload: number;
}

interface IPexesoChangeGameSet {
    type: typeof CHANGE_GAME_STATE;
    payload: GameState;
}

export type PexesoActionsTypes =
| IPexesoFlipCardAction
| IPexesoAddCardsAction
| IPexesoSetFirstCardFlippedAction
| IPexesoResetCardsAction
| IPexesoHideCardsAction
| IPexesoUpdateNumberOfSets
| IPexesoChangeGameSet;