/// <reference types="react" />
import { Theme } from '@mui/material/styles/createTheme';
import { TranslatedItemLinkProps } from '../../../components/TranslatedListItem';
import { TranslatedListItemLinkProps } from '../../../components/TranslatedListItemLink';
export declare const DrawerHeader: import("@emotion/styled-base").StyledComponent<import("@mui/system").MUIStyledCommonProps<Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const Drawer: import("@emotion/styled-base").StyledComponent<import("@mui/material/Drawer").DrawerProps & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const Item: import("@emotion/styled-base").StyledComponent<TranslatedItemLinkProps & {
    children?: import("react").ReactNode;
} & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const LinkItem: import("@emotion/styled-base").StyledComponent<TranslatedListItemLinkProps & {
    children?: import("react").ReactNode;
} & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
export declare const Subheader: import("@emotion/styled-base").StyledComponent<{
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material/ListSubheader").ListSubheaderClasses>;
    color?: "inherit" | "default" | "primary";
    disableGutters?: boolean;
    disableSticky?: boolean;
    inset?: boolean;
    sx?: import("@mui/material/styles").SxProps<Theme>;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Pick<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "key" | keyof import("react").LiHTMLAttributes<HTMLLIElement>> & {
    ref?: import("react").Ref<HTMLLIElement>;
}, "children" | keyof import("@mui/material/OverridableComponent").CommonProps | "color" | "sx" | "inset" | "disableGutters" | "disableSticky"> & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
