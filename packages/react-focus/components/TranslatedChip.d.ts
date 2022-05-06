/// <reference types="react" />
import { ChipProps } from '@mui/material/Chip';
interface TranslatedChipProps extends Omit<ChipProps, 'onDelete'> {
    onDelete?: (value: number | string) => void;
    value: number | string;
}
declare const TranslatedChip: ({ label, onDelete, value, ...otherProps }: TranslatedChipProps) => JSX.Element;
export default TranslatedChip;
