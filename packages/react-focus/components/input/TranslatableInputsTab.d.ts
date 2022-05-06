/// <reference types="react" />
import { TabProps } from '@mui/material/Tab';
/**
 * Single tab that selects a locale in a TranslatableInputs component.
 * @see TranslatableInputs
 */
export declare const TranslatableInputsTab: (props: TranslatableInputsTabProps & TabProps) => JSX.Element;
interface TranslatableInputsTabProps {
    groupKey?: string;
    locale: string;
}
export {};
