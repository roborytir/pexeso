import { IPexesoCard, PexesoActionsTypes } from './types';

export const FLIP_CARD = 'FLIP_CARD';
export const ADD_CARDS = 'ADD_CARDS';
export const SET_FIRST_CARD_FLIPPED = 'SET_FIRST_CARD_FLIPPED';
export const RESET_CARDS = 'RESET_CARDS';
export const HIDE_CARDS = 'HIDE_CARDS';

export const flipCardAction = (payload: number): PexesoActionsTypes =>{
    return {
        type: FLIP_CARD,
        payload
    };
};

export const addCardsAction = (payload: IPexesoCard[]): PexesoActionsTypes =>{
    return {
        type: ADD_CARDS,
        payload,
    };
};

export const setFirstCardFlippedAction = (payload: boolean): PexesoActionsTypes =>{
    return {
        type: SET_FIRST_CARD_FLIPPED,
        payload,
    };
};

export const resetCardsAction = (): PexesoActionsTypes =>{
    return { type: RESET_CARDS };
};

export const hideCardsAction = (payload: {firstId:number, secondId:number}): PexesoActionsTypes =>{
    return {
        type: HIDE_CARDS,
        payload,
    };
};