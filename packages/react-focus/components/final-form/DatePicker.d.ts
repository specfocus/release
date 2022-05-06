/// <reference types="react" />
import { DatePickerProps as MuiDatePickerProps } from '@mui/lab/DatePicker';
import { FieldProps } from 'react-final-form';
import { ShowErrorFunc } from './ErrorMessage';
export interface DatePickerProps extends Partial<Omit<MuiDatePickerProps, 'onChange'>> {
    name: string;
    dateFunsUtils?: any;
    locale?: any;
    fieldProps?: Partial<FieldProps<any, any>>;
    showError?: ShowErrorFunc;
}
export declare function DatePicker(props: DatePickerProps): JSX.Element;
