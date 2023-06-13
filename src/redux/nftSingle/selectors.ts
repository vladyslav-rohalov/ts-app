import { RootState } from 'redux/store';

export const selectNft = (state: RootState) => state.singleNft.items;

export const selectIsLoading = (state: RootState) => state.singleNft.isLoading;

export const selectError = (state: RootState) => state.singleNft.error;
