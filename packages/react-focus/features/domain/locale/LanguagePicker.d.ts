/// <reference types="react" />
import { DomainPickerProps } from '../DomainPicker';
export declare const countryTransformFn: ({ country, ...spread }: any) => any;
export declare const LANGUAGE_OPTION_TEMPLATE = "<span>{icon}</span>\n&nbsp;<span>{name} ({code}) +{phone}<span>\n";
declare const LanguagePicker: (props: DomainPickerProps) => JSX.Element;
export default LanguagePicker;
