/// <reference types="react" />
import { MenuItemProps } from '@mui/material/MenuItem';
export interface AutocompleteSuggestionItemProps {
    createValue?: any;
    suggestion: any;
    index: number;
    highlightedIndex: number;
    isSelected: boolean;
    filterValue: string;
    classes?: any;
    getSuggestionText: (suggestion: any) => string;
}
declare const AutocompleteSuggestionItem: (props: AutocompleteSuggestionItemProps & MenuItemProps<'li', {
    button?: true;
}>) => JSX.Element;
export default AutocompleteSuggestionItem;
