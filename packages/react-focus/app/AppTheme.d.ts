import { Localization } from '@mui/material/locale';
import { Theme, ThemeOptions } from '@mui/material/styles';
export interface AppTheme {
    localeKey?: string;
    localization?: Localization;
    theme?: Theme;
    themeKey?: string;
    themeOptions?: ThemeOptions;
}
export declare const APP_THEME = "appTheme";
export declare const appTheme: import("recoil").RecoilState<AppTheme>;
export declare const useAppThemeState: ({ themeKey }: {
    themeKey: string;
}) => void;
export declare const useAppThemeValue: () => Theme;
export declare const useThemeLocaleState: ({ languageTag }: {
    languageTag: string;
}) => void;
