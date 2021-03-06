import { ReactNode } from 'react';
interface Props {
    children: ReactNode;
    className?: string;
    isOpen: boolean;
    menuProps: any;
    inputEl: HTMLElement;
    classes?: any;
    suggestionsContainerProps?: any;
}
declare const AutocompleteSuggestionList: (props: Props) => JSX.Element;
export default AutocompleteSuggestionList;
