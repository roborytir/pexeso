import React from 'react';

export interface ISpriteProps extends React.SVGAttributes<HTMLOrSVGElement> {
    sprite: BrowserSprite;
}

export const Sprite = ({ sprite, ...rest }: ISpriteProps) => {
    return (
        <svg viewBox={sprite.viewBox} {...rest} >
            <use href={sprite.url}/>
        </svg>
    );
};

export default Sprite;
