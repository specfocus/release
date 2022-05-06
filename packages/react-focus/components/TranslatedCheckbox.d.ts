/// <reference types="react" />
import { CheckboxProps } from '@mui/material/Checkbox';
import { FormControlLabelProps } from '@mui/material/FormControlLabel';
interface TranslatedCheckboxProps extends CheckboxProps, Pick<FormControlLabelProps, 'label' | 'labelPlacement'> {
}
declare const TranslatedCheckbox: ({ label, labelPlacement, ...otherProps }: TranslatedCheckboxProps) => JSX.Element;
export default TranslatedCheckbox;
