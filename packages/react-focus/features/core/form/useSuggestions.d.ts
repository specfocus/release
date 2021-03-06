import { UseChoicesOptions } from './useChoices';
declare const useSuggestions: ({ allowCreate, allowDuplicates, allowEmpty, choices, createText, createValue, emptyText, emptyValue, limitChoicesToValue, matchSuggestion, optionText, optionValue, selectedItem, suggestionLimit, translateChoice, }: UseSuggestionsOptions) => {
    getChoiceText: (choice: any) => any;
    getChoiceValue: (choice: any) => any;
    getSuggestions: (filter: any) => any[];
};
export default useSuggestions;
export interface UseSuggestionsOptions extends UseChoicesOptions {
    allowCreate?: boolean;
    allowDuplicates?: boolean;
    allowEmpty?: boolean;
    choices: any[];
    createText?: string;
    createValue?: any;
    emptyText?: string;
    emptyValue?: any;
    limitChoicesToValue?: boolean;
    matchSuggestion?: (filter: string, suggestion: any, exact?: boolean) => boolean;
    suggestionLimit?: number;
    selectedItem?: any | any[];
}
/**
 * Get the suggestions to display after applying a fuzzy search on the available choices
 *
 * @example
 *
 * getSuggestions({
 *   choices: [{ id: 1, name: 'admin' }, { id: 2, name: 'publisher' }],
 *   optionText: 'name',
 *   optionValue: 'id',
 *   getSuggestionText: choice => choice[optionText],
 * })('pub')
 *
 * // Will return [{ id: 2, name: 'publisher' }]
 * getSuggestions({
 *   choices: [{ id: 1, name: 'admin' }, { id: 2, name: 'publisher' }],
 *   optionText: 'name',
 *   optionValue: 'id',
 *   getSuggestionText: choice => choice[optionText],
 * })('pub')
 *
 * // Will return [{ id: 2, name: 'publisher' }]
 */
export declare const getSuggestionsFactory: ({ allowCreate, allowDuplicates, allowEmpty, choices, createText, createValue, emptyText, emptyValue, optionText, optionValue, getChoiceText, getChoiceValue, limitChoicesToValue, matchSuggestion, selectedItem, suggestionLimit, }: UseSuggestionsOptions & {
    getChoiceText: (choice: any) => string;
    getChoiceValue: (choice: any) => string;
}) => (filter: any) => any[];
