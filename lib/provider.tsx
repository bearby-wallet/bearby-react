import React from 'react';
import { web3 } from '@hicaru/bearby.js';
import { BearbyContext } from './context';


export function BearbyProvider<T>(props: T) {
  const [base58, setBase58] = React.useState<string>();
  const [net, setNet] = React.useState<string>();
  const [enabled, setEnabled] = React.useState(false);
  const [connected, setConnected] = React.useState(false);
  const [period, setPeriod] = React.useState(-1);

  const handleUpdate = React.useCallback(() => {
    setBase58(web3.wallet.account.base58);
    setNet(web3.wallet.network.net);
    setEnabled(web3.wallet.enabled);
    setConnected(web3.wallet.connected);
    setPeriod(web3.wallet.blockchain.period);
  }, []);

  React.useEffect(() => {
    if (!globalThis.window) return;
    handleUpdate();
    const accountObserver = web3.wallet.account.subscribe((base58) => {
      setBase58(base58);
      setEnabled(web3.wallet.enabled);
      setConnected(web3.wallet.connected);
    });
    const networkObserver = web3.wallet.network.subscribe((net) => {
      setNet(net);
      setEnabled(web3.wallet.enabled);
      setConnected(web3.wallet.connected);
    });
    const periodObserver = web3.wallet.blockchain.subscribe((block: number) => {
      setPeriod(block);
    });
    return () => {
      networkObserver.unsubscribe();
      accountObserver.unsubscribe();
      periodObserver.unsubscribe();
    };
  }, []);

  const state = React.useMemo(() => ({
    base58,
    enabled,
    connected,
    net,
    period,
    massa: web3.massa,
    contract: web3.contract,
    wallet: web3.wallet,
  }), [base58, net, enabled, connected, period]);

  return <BearbyContext.Provider value={state} {...props} />;
}
