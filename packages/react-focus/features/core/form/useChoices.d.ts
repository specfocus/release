import { ReactElement } from 'react';
import { Record } from '../types';
import { InputProps } from '.';
export declare type OptionTextElement = ReactElement<{
    record: Record;
}>;
export declare type OptionTextFunc = (choice: any) => string | OptionTextElement;
export declare type OptionText = OptionTextElement | OptionTextFunc | string;
export interface ChoicesInputProps<T = any> extends Omit<InputProps<T>, 'source'> {
    source?: string;
    choices?: object[];
}
export interface ChoicesProps {
    choices: object[];
    optionValue?: string;
    optionText?: OptionText;
    translateChoice?: boolean;
}
export interface UseChoicesOptions {
    optionValue?: string;
    optionText?: OptionText;
    disableValue?: string;
    translateChoice?: boolean;
}
declare const useChoices: ({ optionText, optionValue, disableValue, translateChoice, }: UseChoicesOptions) => {
    getChoiceText: (choice: any) => any;
    getChoiceValue: (choice: any) => any;
    getDisableValue: (choice: any) => any;
};
export default useChoices;
