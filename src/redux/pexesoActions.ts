import { IPexesoCard, PexesoActionsTypes } from './types';

export const FLIP_CARD = 'FLIP_CARD';
export const ADD_CARDS = 'ADD_CARDS';

export const flipCard = (payload: number): PexesoActionsTypes =>{
    return {
        type: FLIP_CARD,
        payload
    };
};

export const addCards = (payload: IPexesoCard[]): PexesoActionsTypes =>{
    return {
        type: ADD_CARDS,
        payload: payload,
    };
};