/// <reference types="react" />
import { IconButtonProps } from '@mui/material/IconButton';
export declare const ToolColumnsButton: (props: IconButtonProps) => JSX.Element;
interface Props {
    title: string;
}
export declare const ColumnsSelection: ({ title }: Props) => JSX.Element;
export default function useColumnSelection(): {
    isOpen: boolean;
    close: () => void;
    open: () => void;
};
export {};
