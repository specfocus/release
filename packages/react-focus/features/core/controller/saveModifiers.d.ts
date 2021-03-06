import * as React from 'react';
import { OnSuccess, OnFailure } from '../types';
export declare const SideEffectContext: React.Context<SideEffectContextValue>;
export declare const SideEffectContextProvider: ({ children, value }: {
    children: any;
    value: any;
}) => JSX.Element;
/**
 * Get modifiers for a save() function, and the way to update them.
 *
 * Used in useCreateController and useEditController.
 *
 * @example
 *
 * const {
 *     onSuccessRef,
 *     setOnSuccess,
 *     onFailureRef,
 *     setOnFailure,
 *     transformRef,
 *     setTransform,
 * } = useSaveModifiers({ onSuccess, onFailure, transform });
 */
export declare const useSaveModifiers: ({ onSuccess, onFailure, transform, }: SideEffectContextOptions) => {
    onSuccessRef: React.MutableRefObject<OnSuccess>;
    setOnSuccess: SetOnSuccess;
    onFailureRef: React.MutableRefObject<OnFailure>;
    setOnFailure: SetOnFailure;
    transformRef: React.MutableRefObject<TransformData>;
    setTransform: SetTransformData;
};
export declare type SetOnSuccess = (onSuccess: OnSuccess) => void;
export declare type SetOnFailure = (onFailure: OnFailure) => void;
export declare type TransformData = (data: any) => any | Promise<any>;
export declare type SetTransformData = (transform: TransformData) => void;
export interface SideEffectContextValue {
    setOnSuccess?: SetOnSuccess;
    setOnFailure?: SetOnFailure;
    setTransform?: SetTransformData;
}
export interface SideEffectContextOptions {
    onSuccess?: OnSuccess;
    onFailure?: OnFailure;
    transform?: TransformData;
}
