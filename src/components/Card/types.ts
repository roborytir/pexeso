export interface ICardData {
    name: string;
    positionTopX: number;
    positionTopY: number;
}

export interface ICardSymbol {
    name: string;
    symbol: React.FC<React.SVGProps<SVGElement>>;
}