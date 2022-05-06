/// <reference types="react" />
import { IconButtonProps } from '@mui/material/IconButton';
export declare const DataFilterButton: (props: IconButtonProps) => JSX.Element;
interface Props {
    title: string;
}
export declare const Filter: ({ title }: Props) => JSX.Element;
export default function useRowFilter(): {
    isOpen: boolean;
    close: () => void;
    open: () => void;
};
export {};
