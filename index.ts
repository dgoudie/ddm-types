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
    | 'BEER'
    | 'WINE'
    | 'CIDER'
    | 'MEAD'
    | 'SAKE'
    | 'GIN'
    | 'BRANDY'
    | 'WHISKEY'
    | 'RUM'
    | 'TEQUILA'
    | 'VODKA'
    | 'ABSINTHE'
    | 'EVERCLEAR'
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
