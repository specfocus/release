/// <reference types="react" />
import { IconButtonProps } from '@mui/material/IconButton';
export declare const DataExportButton: (props: IconButtonProps) => JSX.Element;
interface Props {
    title: string;
}
export declare const DataExport: ({ title }: Props) => JSX.Element;
export default function useDataExport(): {
    isOpen: boolean;
    close: () => void;
    open: () => void;
};
export {};
