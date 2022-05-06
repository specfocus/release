/// <reference types="react" />
import 'date-fns';
import { ObjectSchema, SimpleObject } from '../../lib/ObjectSchema';
import { AreaPresetKey } from '../AutoGrid/presets';
import { FieldsetContext, FieldsetProps } from './useFieldset';
export interface AutoFieldsProps extends FieldsetProps {
    config: AreaPresetKey;
    context: FieldsetContext;
    name?: string;
    schema: ObjectSchema<SimpleObject>;
}
export default function AutoFields({ config, context, name, schema, }: AutoFieldsProps): JSX.Element;
