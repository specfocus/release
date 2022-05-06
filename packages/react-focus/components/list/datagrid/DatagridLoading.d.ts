import PropTypes from 'prop-types';
import * as React from 'react';
import { FC, ReactElement } from 'react';
import { Identifier, Record } from '../../../features/core';
export interface DatagridLoadingProps {
    className?: string;
    expand?: ReactElement | FC<{
        basePath: string;
        id: Identifier;
        record: Record;
        resource: string;
    }>;
    hasBulkActions?: boolean;
    nbChildren: number;
    nbFakeLines?: number;
    size?: 'small' | 'medium';
}
declare const _default: React.MemoExoticComponent<{
    ({ className, expand, hasBulkActions, nbChildren, nbFakeLines, size, }: DatagridLoadingProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        expand: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.ReactComponentLike>;
        hasBulkActions: PropTypes.Requireable<boolean>;
        nbChildren: PropTypes.Requireable<number>;
        nbFakeLines: PropTypes.Requireable<number>;
        size: PropTypes.Requireable<string>;
    };
}>;
export default _default;
