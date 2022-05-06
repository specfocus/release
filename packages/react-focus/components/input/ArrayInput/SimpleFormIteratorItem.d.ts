import { ReactElement, ReactNode } from 'react';
import { Record } from '../../../features/core';
import { ArrayInputContextValue } from './ArrayInputContext';
export declare const SimpleFormIteratorItem: (props: SimpleFormIteratorItemProps) => JSX.Element;
export declare type DisableRemoveFunction = (record: Record) => boolean;
export declare type SimpleFormIteratorItemProps = ArrayInputContextValue & {
    basePath: string;
    children?: ReactNode;
    disabled?: boolean;
    disableRemove?: boolean | DisableRemoveFunction;
    disableReordering?: boolean;
    getItemLabel?: (index: number) => string;
    index: number;
    margin?: 'none' | 'normal' | 'dense';
    member: string;
    onRemoveField: (index: number) => void;
    onReorder: (origin: number, destination: number) => void;
    record: Record;
    removeButton?: ReactElement;
    reOrderButtons?: ReactElement;
    resource: string;
    source: string;
    variant?: 'standard' | 'outlined' | 'filled';
};