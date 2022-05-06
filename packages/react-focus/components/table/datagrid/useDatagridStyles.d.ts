/// <reference types="react" />
import { GridTypeMap } from '@mui/material/Grid';
import { TextFieldProps } from '../../../components/TranslatedTextField';
import { OverrideProps } from '@mui/types';
declare const useDatagridStyles: (props?: any) => import("@mui/styles").ClassNameMap<"table" | "tbody" | "thead" | "row" | "expanded" | "checkbox" | "expandIcon" | "headerRow" | "headerCell" | "clickableRow" | "rowEven" | "rowOdd" | "rowCell" | "expandHeader" | "expandIconCell">;
export declare const InputProps: {
    style: {
        fontSize: string;
    };
};
export declare const InputLabelProps: {
    style: {
        fontSize: string;
    };
};
declare type TextProps = TextFieldProps & Pick<OverrideProps<GridTypeMap, 'div'>, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> & {
    tooltip?: string;
};
export declare const Text: ({ xs, sm, md, lg, xl, tooltip, value, ...props }: TextProps) => JSX.Element;
export declare const DateText: ({ value, ...props }: TextProps) => JSX.Element;
export declare const DateSmall: (props: TextProps) => JSX.Element;
export declare const DateMedium: (props: TextProps) => JSX.Element;
export declare const TextSmall: (props: TextProps) => JSX.Element;
export declare const TextMedium: (props: TextProps) => JSX.Element;
export declare const TextLarge: (props: TextProps) => JSX.Element;
export declare const TextWide: (props: TextProps) => JSX.Element;
export default useDatagridStyles;
