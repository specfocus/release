/// <reference types="react" />
import 'date-fns';
import { StringDomain } from '../../../lib/StringDomain';
import { StringSchema } from '../../../lib/StringSchema';
import { FieldProps } from '../useFieldset';
declare const StringField: (props: FieldProps<StringSchema, StringDomain>) => JSX.Element;
export default StringField;
