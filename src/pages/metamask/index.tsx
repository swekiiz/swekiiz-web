import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Screen } from 'layouts';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { DataLabel } from './DataLabel';
import { ConnectButtonGroup } from './ConnectButtonGroup';
import { shortenAddress } from 'utils/address';

const Metamask: React.FC = (): JSX.Element => {
  const { account, chainId } = useWeb3React<Web3Provider>();

  return (
    <Screen className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Metamask</title>
      </Helmet>
      <Screen className="relative flex dark:bg-black bg-white">
        <div className="flex flex-col m-auto px-16 w-full h-3/5">
          <div className="center-with-grid w-full h-1/2">
            <div className="space-y-4">
              <DataLabel
                title={'Account'}
                value={account ? shortenAddress(account) : '-'}
                emoji={'🗝'}
              />
              <DataLabel
                title={'Chain Id'}
                value={chainId || '-'}
                emoji={'⛓'}
              />
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center w-full h-1/2">
            <ConnectButtonGroup />
          </div>
        </div>
      </Screen>
    </Screen>
  );
};

export default Metamask;
