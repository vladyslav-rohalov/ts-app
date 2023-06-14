import { RootState } from 'redux/store';
import { createSelector } from '@reduxjs/toolkit';
import { selectTopCollections } from 'redux/nftCollections/selectors';

export const selectNft = (state: RootState) => state.singleNft.items;

export const selectIsLoading = (state: RootState) => state.singleNft.isLoading;

export const selectError = (state: RootState) => state.singleNft.error;

export const selectSetCollectionsAddresses = createSelector(
  selectTopCollections,
  nft => nft.map(collection => collection.contract_address).slice(0, 8)
);
