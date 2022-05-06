"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecord = exports.useCreateController = void 0;
const react_1 = require("react");
// @ts-ignore
const query_string_1 = require("query-string");
const react_router_dom_1 = require("react-router-dom");
const checkMinimumRequiredProps_1 = require("../checkMinimumRequiredProps");
const dataProvider_1 = require("../../dataProvider");
const sideEffect_1 = require("../../sideEffect");
const saveModifiers_1 = require("../saveModifiers");
const i18n_1 = require("../../i18n");
const useVersion_1 = __importDefault(require("../useVersion"));
const actions_1 = require("../../actions");
const __1 = require("../..");
/**
 * Prepare data for the Create view
 *
 * @param {Object} props The props passed to the Create component.
 *
 * @return {Object} controllerProps Fetched data and callbacks for the Create view
 *
 * @example
 *
 * import { useCreateController } from '../app';
 * import CreateView from './CreateView';
 *
 * const MyCreate = props => {
 *     const controllerProps = useCreateController(props);
 *     return <CreateView {...controllerProps} {...props} />;
 * }
 */
const useCreateController = (props) => {
    (0, checkMinimumRequiredProps_1.useCheckMinimumRequiredProps)('Create', ['basePath', 'resource'], props);
    const { basePath, hasEdit, hasShow, record = {}, successMessage, onSuccess, onFailure, transform, } = props;
    const resource = (0, __1.useResourceContext)(props);
    const location = (0, react_router_dom_1.useLocation)();
    const translate = (0, i18n_1.useTranslate)();
    const notify = (0, sideEffect_1.useNotify)();
    const redirect = (0, sideEffect_1.useRedirect)();
    const recordToUse = (0, exports.getRecord)(location, record);
    const version = (0, useVersion_1.default)();
    if (process.env.NODE_ENV !== 'production' && successMessage) {
        console.log('<Create successMessage> prop is deprecated, use the onSuccess prop instead.');
    }
    const { onSuccessRef, setOnSuccess, onFailureRef, setOnFailure, transformRef, setTransform, } = (0, saveModifiers_1.useSaveModifiers)({ onSuccess, onFailure, transform });
    const [create, { loading: saving }] = (0, dataProvider_1.useCreate)(resource);
    const save = (0, react_1.useCallback)((data, redirectTo = 'list', { onSuccess: onSuccessFromSave, onFailure: onFailureFromSave, transform: transformFromSave, } = {}) => Promise.resolve(transformFromSave
        ? transformFromSave(data)
        : transformRef.current
            ? transformRef.current(data)
            : data).then(data => create({ payload: { data } }, {
        action: actions_1.CRUD_CREATE,
        onSuccess: onSuccessFromSave
            ? onSuccessFromSave
            : onSuccessRef.current
                ? onSuccessRef.current
                : ({ data: newRecord }) => {
                    notify(successMessage ||
                        'ra.notification.created', 'info', {
                        smart_count: 1,
                    });
                    redirect(redirectTo, basePath, newRecord.id, newRecord);
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
                },
    })), [
        transformRef,
        create,
        onSuccessRef,
        onFailureRef,
        notify,
        successMessage,
        redirect,
        basePath,
    ]);
    const getResourceLabel = (0, __1.useGetResourceLabel)();
    const defaultTitle = translate('ra.page.create', {
        name: getResourceLabel(resource, 1),
    });
    return {
        loading: false,
        loaded: true,
        saving,
        defaultTitle,
        // @ts-ignore
        onFailureRef,
        // @ts-ignore
        onSuccessRef,
        // @ts-ignore
        transformRef,
        save,
        setOnSuccess,
        setOnFailure,
        setTransform,
        resource,
        basePath,
        record: recordToUse,
        redirect: getDefaultRedirectRoute(hasShow, hasEdit),
        version,
    };
};
exports.useCreateController = useCreateController;
const getRecord = ({ state, search }, record = {}) => {
    if (state && state.record) {
        return state.record;
    }
    if (search) {
        try {
            const searchParams = (0, query_string_1.parse)(search);
            if (searchParams.source) {
                if (Array.isArray(searchParams.source)) {
                    console.error(`Failed to parse location search parameter '${search}'. To pre-fill some fields in the Create form, pass a stringified source parameter (e.g. '?source={"title":"foo"}')`);
                    return;
                }
                return JSON.parse(searchParams.source);
            }
        }
        catch (e) {
            console.error(`Failed to parse location search parameter '${search}'. To pre-fill some fields in the Create form, pass a stringified source parameter (e.g. '?source={"title":"foo"}')`);
        }
    }
    return record;
};
exports.getRecord = getRecord;
const getDefaultRedirectRoute = (hasShow, hasEdit) => {
    if (hasEdit) {
        return 'edit';
    }
    if (hasShow) {
        return 'show';
    }
    return 'list';
};
