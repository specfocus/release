import type { Domain } from './Domain';
export declare const CONTENT_TYPE = "content-type";
export interface FetchConfig {
    urlTemplate: string;
    lifeSpan?: number;
}
export declare const atomDomainConfig: import("recoil").RecoilState<Record<string, FetchConfig>>;
export declare const requestOptions: RequestInit;
export declare const useDomainConfig: () => (config: Record<string, FetchConfig>) => Promise<void>;
export declare const match: (arr: string[], s: string) => string;
export declare const selectorDomainFetcher: (param: string) => import("recoil").RecoilValueReadOnly<Domain>;
