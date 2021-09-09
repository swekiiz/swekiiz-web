import {
  Web3Provider,
  ExternalProvider,
  JsonRpcFetchFunc,
} from '@ethersproject/providers';

const getLibrary = (
  provider: ExternalProvider | JsonRpcFetchFunc,
): Web3Provider => {
  const library = new Web3Provider(provider, 'any');
  library.pollingInterval = 15000;

  return library;
};

export default getLibrary;
