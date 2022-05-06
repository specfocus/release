export declare const APP_LOCALE = "appLocale";
export interface AppLocale {
    languageTag?: string;
}
export declare const appLocale: import("recoil").RecoilState<AppLocale>;
export declare const useAppLocaleState: (props: {
    languageTag: string;
}) => void;
