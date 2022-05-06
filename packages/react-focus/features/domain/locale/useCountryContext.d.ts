import React from 'react';
import type { CountryCode } from './Country';
export declare interface CountryState {
    code?: CountryCode;
}
export declare interface CountryValue extends CountryState {
    set: (state?: CountryState) => void;
}
export declare const atomGlobalCountry: import("recoil").RecoilState<CountryState>;
export declare const CountryContext: React.Context<CountryValue>;
export declare const CountryProvider: React.FC<{
    children?: React.ReactNode | undefined;
}>;
declare const useCountryContext: () => CountryValue;
export default useCountryContext;
