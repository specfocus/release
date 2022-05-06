/// <reference types="react" />
import { Optional } from '../../../components/MixedAutocomplete';
import { DomainPickerProps } from '../DomainPicker';
export declare const countryTransformFn: ({ code, ...spread }: any) => any;
export declare const COUNTRY_OPTION_TEMPLATE = "<span>{icon}</span>\n&nbsp;<span>{name} ({code}) +{phone}<span>\n";
declare const CountryPicker: ({ children, domain, onChange, ...spreadProps }: Optional<DomainPickerProps, 'domain'>) => JSX.Element;
export default CountryPicker;
