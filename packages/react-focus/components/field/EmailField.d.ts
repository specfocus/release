import { AnchorHTMLAttributes, FC } from 'react';
import { PublicFieldProps, InjectedFieldProps } from './types';
declare const EmailField: FC<EmailFieldProps>;
export interface EmailFieldProps extends PublicFieldProps, InjectedFieldProps, AnchorHTMLAttributes<HTMLAnchorElement> {
}
export default EmailField;
