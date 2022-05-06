/// <reference types="react" />
import { TypographyProps } from '@mui/material/Typography';
export interface TranslatedTypography extends TypographyProps {
    i18nKey?: string;
    component?: string;
    count?: number;
}
declare const TranslatedTypography: ({ children, i18nKey, count, ...otherProps }: TranslatedTypography) => JSX.Element;
export default TranslatedTypography;
