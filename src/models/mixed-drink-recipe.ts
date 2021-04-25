import { BeerOrLiquorBrand } from './beer-or-liquor-brand';
import { ObjectId } from 'mongodb';

export interface MixedDrinkRecipe {
    _id?: ObjectId | string;
    name: string;
    nameNormalized: string;
    additionalNotes?: string;
    requiredBeersOrLiquors: MixedDrinkRecipeIngredient[];
}

export interface MixedDrinkRecipeIngredient {
    _id: ObjectId | string;
    count: number;
}

export interface MixedDrinkRecipeWithIngredients extends MixedDrinkRecipe {
    requiredBeersOrLiquors: (BeerOrLiquorBrand & MixedDrinkRecipeIngredient)[];
    price: number;
}
