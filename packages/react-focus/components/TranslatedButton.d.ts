/// <reference types="react" />
import { ButtonProps } from '@mui/material/Button';
interface TranslatedButtonProps extends ButtonProps {
    count?: number;
    i18nKey?: string;
}
declare const TranslatedButton: ({ children, count, i18nKey, ...otherProps }: TranslatedButtonProps) => JSX.Element;
export default TranslatedButton;
