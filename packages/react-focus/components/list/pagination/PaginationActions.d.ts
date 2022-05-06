import PropTypes from 'prop-types';
import * as React from 'react';
declare const _default: React.MemoExoticComponent<{
    (props: any): JSX.Element;
    /**
     * PaginationActions propTypes are copied over from material-ui’s
     * TablePaginationActions propTypes. See
     * https://github.com/mui-org/material-ui/blob/869692ecf3812bc4577ed4dde81a9911c5949695/packages/material-ui/src/TablePaginationActions/TablePaginationActions.js#L53-L85
     * for reference.
     */
    propTypes: {
        backIconButtonProps: PropTypes.Requireable<object>;
        count: PropTypes.Validator<number>;
        nextIconButtonProps: PropTypes.Requireable<object>;
        onPageChange: PropTypes.Validator<(...args: any[]) => any>;
        page: PropTypes.Validator<number>;
        rowsPerPage: PropTypes.Validator<number>;
        color: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        theme: PropTypes.Requireable<object>;
    };
    defaultProps: {
        color: string;
        size: string;
    };
}>;
export default _default;
