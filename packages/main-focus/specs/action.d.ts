import { RawObject } from 'mingo/types';
import { AlertWhat } from './alert';
import { Any } from './any';
export interface AnyAction {
    what?: Any;
    when: number;
    where?: string;
    whom?: string;
    why: string;
}
export interface BaseAction extends Pick<AnyAction, 'when'> {
}
export interface AlertAction extends BaseAction {
    what: AlertWhat;
    why: 'alert';
}
export interface AsyncAction extends BaseAction {
    what: AsyncWhat;
    why: 'async';
}
export interface QuickAction extends BaseAction {
    what: AwaitWhat;
    why: 'await';
}
export interface PatchAction extends BaseAction {
    what: PatchWhat;
    why: 'patch';
}
export interface QueryAction extends BaseAction {
    what: QueryWhat;
    why: 'query';
}
export interface ThrowAction extends BaseAction {
    what: Error['message'] | Pick<Error, 'message' | 'name' | 'cause'>;
    where: Error['stack'];
    why: 'error';
}
export declare type SomeAction = AlertAction | AsyncAction | QuickAction | PatchAction | QueryAction | ThrowAction;
export interface AsyncWhat {
}
export interface AwaitWhat {
}
export declare type PatchWhat<collection extends string = string, key extends number | string = number> = {
    [name in collection]: {
        [id in key]: Any;
    };
};
export declare type QueryWhat<collection extends string = string> = {
    [name in collection]: RawObject;
};
