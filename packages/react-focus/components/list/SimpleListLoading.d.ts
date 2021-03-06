/// <reference types="react" />
import PropTypes from 'prop-types';
import { ListProps } from '@mui/material/List';
interface Props {
    classes?: Record<'tertiary', string>;
    className?: string;
    hasLeftAvatarOrIcon?: boolean;
    hasRightAvatarOrIcon?: boolean;
    hasSecondaryText?: boolean;
    hasTertiaryText?: boolean;
    nbFakeLines?: number;
}
declare const SimpleListLoading: {
    (props: Props & ListProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        hasLeftAvatarOrIcon: PropTypes.Requireable<boolean>;
        hasRightAvatarOrIcon: PropTypes.Requireable<boolean>;
        hasSecondaryText: PropTypes.Requireable<boolean>;
        hasTertiaryText: PropTypes.Requireable<boolean>;
        nbFakeLines: PropTypes.Requireable<number>;
    };
};
export default SimpleListLoading;
