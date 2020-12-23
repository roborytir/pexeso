import { ADD_CARDS, FLIP_CARD } from './pexesoActions';
import { PexesoActionsTypes } from './types';

const defaultState: IReduxState = {
    isFirstCardFlipped: false, isSecondCardFlipped: false, cards: []
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
    default:
        return state;
    }
};