import { OutputContainer } from 'components/OutputContainer';
import { useGetNFTs, NFTType  } from './hooks';
import { WidgetProps } from 'types';

export const NFTCollection = ({ callbackRoute }: WidgetProps) => {
  const collectionIdentifier = 'TES-7c731d'; // Remplace par l'identifiant réel
  const { nfts, isLoading, error } = useGetNFTs(collectionIdentifier);

  return (
    <div className='flex flex-col gap-6'>
      <OutputContainer isLoading={isLoading}>
        {error && <p className='text-red-600'>{error}</p>}
        {!isLoading && nfts.length === 0 && (
          <p className='text-gray-400'>
            Aucun NFT trouvé pour la collection {collectionIdentifier}.
          </p>
        )}
        {nfts.length > 0 && (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {nfts.map((nft: NFTType) => (
              <div
                key={nft.identifier}
                className='border rounded-lg p-4 bg-gray-50'
              >
                <img
                  src={nft.url}
                  alt={nft.name}
                  className='w-full h-32 object-cover rounded-md'
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      'https://via.placeholder.com/150'; // Image par défaut si erreur
                  }}
                />
                <p className='mt-2 font-medium'>{nft.name}</p>
                <p className='text-sm text-gray-500'>{nft.identifier}</p>
              </div>
            ))}
          </div>
        )}
      </OutputContainer>
    </div>
  );
};