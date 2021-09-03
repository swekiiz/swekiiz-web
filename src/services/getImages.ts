import BTC from 'assets/images/crypto/BTC.svg';
import ETH from 'assets/images/crypto/ETH.svg';
import ADA from 'assets/images/crypto/ADA.svg';
import CAKE from 'assets/images/crypto/CAKE.svg';
import MATIC from 'assets/images/crypto/MATIC.svg';
import UNI from 'assets/images/crypto/UNI.svg';
import USDC from 'assets/images/crypto/USDC.svg';
import BNB from 'assets/images/crypto/BNB.svg';

const cryptoIamges: { [token: string]: string | undefined } = {
  ADA,
  BNB,
  BTC,
  CAKE,
  MATIC,
  ETH,
  UNI,
  USDC,
};

export const getImg = (token: string): string | undefined =>
  cryptoIamges[token.toUpperCase()];
