import { RootState } from 'redux/store';

export const selectPrice = (state: RootState) => state.price.items;

export const selectIsLoading = (state: RootState) => state.price.isLoading;

export const selectError = (state: RootState) => state.price.error;

export const selectStatus = (state: RootState) => state.price.status;
