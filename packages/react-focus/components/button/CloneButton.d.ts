import * as React from 'react';
import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Record } from '../../features/core';
import { ButtonProps } from './Button';
export declare const CloneButton: {
    (props: CloneButtonProps): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        label: PropTypes.Requireable<string>;
        record: PropTypes.Requireable<any>;
    };
};
interface Props {
    basePath?: string;
    record?: Record;
    icon?: ReactElement;
    scrollToTop?: boolean;
}
export declare type CloneButtonProps = Props & ButtonProps;
declare const _default: React.MemoExoticComponent<{
    (props: CloneButtonProps): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        label: PropTypes.Requireable<string>;
        record: PropTypes.Requireable<any>;
    };
}>;
export default _default;
