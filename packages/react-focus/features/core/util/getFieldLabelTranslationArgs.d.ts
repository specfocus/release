interface Args {
    label?: string;
    resource?: string;
    source?: string;
}
declare type TranslationArguments = [string, any?];
declare const _default: (options?: Args) => TranslationArguments;
/**
 * Returns an array of arguments to use with the translate function for the label of a field.
 * The label will be the one specified by the label prop or one computed from the resource and source props.
 *
 * Usage:
 *  <span>
 *      {translate(...getFieldLabelTranslationArgs({ label, resource, source }))}
 *  </span>
 */
export default _default;
