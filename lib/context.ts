import React from 'react';
import { web3, Wallet, Massa } from '@hicaru/bearby.js';


export type BearbyContext = {
  /**
   * A flag, if user has connect with current website.
   */
  connected: boolean;

  /**
   * A flag if user unlocked wallet.
   */
  enabled: boolean;

  /**
   * A Current selected by user, address in base58 encode.
   */
  base58?: string;

  /**
   * A current selected by user, netwrok.
   * (mainnet, testnet, custom)
   */
  net?: string;

  massa: Massa;
  wallet: Wallet;
};


export const BearbyContext = React.createContext<BearbyContext>({
  connected: false,
  enabled: false,
  massa: web3.massa,
  wallet: web3.wallet
});
