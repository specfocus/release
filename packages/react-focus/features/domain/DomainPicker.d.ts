import { MixedAutocompleteProps } from '../../components/MixedAutocomplete';
import React from 'react';
import { SxProps } from '@mui/material/styles';
export interface DomainPickerProps<T extends {} = any> extends Omit<MixedAutocompleteProps<string, false, true, true>, 'onChange' | 'options' | 'renderInput'> {
    buttonSx?: SxProps;
    domain: string;
    labelKey?: string;
    onChange?: (value: T) => void;
    optionTemplate?: string;
    template?: string;
    transformFn?: (option: any) => any;
    valueKey?: string;
}
declare const DomainPicker: React.FC<DomainPickerProps<any>>;
export default DomainPicker;
