import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import nftCollectionsOperations from 'redux/nftCollections/operations';
import priceOperations from 'redux/cryptoPrice/operations';
import nftSingleOperations from 'redux/nftSingle/operations';
import { selectChain } from 'redux/filterChain/selectors';
import { selectSetCollectionsAddresses } from 'redux/nftSingle/selectors';
import Hero from 'Components/hero/hero';
import TopNft from 'Components/topNFT/topNft';
import TopCollections from 'Components/topCollections/topCollections';
import Partners from 'Components/partners/partners';

export default function Home() {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();
  const { chain } = useSelector(selectChain);
  const collectionsAddresses = useSelector(selectSetCollectionsAddresses);

  useEffect(() => {
    dispatch(nftCollectionsOperations.fetchTradingCollections(chain));
    dispatch(priceOperations.fetchCryptoPrice());
  }, [dispatch, chain]);

  useEffect(() => {
    if (collectionsAddresses.length > 0) {
      collectionsAddresses.forEach(addressCollection => {
        dispatch(
          nftSingleOperations.fetchFirstOfCollection({
            chain: 'Ethereum',
            addressCollection,
          })
        );
      });
    }
  }, [dispatch, collectionsAddresses]);

  return (
    <>
      <Hero />
      <TopNft />
      <TopCollections />
      <Partners />
    </>
  );
}
