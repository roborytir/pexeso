import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card, ICardProps } from './Card';

export const Template:Story<ICardProps> = (args ) => <Card {...args}/> ;
Template.args = {
    cardId: 0,
    cardName: 'heart_red',
    isFlipped: false,
};
Template.argTypes = { onClick: { table: { disable: true }, action: 'flip card' } };
Template.storyName = 'Card';

export default { title: 'Card' } as Meta;
