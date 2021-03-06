import { ReactNode } from 'react';
import { FormContextValue } from '../types';
/**
 * Provides utilities to Form children, allowing them to change the default save function or register inputs to a group.
 * @param props The component props
 * @param {ReactNode} props.children The form content
 * @param {FormContextValue} props.value The form context
 */
export declare const FormContextProvider: ({ children, value, }: {
    children: ReactNode;
    value: FormContextValue;
}) => JSX.Element;
