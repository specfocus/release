import { FunctionComponent, ComponentProps } from 'react';
import Quill, { QuillOptionsStatic } from 'quill';
import { InputHelperText } from '..';
export interface RichTextInputProps {
    label?: string | false;
    options?: QuillOptionsStatic;
    source: string;
    toolbar?: boolean | string[] | Array<any>[] | string | {
        container: string | string[] | Array<any>[];
        handlers?: Record<string, Function>;
    };
    fullWidth?: boolean;
    configureQuill?: (instance: Quill) => void;
    helperText?: ComponentProps<typeof InputHelperText>['helperText'];
    record?: Record<any, any>;
    resource?: string;
    variant?: string;
    margin?: any;
    [key: string]: any;
}
declare const RichTextInput: FunctionComponent<RichTextInputProps>;
export default RichTextInput;
