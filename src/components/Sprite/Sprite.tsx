import React from 'react';

export interface ISpriteProps {
    sprite: BrowserSprite;
}

export const Sprite = ({ sprite }: ISpriteProps) => {
    return (
        <svg viewBox={sprite.viewBox}>
            <use href={sprite.url}/>
        </svg>
    );
};

export default Sprite;
