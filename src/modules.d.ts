declare module '*.css';
declare module '*.jpg';
declare module '*.png';
declare module '*.gif';

declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FunctionComponent<React.SVGProps<
        SVGSVGElement
    >>;
    export default ReactComponent;
}

declare module '*.svg?sprite' {
    const BrowserSprite:BrowserSprite;
    export default BrowserSprite;
}

declare type BrowserSprite = {
    id: string;
    url: string;
    viewBox: string;
    toString: () => string;
};
