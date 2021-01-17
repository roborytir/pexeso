
declare module '*.css';
declare module '*.jpg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';

declare module '*.svg?sprite' {
    const BrowserSprite:BrowserSprite;
    export default BrowserSprite;
}

declare module '*.svg?component' {
    const Icon:React.FC<React.SVGProps<SVGElement>>;
    export default Icon;
}

declare type BrowserSprite = {
    id: string;
    url: string;
    viewBox: string;
    toString: () => string;
};
