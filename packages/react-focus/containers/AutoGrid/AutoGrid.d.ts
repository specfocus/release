/// <reference types="react" />
import { BoxProps } from '@mui/material/Box';
import { AreaPresetKey } from './presets';
interface AutoGridProps extends BoxProps {
    config: AreaPresetKey;
}
export default function AutoGrid({ config, children, ...props }: AutoGridProps): JSX.Element;
export {};
