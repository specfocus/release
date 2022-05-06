/// <reference types="react" />
import { IconButtonProps } from '@mui/material/IconButton';
export declare const DataSortOrderButton: (props: IconButtonProps) => JSX.Element;
interface Props {
    title: string;
}
export declare const SortOrder: ({ title }: Props) => JSX.Element;
export default function useSortOrder(): {
    isOpen: boolean;
    close: () => void;
    open: () => void;
};
export {};
