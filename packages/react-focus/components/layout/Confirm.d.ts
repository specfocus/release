import * as React from 'react';
import { MouseEventHandler } from 'react';
import PropTypes, { ReactComponentLike } from 'prop-types';
/**
 * Confirmation dialog
 *
 * @example
 * <Confirm
 *     isOpen={true}
 *     title="Delete Item"
 *     content="Are you sure you want to delete this item?"
 *     confirm="Yes"
 *     confirmColor="primary"
 *     ConfirmIcon=ActionCheck
 *     CancelIcon=AlertError
 *     cancel="Cancel"
 *     onConfirm={() => { // do something }}
 *     onClose={() => { // do something }}
 * />
 */
declare const Confirm: {
    (props: ConfirmProps): JSX.Element;
    propTypes: {
        cancel: PropTypes.Requireable<string>;
        confirm: PropTypes.Requireable<string>;
        confirmColor: PropTypes.Requireable<string>;
        ConfirmIcon: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        CancelIcon: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        content: PropTypes.Validator<PropTypes.ReactNodeLike>;
        isOpen: PropTypes.Requireable<boolean>;
        loading: PropTypes.Requireable<boolean>;
        onClose: PropTypes.Validator<(...args: any[]) => any>;
        onConfirm: PropTypes.Validator<(...args: any[]) => any>;
        title: PropTypes.Validator<string>;
    };
    defaultProps: {
        cancel: string;
        confirm: string;
        confirmColor: string;
        ConfirmIcon: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
            muiName: string;
        };
        CancelIcon: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
            muiName: string;
        };
        isOpen: boolean;
    };
};
export interface ConfirmProps {
    cancel?: string;
    confirm?: string;
    confirmColor?: string;
    ConfirmIcon?: ReactComponentLike;
    CancelIcon?: ReactComponentLike;
    content: React.ReactNode;
    isOpen?: boolean;
    loading?: boolean;
    onClose: MouseEventHandler;
    onConfirm: MouseEventHandler;
    title: string;
    translateOptions?: object;
}
export default Confirm;
