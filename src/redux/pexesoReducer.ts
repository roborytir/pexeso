import {
    ADD_CARDS, CHANGE_GAME_STATE, FLIP_CARD, HIDE_CARDS, RESET_CARDS, SET_FIRST_CARD_FLIPPED, UPDATE_SETS
} from './pexesoActions';
import { PexesoActionsTypes } from './types';

const defaultState: IReduxState = {
    isFirstCardFlipped: false, cards: [], gameState: 'menu', numberOfSets: 3
};

export const pexesoReducer = (state = defaultState, action: PexesoActionsTypes ):IReduxState => {
    switch (action.type){
    case FLIP_CARD:
        return {
            ...state,
            cards: state.cards.map(card=> {
                if (card.cardId === action.payload){
                    card.isFlipped = !card.isFlipped;
                }
                return card;

            })
        };
    case ADD_CARDS:
        return { ...state, cards: action.payload };
    case SET_FIRST_CARD_FLIPPED:
        return {
            ...state,
            isFirstCardFlipped: action.payload
        };
    case RESET_CARDS:
        return {
            ...state,
            cards: state.cards.map(c=>{c.isFlipped = false; return c;})
        };
    case HIDE_CARDS:
        return {
            ...state,
            cards: state.cards.map(c=>{
                if (c.cardId === action.payload.firstId || c.cardId === action.payload.secondId){
                    c.isHidden = true;
                }
                return c;
            })
        };
    case UPDATE_SETS:{
        return {
            ...state,
            numberOfSets: action.payload
        };
    }
    case CHANGE_GAME_STATE:{
        return {
            ...state,
            gameState: action.payload
        };
    }
    default:
        return state;
    }
};