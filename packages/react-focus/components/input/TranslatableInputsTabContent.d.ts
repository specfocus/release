import { ReactElement, ReactNode } from 'react';
import { Record } from '../../features/core';
/**
 * Default container for a group of translatable inputs inside a TranslatableInputs component.
 * @see TranslatableInputs
 */
export declare const TranslatableInputsTabContent: (props: TranslatableInputsTabContentProps) => ReactElement;
export declare type TranslatableInputsTabContentProps<RecordType extends Record | Omit<Record, 'id'> = Record> = {
    basePath?: string;
    children: ReactNode;
    groupKey?: string;
    locale: string;
    record?: RecordType;
    resource?: string;
    margin?: 'none' | 'normal' | 'dense';
    variant?: 'standard' | 'outlined' | 'filled';
};
