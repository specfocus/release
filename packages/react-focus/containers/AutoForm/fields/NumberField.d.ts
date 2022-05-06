/// <reference types="react" />
import 'date-fns';
import { NumberSchema } from '../../../lib/NumberSchema';
import { FieldProps } from '../useFieldset';
declare const NumberField: ({ label: label, name, placeholder, readonly, required, schema }: FieldProps<NumberSchema>) => JSX.Element;
export default NumberField;
