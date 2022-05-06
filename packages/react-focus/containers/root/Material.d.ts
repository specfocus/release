/// <reference types="react" />
import { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';
import { ThemeOptions } from '@mui/material/styles/createTheme';
export declare const atomThemeMap: import("recoil").RecoilState<Record<string, ThemeOptions>>;
export declare const atomThemeSelectedKey: import("recoil").RecoilState<string>;
interface MaterialProps extends Pick<ThemeProviderProps, 'children'> {
}
declare const Material: ({ children }: MaterialProps) => JSX.Element;
export default Material;
