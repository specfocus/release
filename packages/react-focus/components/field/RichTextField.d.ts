import { FC } from 'react';
import { TypographyProps } from '@mui/material/Typography';
import { InjectedFieldProps, PublicFieldProps } from './types';
export declare const removeTags: (input: string) => string;
declare const RichTextField: FC<RichTextFieldProps>;
export interface RichTextFieldProps extends PublicFieldProps, InjectedFieldProps, Omit<TypographyProps, 'textAlign'> {
    stripTags?: boolean;
}
export default RichTextField;
