/// <reference types="react" />
import { ListSubheaderProps } from '@mui/material/ListSubheader';
interface TranslatedListSubheaderProps extends ListSubheaderProps {
    i18nKey?: string;
    count?: number;
}
export default function TranslatedListSubheader({ children, i18nKey, count, ...otherProps }: TranslatedListSubheaderProps): JSX.Element;
export {};
