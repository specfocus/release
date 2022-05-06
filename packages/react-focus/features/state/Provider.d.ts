/// <reference types="react" />
import { RecoilRootProps, RecoilState, RecoilValue } from 'recoil';
declare type RecoilProviderProps = RecoilRootProps;
declare const RecoilProvider: (props: RecoilProviderProps) => JSX.Element;
export default RecoilProvider;
export declare function getRecoil<T>(atom: RecoilValue<T>): T;
export declare function getRecoilPromise<T>(atom: RecoilValue<T>): Promise<T>;
export declare function setRecoil<T>(atom: RecoilState<T>, valOrUpdater: T | ((currVal: T) => T)): void;
export declare function resetRecoil(atom: RecoilState<any>): void;
