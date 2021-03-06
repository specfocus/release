import { Identifier, Record } from '../types';
declare type RedirectToFunction = (basePath?: string, id?: Identifier, data?: Record, state?: object) => string;
export declare type RedirectionSideEffect = string | boolean | RedirectToFunction;
/**
 * Hook for Redirection Side Effect
 *
 * @example
 *
 * const redirect = useRedirect();
 * // redirect to list view
 * redirect('list', '/posts');
 * // redirect to edit view
 * redirect('edit', '/posts', 123);
 * // redirect to edit view with state data
 * redirect('edit', '/comment', 123, {}, { record: { post_id: record.id } });
 * // do not redirect (resets the record form)
 * redirect(false);
 * // redirect to the result of a function
 * redirect((redirectTo, basePath, id, data) => ...)
 */
declare const useRedirect: () => (redirectTo: RedirectionSideEffect, basePath?: string, id?: Identifier, data?: Partial<Record>, state?: object) => void;
export default useRedirect;
