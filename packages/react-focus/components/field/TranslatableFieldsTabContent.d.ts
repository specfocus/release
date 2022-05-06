import { ReactElement, ReactNode } from 'react';
import { Record } from '../../features/core';
/**
 * Default container for a group of translatable fields inside a TranslatableFields components.
 * @see TranslatableFields
 */
export declare const TranslatableFieldsTabContent: (props: TranslatableFieldsTabContentProps) => ReactElement;
export declare type TranslatableFieldsTabContentProps = {
    basePath: string;
    children: ReactNode;
    formGroupKeyPrefix?: string;
    groupKey: string;
    locale: string;
    record: Record;
    resource: string;
};
