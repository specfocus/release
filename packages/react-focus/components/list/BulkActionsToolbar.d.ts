import { ReactNode } from 'react';
import PropTypes from 'prop-types';
declare const BulkActionsToolbar: {
    (props: BulkActionsToolbarProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        label: PropTypes.Requireable<string>;
    };
};
export interface BulkActionsToolbarProps {
    children?: ReactNode;
    label?: string;
}
export default BulkActionsToolbar;
