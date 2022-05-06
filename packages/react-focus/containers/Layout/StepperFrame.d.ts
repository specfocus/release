/// <reference types="react" />
import type { ContentFrameProps } from './ContentFrame';
export declare const STEPPER_BACK = "STEPPER_BACK";
export declare const STEPPER_NEXT = "STEPPER_NEXT";
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"button" | "header" | "content" | "container" | "buttons" | "stepper">;
export interface StepperFrameProps extends ContentFrameProps {
    sections: Record<string, {
        title: string;
        permisions: string[];
    }>;
    reducer: (state: any, action: any) => any;
}
export default function StepperFrame({ children, maxWidth, reducer, sections, ...props }: StepperFrameProps): JSX.Element;
