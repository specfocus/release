/// <reference types="react" />
import { TimePickerProps as MuiTimePickerProps } from '@mui/lab/TimePicker';
import { FieldProps } from 'react-final-form';
import { ShowErrorFunc } from './ErrorMessage';
export interface TimePickerProps extends Partial<Omit<MuiTimePickerProps, 'onChange'>> {
    name: string;
    fieldProps?: Partial<FieldProps<any, any>>;
    showError?: ShowErrorFunc;
}
export declare function TimePicker(props: TimePickerProps): JSX.Element;
