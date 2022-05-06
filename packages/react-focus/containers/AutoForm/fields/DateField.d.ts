/// <reference types="react" />
import 'date-fns';
import { DateDomain } from '../../../lib/DateDomain';
import { StringSchema } from '../../../lib/StringSchema';
import { FieldProps } from '../useFieldset';
declare const DateField: ({ readonly, required, value, ...props }: FieldProps<StringSchema, DateDomain>) => JSX.Element;
export default DateField;
