import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

export const useBlockNumber = (): { blockNumber: number | null } => {
  const { chainId, library } = useWeb3React<Web3Provider>();

  const [blockNumber, setBlockNumber] = useState<number | null>(null);

  useEffect(() => {
    if (!!library) {
      let stale = false;

      library
        .getBlockNumber()
        .then((blockNumber: number) => {
          if (!stale) {
            setBlockNumber(blockNumber);
          }
        })
        .catch(() => {
          if (!stale) {
            setBlockNumber(null);
          }
        });

      const updateBlockNumber = (blockNumber: number) => {
        setBlockNumber(blockNumber);
      };

      library.on('block', updateBlockNumber);

      return () => {
        stale = true;
        library.removeListener('block', updateBlockNumber);
        setBlockNumber(null);
      };
    }
  }, [library, chainId]);

  return { blockNumber };
};
