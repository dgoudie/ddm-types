export interface BeerOrLiquorBrand {
    _id: string;
    name: string;
    type:
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
    inStock: boolean;
}

export interface MixedDrinkRecipe {
    _id: string;
    name: string;
    requiredBeerOrLiquorIds: string[];
}

export interface MixedDrinkRecipeWithIngredients extends MixedDrinkRecipe {
    requiredBeersOrLiquors: BeerOrLiquorBrand[];
}
