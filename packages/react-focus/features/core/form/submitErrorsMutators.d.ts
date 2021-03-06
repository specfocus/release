/**
 * Fork of the https://github.com/ignatevdev/final-form-submit-errors
 *
 * In ../../app, errors might be objects with `message` and `args` properties which
 * are used for translation.
 * The original final-form-submit-errors mutator was considering those errors as form
 * nested field like `name.message` and `name.args`.
 * This version detects those objects.
 */
export declare function resetSubmitErrors([{ prev, current }]: [{
    prev: any;
    current: any;
}], state: any, { getIn, setIn }: {
    getIn: any;
    setIn: any;
}): void;
export declare function clean(obj: any): any;
export declare function flatten(obj: any): any;
export declare const isValidationError: (obj: any) => any;
export declare function isObjectEmpty(obj: any): boolean;
declare const _default: {
    resetSubmitErrors: typeof resetSubmitErrors;
};
export default _default;
