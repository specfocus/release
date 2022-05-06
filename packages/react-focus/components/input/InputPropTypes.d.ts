import PropTypes from 'prop-types';
/**
 * Common PropTypes for all ../../app inputs
 */
declare const InputPropTypes: {
    label: PropTypes.Requireable<string | boolean>;
    resource: PropTypes.Requireable<string>;
    source: PropTypes.Requireable<string>;
};
export default InputPropTypes;
