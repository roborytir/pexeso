import { ICardData, ICardSymbol } from './types';
import Circle from '_Assets/circle.svg?component';
import Crescent from '_Assets/crescent.svg?component';
import Heart from '_Assets/heart.svg?component';
import Rect from '_Assets/rect.svg?component';
import Star from '_Assets/star.svg?component';
import Tear from '_Assets/tear.svg?component';




export const cardsData: ICardData[][] = [
    [
        {
            name: 'tear_yellow',
            positionTopX: 0,
            positionTopY: 0,
        },
        {
            name: 'tear_green',
            positionTopX: 128,
            positionTopY: 0,
        },
        {
            name: 'tear_blue',
            positionTopX: 256,
            positionTopY: 0,
        },
        {
            name: 'tear_red',
            positionTopX: 384,
            positionTopY: 0,
        }
    ],
    [
        {
            name: 'circle_yellow',
            positionTopX: 0,
            positionTopY: 128,
        },
        {
            name: 'circle_green',
            positionTopX: 128,
            positionTopY: 128,
        },
        {
            name: 'circle_blue',
            positionTopX: 256,
            positionTopY: 128,
        },
        {
            name: 'circle_red',
            positionTopX: 384,
            positionTopY: 128,
        }
    ],
    [
        {
            name: 'square_yellow',
            positionTopX: 0,
            positionTopY: 256,
        },
        {
            name: 'square_green',
            positionTopX: 128,
            positionTopY: 256,
        },
        {
            name: 'square_blue',
            positionTopX: 256,
            positionTopY: 256,
        },
        {
            name: 'square_red',
            positionTopX: 384,
            positionTopY: 256,
        }
    ],
    [
        {
            name: 'star_yellow',
            positionTopX: 0,
            positionTopY: 384,
        },
        {
            name: 'star_green',
            positionTopX: 128,
            positionTopY: 384,
        },
        {
            name: 'star_blue',
            positionTopX: 256,
            positionTopY: 384,
        },
        {
            name: 'star_red',
            positionTopX: 384,
            positionTopY: 384,
        }
    ],
    [
        {
            name: 'heart_yellow',
            positionTopX: 0,
            positionTopY: 512,
        },
        {
            name: 'heart_green',
            positionTopX: 128,
            positionTopY: 512,
        },
        {
            name: 'heart_blue',
            positionTopX: 256,
            positionTopY: 512,
        },
        {
            name: 'heart_red',
            positionTopX: 384,
            positionTopY: 512,
        }
    ],
    [
        {
            name: 'cog_yellow',
            positionTopX: 0,
            positionTopY: 640,
        },
        {
            name: 'cog_green',
            positionTopX: 128,
            positionTopY: 640,
        },
        {
            name: 'cog_blue',
            positionTopX: 256,
            positionTopY: 640,
        },
        {
            name: 'cog_red',
            positionTopX: 384,
            positionTopY: 640,
        }
    ],
    [
        {
            name: 'moon_yellow',
            positionTopX: 0,
            positionTopY: 768,
        },
        {
            name: 'moon_green',
            positionTopX: 128,
            positionTopY: 768,
        },
        {
            name: 'moon_blue',
            positionTopX: 256,
            positionTopY: 768,
        },
        {
            name: 'moon_red',
            positionTopX: 384,
            positionTopY: 768,
        }
    ],
    [
        {
            name: 'flower_yellow',
            positionTopX: 0,
            positionTopY: 896,
        },
        {
            name: 'flower_green',
            positionTopX: 128,
            positionTopY: 896,
        },
        {
            name: 'flower_blue',
            positionTopX: 256,
            positionTopY: 896,
        },
        {
            name: 'flower_red',
            positionTopX: 384,
            positionTopY: 896,
        }
    ],
];


export const cardSymbols: ICardSymbol[] = [
    { name: 'circle', symbol: Circle },
    { name: 'crescent', symbol: Crescent },
    { name: 'heart', symbol: Heart },
    { name: 'rect', symbol: Rect },
    { name: 'star', symbol: Star },
    { name: 'tear', symbol: Tear }
];