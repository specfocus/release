/// <reference types="react" />
import { TabProps } from '@mui/material/Tab';
/**
 * Single tab that selects a locale in a TranslatableFields component.
 * @see TranslatableFields
 */
export declare const TranslatableFieldsTab: (props: TranslatableFieldsTabProps & TabProps) => JSX.Element;
interface TranslatableFieldsTabProps {
    locale: string;
    groupKey?: string;
}
export {};
