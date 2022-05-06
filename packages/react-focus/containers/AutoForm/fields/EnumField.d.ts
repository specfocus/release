/// <reference types="react" />
import { EnumDomain } from '../../../lib/EnumDomain';
import { StringSchema } from '../../../lib/StringSchema';
import { FieldProps } from '../useFieldset';
interface EnumFieldProps extends FieldProps<StringSchema, EnumDomain<any>> {
}
export declare const EnumField: ({ api, domain, disabled, dispatch, filter, label: label, name, placeholder, readonly, schema, t, value, values }: EnumFieldProps) => JSX.Element;
export default EnumField;
