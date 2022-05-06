import { ReactElement } from 'react';
import PropTypes from 'prop-types';
/**
 * Use any component as read-only Input, labeled just like other Inputs.
 *
 * Useful to use a Field in the Edit or Create components.
 * The child component will receive the current record.
 *
 * This component name doesn't have a typo. We had to choose between
 * the American English "Labeled", and the British English "Labelled".
 * We flipped a coin.
 *
 * @example
 * <Labeled label="Comments">
 *     <FooComponent source="title" />
 * </Labeled>
 */
declare const Labeled: {
    (props: LabeledProps): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
        className: PropTypes.Requireable<string>;
        fullWidth: PropTypes.Requireable<boolean>;
        id: PropTypes.Requireable<string>;
        input: PropTypes.Requireable<object>;
        isRequired: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
        meta: PropTypes.Requireable<object>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        record: PropTypes.Requireable<object>;
        resource: PropTypes.Requireable<string>;
        source: PropTypes.Requireable<string>;
        labelStyle: PropTypes.Requireable<object>;
    };
};
export interface LabeledProps {
    children: ReactElement;
    className?: string;
    fullWidth?: boolean;
    id?: string;
    input?: any;
    isRequired?: boolean;
    label?: string | ReactElement;
    meta?: any;
    resource?: string;
    source?: string;
    [key: string]: any;
}
export default Labeled;
