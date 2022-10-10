import React from 'react';
import { web3 } from '@hicaru/bearby.js';
import { BearbyContext } from './context';


export function BearbyProvider<T>(props: T) {
  const [base58, setBase58] = React.useState(web3.wallet.account.base58);
  const [net, setNet] = React.useState(web3.wallet.network.net);
  const [enabled, setEnabled] = React.useState(web3.wallet.enabled);
  const [connected, setConnected] = React.useState(web3.wallet.connected);

  React.useEffect(() => {
    const observer = web3.wallet.account.subscribe((base58) => {
      setBase58(base58);
      setEnabled(web3.wallet.enabled);
      setConnected(web3.wallet.connected);
    });
    return observer.unsubscribe;
  });

  React.useEffect(() => {
    const observer = web3.wallet.network.subscribe((net) => {
      setNet(net);
    });
    return observer.unsubscribe;
  });

  const state = React.useMemo(() => ({
    base58,
    enabled,
    connected,
    net,
    massa: web3.massa,
    wallet: web3.wallet
  }), [base58, net, enabled, connected]);

  return <BearbyContext.Provider value={state} {...props} />;
}
