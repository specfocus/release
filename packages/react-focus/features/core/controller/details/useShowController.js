"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useShowController = void 0;
const useVersion_1 = __importDefault(require("../useVersion"));
const checkMinimumRequiredProps_1 = require("../checkMinimumRequiredProps");
const dataProvider_1 = require("../../dataProvider");
const i18n_1 = require("../../i18n");
const sideEffect_1 = require("../../sideEffect");
const actions_1 = require("../../actions");
const __1 = require("../..");
/**
 * Prepare data for the Show view
 *
 * @param {Object} props The props passed to the Show component.
 *
 * @return {Object} controllerProps Fetched data and callbacks for the Show view
 *
 * @example
 *
 * import { useShowController } from '../app';
 * import ShowView from './ShowView';
 *
 * const MyShow = props => {
 *     const controllerProps = useShowController(props);
 *     return <ShowView {...controllerProps} {...props} />;
 * }
 */
const useShowController = (props) => {
    (0, checkMinimumRequiredProps_1.useCheckMinimumRequiredProps)('Show', ['basePath', 'resource'], props);
    const { basePath, hasCreate, hasEdit, hasList, hasShow, id } = props;
    const resource = (0, __1.useResourceContext)(props);
    const translate = (0, i18n_1.useTranslate)();
    const notify = (0, sideEffect_1.useNotify)();
    const redirect = (0, sideEffect_1.useRedirect)();
    const refresh = (0, sideEffect_1.useRefresh)();
    const version = (0, useVersion_1.default)();
    const { data: record, loading, loaded, refetch } = (0, dataProvider_1.useGetOne)(resource, id, {
        action: actions_1.CRUD_GET_ONE,
        onFailure: () => {
            notify('ra.notification.item_doesnt_exist', 'warning');
            redirect('list', basePath);
            refresh();
        },
    });
    const getResourceLabel = (0, __1.useGetResourceLabel)();
    const defaultTitle = translate('ra.page.show', {
        name: getResourceLabel(resource, 1),
        id,
        record,
    });
    return {
        loading,
        loaded,
        defaultTitle,
        resource,
        basePath,
        record,
        refetch,
        hasCreate,
        hasEdit,
        hasList,
        hasShow,
        version,
    };
};
exports.useShowController = useShowController;
