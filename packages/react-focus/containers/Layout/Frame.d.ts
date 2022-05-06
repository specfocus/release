/// <reference types="react" />
import { ContainerProps } from '@mui/material/Container';
import { AppFrame } from '../../app/AppStack';
export interface FrameProps extends AppFrame, Pick<ContainerProps, 'children' | "maxWidth"> {
    name: string;
}
export default function Frame({ children, name }: FrameProps): JSX.Element;
