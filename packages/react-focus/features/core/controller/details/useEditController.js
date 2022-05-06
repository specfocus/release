"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEditController = void 0;
const react_1 = require("react");
const useVersion_1 = __importDefault(require("../useVersion"));
const checkMinimumRequiredProps_1 = require("../checkMinimumRequiredProps");
const sideEffect_1 = require("../../sideEffect");
const dataProvider_1 = require("../../dataProvider");
const i18n_1 = require("../../i18n");
const actions_1 = require("../../actions");
const saveModifiers_1 = require("../saveModifiers");
const __1 = require("../..");
/**
 * Prepare data for the Edit view
 *
 * @param {Object} props The props passed to the Edit component.
 *
 * @return {Object} controllerProps Fetched data and callbacks for the Edit view
 *
 * @example
 *
 * import { useEditController } from '../app';
 * import EditView from './EditView';
 *
 * const MyEdit = props => {
 *     const controllerProps = useEditController(props);
 *     return <EditView {...controllerProps} {...props} />;
 * }
 */
const useEditController = (props) => {
    (0, checkMinimumRequiredProps_1.useCheckMinimumRequiredProps)('Edit', ['basePath', 'resource'], props);
    const { basePath, hasCreate, hasEdit, hasList, hasShow, id, successMessage, 
    // @deprecated use mutationMode: undoable instead
    undoable = true, onSuccess, onFailure, mutationMode = undoable ? 'undoable' : undefined, transform, } = props;
    const resource = (0, __1.useResourceContext)(props);
    const translate = (0, i18n_1.useTranslate)();
    const notify = (0, sideEffect_1.useNotify)();
    const redirect = (0, sideEffect_1.useRedirect)();
    const refresh = (0, sideEffect_1.useRefresh)();
    const version = (0, useVersion_1.default)();
    if (process.env.NODE_ENV !== 'production' && successMessage) {
        console.log('<Edit successMessage> prop is deprecated, use the onSuccess prop instead.');
    }
    const { onSuccessRef, setOnSuccess, onFailureRef, setOnFailure, transformRef, setTransform, } = (0, saveModifiers_1.useSaveModifiers)({ onSuccess, onFailure, transform });
    const { data: record, loading, loaded, refetch } = (0, dataProvider_1.useGetOne)(resource, id, {
        action: actions_1.CRUD_GET_ONE,
        onFailure: () => {
            notify('ra.notification.item_doesnt_exist', 'warning');
            redirect('list', basePath);
            refresh();
        },
    });
    const getResourceLabel = (0, __1.useGetResourceLabel)();
    const defaultTitle = translate('ra.page.edit', {
        name: getResourceLabel(resource, 1),
        id,
        record,
    });
    const [update, { loading: saving }] = (0, dataProvider_1.useUpdate)(resource, id, {}, // set by the caller
    record);
    const save = (0, react_1.useCallback)((data, redirectTo = DefaultRedirect, { onSuccess: onSuccessFromSave, onFailure: onFailureFromSave, transform: transformFromSave, } = {}) => Promise.resolve(transformFromSave
        ? transformFromSave(data)
        : transformRef.current
            ? transformRef.current(data)
            : data).then(data => update({ payload: { data } }, {
        action: actions_1.CRUD_UPDATE,
        onSuccess: onSuccessFromSave
            ? onSuccessFromSave
            : onSuccessRef.current
                ? onSuccessRef.current
                : () => {
                    notify(successMessage ||
                        'ra.notification.updated', 'info', {
                        smart_count: 1,
                    }, mutationMode === 'undoable');
                    redirect(redirectTo, basePath, data.id, data);
                },
        onFailure: onFailureFromSave
            ? onFailureFromSave
            : onFailureRef.current
                ? onFailureRef.current
                : error => {
                    notify(typeof error === 'string'
                        ? error
                        : error.message ||
                            'ra.notification.http_error', 'warning', {
                        _: typeof error === 'string'
                            ? error
                            : error && error.message
                                ? error.message
                                : undefined,
                    });
                    if (mutationMode === 'undoable' ||
                        mutationMode === 'pessimistic') {
                        refresh();
                    }
                },
        mutationMode,
    })), [
        transformRef,
        update,
        onSuccessRef,
        onFailureRef,
        notify,
        successMessage,
        redirect,
        basePath,
        refresh,
        mutationMode,
    ]);
    return {
        loading,
        loaded,
        saving,
        defaultTitle,
        hasCreate,
        hasEdit,
        hasList,
        hasShow,
        onSuccessRef,
        onFailureRef,
        transformRef,
        save,
        setOnSuccess,
        setOnFailure,
        setTransform,
        refetch,
        resource,
        basePath,
        record,
        redirect: DefaultRedirect,
        version,
    };
};
exports.useEditController = useEditController;
const DefaultRedirect = 'list';
