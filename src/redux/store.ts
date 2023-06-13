import { configureStore } from '@reduxjs/toolkit';
import { nftReducer } from './nftCollections/nftCollectionsSlice';
import { priceReducer } from './cryptoPrice/priceSlice';
import { singleNftReducer } from './nftSingle/nftSingleSlice';

const store = configureStore({
  reducer: {
    nft: nftReducer,
    price: priceReducer,
    singleNft: singleNftReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
