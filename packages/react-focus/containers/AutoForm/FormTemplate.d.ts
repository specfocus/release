/// <reference types="react" />
import PropTypes from 'prop-types';
interface FormTemplateProps {
    data: any;
    handleSubmit: any;
    validationSchema: any;
    initialValues: any;
    handleCancel: any;
    cancel: any;
    submitButtonLabel?: any;
    cancelButtonLabel?: any;
    cancelDisabled?: any;
    pages?: boolean;
}
declare function FormTemplate({ data, handleSubmit, validationSchema, initialValues, handleCancel, cancel, submitButtonLabel, cancelButtonLabel, cancelDisabled }: FormTemplateProps): JSX.Element;
declare namespace FormTemplate {
    var propTypes: {
        data: PropTypes.Validator<any[]>;
        validationSchema: PropTypes.Validator<any>;
        handleSubmit: PropTypes.Validator<(...args: any[]) => any>;
        initialValues: PropTypes.Validator<any>;
        handleCancel: PropTypes.Requireable<(...args: any[]) => any>;
    };
    var defaultProps: {
        cancel: boolean;
    };
}
export default FormTemplate;
