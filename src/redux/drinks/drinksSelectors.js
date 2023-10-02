export const selectDrinks = state => state.drinks.items;

export const selectIsLoading = state => state.drinks.isLoading;

export const selectError = state => state.drinks.error;

export const selectPage = state => state.drinks.page;

export const selectLimit = state => state.drinks.limit;
