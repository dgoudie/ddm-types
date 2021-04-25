import { ObjectId } from 'mongodb';

export interface BeerOrLiquorBrand {
    _id?: ObjectId | string;
    name: string;
    nameNormalized: string;
    type: BeerOrLiquorBrandType;
    inStock: boolean;
    price: number;
}

export type BeerOrLiquorBrandType =
    | 'VODKA'
    | 'LIQUEUR'
    | 'RUM'
    | 'TEQUILA'
    | 'WHISKEY'
    | 'GIN'
    | 'BEER'
    | 'SELTZER'
    | 'DRINK_MIX'
    | 'WINE'
    | 'CIDER'
    | 'OTHER';

export interface BeersAndLiquorBrandsForType {
    type: BeerOrLiquorBrandType;
    items: BeerOrLiquorBrand[];
}
