import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { DangerOutlineButton, OButton } from 'components/button';
import { connectorsByName, ConnectorNames } from 'services/connector';
import { useEagerConnect, useInactiveListener } from 'hooks/useConnectWallet';

const textButton: { [connectorName: string]: string } = {
  [ConnectorNames.Injected]: 'Metamask',
  [ConnectorNames.WalletConnect]: 'Wallet Connect',
};

export const ConnectButtonGroup: React.FC = (): JSX.Element => {
  const { connector, activate, error, deactivate } =
    useWeb3React<Web3Provider>();

  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager as boolean);

  return (
    <>
      {Object.keys(connectorsByName).map((name: string) => {
        const currentConnector = connectorsByName[name];
        const connected = currentConnector === connector;
        const disabled = !triedEager || connected || !!error;

        return (
          <OButton
            disabled={disabled}
            key={name}
            className="px-4"
            onClick={() => {
              activate(connectorsByName[name]);
            }}
          >
            {textButton[name]}
          </OButton>
        );
      })}
      <DangerOutlineButton
        className="px-4"
        onClick={() => {
          deactivate();
        }}
      >
        deactivate
      </DangerOutlineButton>
    </>
  );
};
