import PropTypes from 'prop-types';
import React from 'react';
interface PagedFormTemplateProps {
    data: any;
    labels?: string[];
    validationSchema: any;
    initialValues: any;
    handleSubmit: (state: any) => void;
}
interface PagedFormTemplateState {
    currPage: number;
    size: number;
    values: any;
}
export default class PagedFormTemplate extends React.Component<PagedFormTemplateProps, PagedFormTemplateState> {
    static get propTypes(): {
        data: PropTypes.Validator<any[]>;
        validationSchema: PropTypes.Validator<any>;
        handleSubmit: PropTypes.Validator<(...args: any[]) => any>;
        initialValues: PropTypes.Validator<any>;
        labels: PropTypes.Requireable<any[]>;
    };
    constructor(props: PagedFormTemplateProps);
    next: (values: any) => void;
    previous: () => void;
    submitHelper: (values: any) => void;
    isSubset: (values: any, initialValues: any) => boolean;
    getStepContent: (index: any) => JSX.Element;
    render(): JSX.Element;
}
export {};
