import { SimpleType } from '../../object';
import { PropertiesSchema } from '../../json/schema/ObjectJsonSchema';
export declare class Property {
    schema?: PropertiesSchema<SimpleType>;
    constructor(schema?: PropertiesSchema<SimpleType>);
}
