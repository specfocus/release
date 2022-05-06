import PropTypes from 'prop-types';
import { HtmlHTMLAttributes, ReactNode } from 'react';
import { FormRenderProps } from 'react-final-form';
export declare const FilterForm: {
    (props: FilterFormProps): JSX.Element;
    propTypes: {
        resource: PropTypes.Requireable<string>;
        filters: PropTypes.Validator<PropTypes.ReactNodeLike[]>;
        displayedFilters: PropTypes.Requireable<object>;
        hideFilter: PropTypes.Requireable<(...args: any[]) => any>;
        initialValues: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
    };
};
export interface FilterFormProps extends Omit<FormRenderProps, 'initialValues'>, Omit<HtmlHTMLAttributes<HTMLFormElement>, 'children'> {
    className?: string;
    resource?: string;
    filterValues: any;
    hideFilter: (filterName: string) => void;
    setFilters: (filters: any, displayedFilters: any) => void;
    displayedFilters: any;
    filters: ReactNode[];
    initialValues?: any;
    margin?: 'none' | 'normal' | 'dense';
    variant?: 'standard' | 'outlined' | 'filled';
}
export declare const mergeInitialValuesWithDefaultValues: (initialValues: any, filters: any) => any;
declare const EnhancedFilterForm: (props: any) => JSX.Element;
export default EnhancedFilterForm;
