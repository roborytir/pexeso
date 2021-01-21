import Circle from '_Assets/circle.svg?component';
import Crescent from '_Assets/crescent.svg?component';
import Heart from '_Assets/heart.svg?component';
import Rect from '_Assets/rect.svg?component';
import Star from '_Assets/star.svg?component';
import Tear from '_Assets/tear.svg?component';

import { ICardSymbol } from './types';

export const cardSymbols: ICardSymbol[] = [
    { name: 'circle', symbol: Circle },
    { name: 'crescent', symbol: Crescent },
    { name: 'heart', symbol: Heart },
    { name: 'rect', symbol: Rect },
    { name: 'star', symbol: Star },
    { name: 'tear', symbol: Tear }
];

export const colorSet = [
    '#C62D1C',
    '#31C61C',
    '#C6B41C',
    '#1C4EC6',
    '#881CC6'
];
