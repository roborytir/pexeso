import { IPexesoCard } from './types';

declare global {
    interface IReduxState {
        isFirstCardFlipped: boolean;
        isSecondCardFlipped: boolean;
        cards: IPexesoCard[];
    }
}