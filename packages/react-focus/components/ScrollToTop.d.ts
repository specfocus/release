import React from "react";
declare type Props = React.HTMLAttributes<HTMLButtonElement> & {
    top?: number;
    smooth?: boolean;
    svgPath?: string;
    viewBox?: string;
    component?: any;
};
export declare const ScrollToTop: ({ top, color, smooth, viewBox, svgPath, ...props }: Props) => JSX.Element;
export {};
