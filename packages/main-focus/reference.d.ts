import { SimpleObject } from './object';
export declare type Reference<T extends {}, K extends keyof T> = Pick<T, K> & SimpleObject;
