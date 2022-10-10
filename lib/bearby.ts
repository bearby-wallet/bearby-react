import { useContext } from 'react';
import { BearbyContext } from './context';
import { USE_BEARBY_PROVIDER } from './errors';


export function useBearby() {
  const context = useContext(BearbyContext);

  if (!context) {
    throw new Error(USE_BEARBY_PROVIDER);
  }

  return context;
}
