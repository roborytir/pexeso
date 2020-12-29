import { IPexesoCard } from './types';

declare global {
    interface IReduxState {
        gameState: GameState;
        numberOfSets: number;
        isFirstCardFlipped: boolean;
        cards: IPexesoCard[];
    }
}

declare type GameState =
| 'menu'
| 'playing'
| 'gameover'