import React from 'react';
import { BearbyContext } from './context';
import { USE_BEARBY_PROVIDER } from './errors';


export function useBearby() {
  const context = React.useContext(BearbyContext);

  if (!context) {
    throw new Error(USE_BEARBY_PROVIDER);
  }

  return context;
}
