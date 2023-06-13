import { RootState } from 'redux/store';

export const selectTopCollections = (state: RootState) => state.nft.items;

export const selectIsLoading = (state: RootState) => state.nft.isLoading;

export const selectError = (state: RootState) => state.nft.error;
