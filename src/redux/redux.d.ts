import { IPexesoCard } from './types';

declare global {
    interface IReduxState {
        isFirstCardFlipped: boolean;
        cards: IPexesoCard[];
    }
}