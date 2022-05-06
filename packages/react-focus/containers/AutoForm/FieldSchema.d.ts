import { GridSize } from '@mui/material';
import { BaseSchema } from '../../lib/BaseSchema';
import { AreaPresetKey } from '../AutoGrid/presets';
export interface FieldSchema extends BaseSchema {
    config?: AreaPresetKey;
    placeholder?: string;
    length?: AreaPresetKey | GridSize | [number, number?];
}
