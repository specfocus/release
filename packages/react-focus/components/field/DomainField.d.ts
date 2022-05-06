import { FC } from 'react';
import { TextFieldProps } from './TextField';
export interface DomainFieldProps extends TextFieldProps {
    getLabelFromValue: (value: any) => string;
}
declare const DomainField: FC<DomainFieldProps>;
export default DomainField;
