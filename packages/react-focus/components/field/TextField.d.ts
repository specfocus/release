import { FC, ElementType } from 'react';
import { TypographyProps } from '@mui/material/Typography';
import { PublicFieldProps, InjectedFieldProps } from './types';
declare const TextField: FC<TextFieldProps>;
export interface TextFieldProps extends PublicFieldProps, InjectedFieldProps, Omit<TypographyProps, 'textAlign'> {
    component?: ElementType<any>;
}
export default TextField;
