import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';


const customTheme = create({
    base: 'light',
    colorPrimary: '#2d83e1',
    colorSecondary: '#2d9ce1',
    barSelectedColor: '#2d83e1',
    brandTitle: 'PexesoBook'
});


addons.setConfig({ theme: customTheme });

