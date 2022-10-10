import React from 'react';
import { web3 } from '@hicaru/bearby.js';
import { BearbyContext } from './context';


export function BearbyProvider<T>(props: T) {
  const [base58, setBase58] = React.useState<string>();
  const [net, setNet] = React.useState<string>();
  const [enabled, setEnabled] = React.useState(false);
  const [connected, setConnected] = React.useState(false);

  const handleUpdate = React.useCallback(() => {
    setBase58(web3.wallet.account.base58);
    setNet(web3.wallet.network.net);
    setEnabled(web3.wallet.enabled);
    setConnected(web3.wallet.connected);
  }, []);

  React.useEffect(() => {
    if (!globalThis.window) return;
    handleUpdate();
    const observer = web3.wallet.subscribe(() => {
      handleUpdate();
    });
    return () => {
      observer.unsubscribe();
    };
  }, []);

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
