import { FC } from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import { TypographyProps } from '@mui/material';
import { PublicFieldProps, InjectedFieldProps } from './types';
declare const BooleanField: FC<BooleanFieldProps>;
export interface BooleanFieldProps extends PublicFieldProps, InjectedFieldProps, Omit<TypographyProps, 'textAlign'> {
    valueLabelTrue?: string;
    valueLabelFalse?: string;
    TrueIcon?: SvgIconComponent;
    FalseIcon?: SvgIconComponent;
    looseValue?: boolean;
}
export default BooleanField;
