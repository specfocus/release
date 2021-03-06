/// <reference types="react" />
import { FileInputProps, FileInputOptions } from './FileInput';
import { InputProps } from '../../features/core';
declare const ImageInput: (props: ImageInputProps) => JSX.Element;
export declare type ImageInputProps = FileInputProps & InputProps<FileInputOptions>;
export default ImageInput;
