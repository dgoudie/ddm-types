import { ObjectId } from 'mongodb';

export interface BeerOrLiquorBrand {
    _id?: ObjectId;
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

export interface MixedDrinkRecipe {
    _id?: ObjectId;
    name: string;
    nameNormalized: string;
    additionalNotes?: string;
    requiredBeersOrLiquors: MixedDrinkRecipeIngredient[];
}

export interface MixedDrinkRecipeIngredient {
    _id: ObjectId;
    count: number;
}

export interface MixedDrinkRecipeWithIngredients extends MixedDrinkRecipe {
    requiredBeersOrLiquors: (BeerOrLiquorBrand & MixedDrinkRecipeIngredient)[];
    price: number;
}

export type WsUpdateMessage = {
    type: 'UPDATE';
    apiPath: string;
};

export type WsBroadcastMessage = WsUpdateMessage;
