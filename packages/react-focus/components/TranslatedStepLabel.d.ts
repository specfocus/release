/// <reference types="react" />
import { StepLabelProps } from '@mui/material/StepLabel';
export interface TranslatedStepLabel extends StepLabelProps {
    i18nKey?: string;
    count?: number;
}
declare const TranslatedStepLabel: ({ children, i18nKey, count, ...otherProps }: TranslatedStepLabel) => JSX.Element;
export default TranslatedStepLabel;
