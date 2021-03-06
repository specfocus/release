/// <reference types="react" />
import { Translate } from '../../types';
import { CreateProps, CreateControllerProps } from './useCreateController';
interface CreateControllerComponentProps extends CreateControllerProps {
    translate: Translate;
}
interface Props extends CreateProps {
    children: (params: CreateControllerComponentProps) => JSX.Element;
}
/**
 * Render prop version of the useCreateController hook
 *
 * @see useCreateController
 * @example
 *
 * const CreateView = () => <div>...</div>
 * const MyCreate = props => (
 *     <CreateController {...props}>
 *         {controllerProps => <CreateView {...controllerProps} {...props} />}
 *     </CreateController>
 * );
 */
export declare const CreateController: ({ children, ...props }: Props) => JSX.Element;
export {};
