import * as React from 'react';
import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ButtonProps } from './Button';
import { BulkActionProps } from '../types';
declare const BulkDeleteWithConfirmButton: {
    (props: BulkDeleteWithConfirmButtonProps): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        classes: PropTypes.Requireable<object>;
        confirmTitle: PropTypes.Requireable<string>;
        confirmContent: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<string>;
        resource: PropTypes.Requireable<string>;
        selectedIds: PropTypes.Requireable<any[]>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
    };
    defaultProps: {
        label: string;
    };
};
export interface BulkDeleteWithConfirmButtonProps extends BulkActionProps, ButtonProps {
    confirmContent?: React.ReactNode;
    confirmTitle?: string;
    icon?: ReactElement;
}
export default BulkDeleteWithConfirmButton;
