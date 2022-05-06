/// <reference types="react" />
import { PaperProps } from './Paper';
interface FieldsetProps extends PaperProps {
    subtitle?: string;
}
export default function Fieldset({ children, subtitle, ...otherProps }: FieldsetProps): JSX.Element;
export {};
