import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Screen } from 'layouts';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { HamburgerButton, ToggleThemeButton } from 'components/button';
import { MenuModal } from 'components/modal';
import { DataLabel } from './DataLabel';
import { ConnectButtonGroup } from './ConnectButtonGroup';
import { shortenAddress } from 'utils/address';
import { useBlockNumber } from 'hooks/useBlockNumber';

const Metamask: React.FC = (): JSX.Element => {
  const { account, chainId } = useWeb3React<Web3Provider>();
  const { blockNumber } = useBlockNumber();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Screen className="relative flex dark:bg-black bg-white">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Metamask</title>
      </Helmet>
      <MenuModal
        isOpen={isMenuOpen}
        closeModalEvent={() => setIsMenuOpen(false)}
      />

      <div className="absolute z-10 left-8 top-8">
        <HamburgerButton onClick={() => setIsMenuOpen(true)} />
      </div>
      <div className="absolute z-10 right-8 top-8">
        <ToggleThemeButton />
      </div>
      <div className="flex flex-col m-auto px-4 w-full h-3/5 sm:px-16">
        <div className="center-with-grid w-full h-1/2">
          <div className="space-y-4">
            <DataLabel
              title={'Account'}
              value={account ? shortenAddress(account) : '-'}
              emoji={'🗝'}
            />
            <DataLabel title={'Chain Id'} value={chainId || '-'} emoji={'⛓'} />
            <DataLabel
              title={'Block Number'}
              value={blockNumber || '-'}
              emoji={'📦'}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center w-full h-1/2 sm:flex-row">
          <ConnectButtonGroup />
        </div>
      </div>
    </Screen>
  );
};

export default Metamask;
