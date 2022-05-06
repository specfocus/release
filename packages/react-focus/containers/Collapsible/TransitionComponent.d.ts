/// <reference types="react" />
import { CollapseProps } from '@mui/material/Collapse';
import PropTypes from 'prop-types';
declare function TransitionComponent(props: CollapseProps): JSX.Element;
declare namespace TransitionComponent {
    var propTypes: {
        /**
         * Show the component; triggers the enter or exit states
         */
        in: PropTypes.Requireable<boolean>;
    };
}
export default TransitionComponent;
