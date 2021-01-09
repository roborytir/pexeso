import '../src/index.css';
import './preview.css';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
        values: [
            { name: 'dark', value: '#151515' },
            { name: 'twitter', value: '#00aced' },
            { name: 'facebook', value: '#3b5998' },
        ]
    },
    controls: { hideNoControlsWarning: true }
};
