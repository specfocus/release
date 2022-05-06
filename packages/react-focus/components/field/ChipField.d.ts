import { FC } from 'react';
import { ChipProps } from '@mui/material/Chip';
import { PublicFieldProps, InjectedFieldProps } from './types';
export declare const ChipField: FC<ChipFieldProps>;
export interface ChipFieldProps extends PublicFieldProps, InjectedFieldProps, Omit<ChipProps, 'label'> {
}
export default ChipField;
