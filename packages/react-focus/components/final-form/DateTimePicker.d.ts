/// <reference types="react" />
import { DateTimePickerProps as MuiDateTimePickerProps } from '@mui/lab/DateTimePicker';
import { FieldProps } from 'react-final-form';
import { ShowErrorFunc } from './ErrorMessage';
export interface DateTimePickerProps extends Partial<Omit<MuiDateTimePickerProps, 'onChange'>> {
    name: string;
    dateFunsUtils?: any;
    locale?: any;
    fieldProps?: Partial<FieldProps<any, any>>;
    showError?: ShowErrorFunc;
}
export declare function DateTimePicker(props: DateTimePickerProps): JSX.Element;
