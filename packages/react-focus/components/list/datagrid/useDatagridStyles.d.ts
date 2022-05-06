/// <reference types="react" />
export declare const DatagridClasses: {
    table: string;
    thead: string;
    tbody: string;
    headerRow: string;
    headerCell: string;
    checkbox: string;
    row: string;
    clickableRow: string;
    rowEven: string;
    rowOdd: string;
    rowCell: string;
    expandHeader: string;
    expandIconCell: string;
    expandIcon: string;
    expanded: string;
};
export declare const StyledTable: import("@emotion/styled-base").StyledComponent<{
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").TableClasses>;
    padding?: "none" | "normal" | "checkbox";
    size?: "small" | "medium";
    stickyHeader?: boolean;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme>;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Pick<import("react").DetailedHTMLProps<import("react").TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, "key" | keyof import("react").TableHTMLAttributes<HTMLTableElement>> & {
    ref?: import("react").Ref<HTMLTableElement>;
}, "children" | keyof import("@mui/material/OverridableComponent").CommonProps | "sx" | "padding" | "size" | "stickyHeader"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
