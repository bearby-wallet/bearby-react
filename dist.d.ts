/// <reference types="react" />
declare module "lib/context" {
    import React from 'react';
    import { Wallet, Massa } from '@hicaru/bearby.js';
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
    export const BearbyContext: React.Context<BearbyContext>;
}
declare module "lib/provider" {
    export function BearbyProvider<T>(props: T): JSX.Element;
}
declare module "lib/errors" {
    export const USE_BEARBY_PROVIDER = "`useBearby` should be used within a `BearbyProvider`";
}
declare module "lib/bearby" {
    import { BearbyContext } from "lib/context";
    export function useBearby(): BearbyContext;
}
declare module "lib/index" {
    export * from "lib/provider";
    export * from "lib/bearby";
}
declare module "index" {
    export * from "lib/index";
}
