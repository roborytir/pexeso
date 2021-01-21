import { cardSymbols } from '_Base/logic/cardsData';

export function getCardSymbol(name:string):React.FC<React.SVGProps<SVGElement>>{
    return cardSymbols.find(symbol => symbol.name === name)?.symbol || cardSymbols[0].symbol;
}
