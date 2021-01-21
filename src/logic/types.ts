export interface IPexesoCard {
    cardId: number;
    cardName: string;
    isFlipped: boolean;
    isHidden: boolean;
    color: string;
}

export interface ICardSymbol {
    name: string;
    symbol: React.FC<React.SVGProps<SVGElement>>;
}
