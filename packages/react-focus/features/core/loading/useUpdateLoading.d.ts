declare const _default: () => {
    startLoading: () => void;
    stopLoading: () => void;
};
/**
 * Update the loading count, which starts or stops the loading indicator.
 *
 * To be used to show the loading indicator when you don't use the dataProvider.
 *
 * @return {Object} startLoading and stopLoading callbacks
 *
 * @example
 * import { useUpdateLoading } from '../app'
 *
 * const MyComponent = () => {
 *      const { startLoading, stopLoading } = useUpdateLoading();
 *      useEffect(() => {
 *          startLoading();
 *          fetch('http://my.domain.api/foo')
 *              .finally(() => stopLoading());
 *      }, []);
 *      return <span>Foo</span>;
 * }
 */
export default _default;
