import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Card, ICardProps } from './Card';

export const Template:Story<ICardProps> = (args ) => {
    const [ flip, setFlip ] = useState(true);
    return (<Card {...args} isFlipped={flip} onClick={()=>{setFlip(!flip);}}/>);
};
Template.args = {
    cardId: 0,
    cardName: 'heart',
    isFlipped: false,
    isHidden: true,
    color: 'white'
};
Template.argTypes = { onClick: { table: { disable: true }, action: 'flip card' } };
Template.storyName = 'Card';

export default { title: 'Card' } as Meta;
