/// <reference types="react" />
import type { ContentFrameProps } from './ContentFrame';
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"header" | "content" | "container">;
export interface TabsFrameProps extends ContentFrameProps {
    sections: Record<string, {
        title: string;
        permisions: string[];
    }>;
}
export default function TabsFrame({ children, maxWidth, sections, ...props }: TabsFrameProps): JSX.Element;
