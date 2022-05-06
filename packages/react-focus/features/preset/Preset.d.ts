/// <reference types="react" />
import { ObjectSchema, SimpleObject } from '../../lib/ObjectSchema';
interface Condition {
    $if: SimpleObject;
    $then?: SimpleObject;
    $else?: SimpleObject;
}
export interface PresetProps {
    presets: Condition[];
    schema: ObjectSchema;
    values: SimpleObject;
}
export declare const usePreset: ({ presets, schema, values }: PresetProps) => void;
declare const Wrapper: (props: PresetProps) => JSX.Element;
export default Wrapper;
