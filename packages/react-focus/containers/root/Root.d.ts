import { SuspenseProps } from 'react';
import { RecoilRootProps } from 'recoil';
declare type RootProps = Partial<SuspenseProps> & RecoilRootProps;
declare const Root: ({ children, fallback, ...recoil }: RootProps) => JSX.Element;
export default Root;
