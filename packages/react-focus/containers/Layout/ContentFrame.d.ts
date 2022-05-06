/// <reference types="react" />
import { ContainerProps } from '@mui/material/Container';
import { FrameProps } from './Frame';
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"container">;
export interface ContentFrameProps extends FrameProps {
    maxWidth: ContainerProps['maxWidth'];
}
export default function ContentFrame({ children, maxWidth, ...props }: ContentFrameProps): JSX.Element;
