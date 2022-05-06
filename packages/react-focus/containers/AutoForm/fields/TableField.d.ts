/// <reference types="react" />
import { ArraySchema } from '../../../lib/ArraySchema';
import { SimpleType } from '../../../lib/ObjectSchema';
import { FieldSchema } from '../FieldSchema';
export interface ArrayFieldsetProps extends ArraySchema, FieldSchema {
    data: SimpleType[];
    name: string;
}
declare const TableField: ({ data, name }: ArrayFieldsetProps) => JSX.Element;
export default TableField;
