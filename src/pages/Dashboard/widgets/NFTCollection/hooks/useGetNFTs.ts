import { useState, useEffect } from 'react';
import axios from 'axios';
import { useGetAccount, useGetNetworkConfig } from 'hooks';

export interface NFTType {
  identifier: string;
  name: string;
  url: string; // URL de l'image ou média
  collection: string;
}

export const useGetNFTs = (collectionIdentifier: string) => {
  const { address } = useGetAccount();
  const { network } = useGetNetworkConfig();
  const [nfts, setNfts] = useState<NFTType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNFTs = async () => {
    if (!address || !collectionIdentifier) return;

    setIsLoading(true);
    try {
      const response = await axios.get(
        `${network.apiAddress}/accounts/${address}/nfts?collections=${collectionIdentifier}&size=100`
      );
      const nftData: NFTType[] = response.data.map((nft: any) => ({
        identifier: nft.identifier,
        name: nft.name,
        url: nft.url || nft.media?.[0]?.url || '',
        collection: nft.collection
      }));
      setNfts(nftData);
    } catch (err) {
      console.error('Erreur lors de la récupération des NFTs:', err);
      setError('Impossible de charger les NFTs');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNFTs();
  }, [address, collectionIdentifier]);

  return { nfts, isLoading, error };
};