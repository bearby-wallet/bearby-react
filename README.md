<div align="center">
  <h1>
  bearby react web3 wrapper
  </h1>
  <strong>
    Allows react to interact with the bearby wallet.
  </strong>
</div>
<hr/>

## Introduction

The react web3 module of bearby wallet.

## Quick Start

In your project:
```bash
yarn add @hicaru/bearby-react # or npm install @hicaru/bearby-react
```

The first step is to wrap you App or any React subtree with the BearbyProvider
```javascript
import { BearbyProvider } from '@hicaru/bearby-react';

ReactDOM.render(
  <React.StrictMode>
    <BearbyProvider>
      <App />
    </BearbyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

The first step is to wrap you App or any React subtree with the BearbyProvider
```javascript
import { useBearby, BearbyProvider } from '@hicaru/bearby-react';

function App() {
    const { connected, enabled, wallet, massa, base58, net } = useBearby();

    return (
        <div>
            <p>
                connected:({String(connected)})
            </p>
            <p>
                enabled:({String(enabled)})
            </p>
            <p>
                base58:({String(base58)})
            </p>
            <p>
                network:({String(net)})
            </p>
            <button onClick={() => wallet.connect()}>
                connect
            </button>
        </div>
    );
}
```
