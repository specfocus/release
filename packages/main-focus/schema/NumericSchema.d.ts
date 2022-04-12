import { NumericJsonSchema } from '../json/schema/NumericJsonSchema';
export interface NumericDomain {
    minimum?: number;
    maximum?: number;
    exclusiveMinimum?: number;
    exclusiveMaximum?: number;
    multipleOf?: number;
    format?: string;
}
export interface NumericSchema extends Pick<NumericJsonSchema, 'type'> {
    domain?: string | NumericDomain;
    optional?: boolean;
}
