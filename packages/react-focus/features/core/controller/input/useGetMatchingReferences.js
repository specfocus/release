"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const accumulateActions_1 = require("../../actions/accumulateActions");
const __1 = require("../..");
const reducer_1 = require("../../reducer");
const hooks_1 = require("../../util/hooks");
const defaultReferenceSource = (resource, source) => `${resource}@${source}`;
exports.default = (props) => {
    const { reference, referenceSource = defaultReferenceSource, source, filter, pagination, sort, id, } = props;
    const resource = (0, __1.useResourceContext)(props);
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, hooks_1.useDeepCompareEffect)(() => {
        dispatch((0, accumulateActions_1.crudGetMatchingAccumulate)(reference, referenceSource(resource, source), pagination, sort, filter));
    }, [
        dispatch,
        filter,
        reference,
        referenceSource,
        resource,
        source,
        pagination,
        sort,
    ]);
    const matchingReferences = useGetMatchingReferenceSelector({
        referenceSource,
        reference,
        resource,
        source,
        id,
    });
    if (!matchingReferences) {
        return {
            loading: true,
            error: null,
            matchingReferences: null,
        };
    }
    if (matchingReferences.error) {
        return {
            loading: false,
            matchingReferences: null,
            error: matchingReferences.error,
        };
    }
    return {
        loading: false,
        error: null,
        matchingReferences,
    };
};
const useGetMatchingReferenceSelector = ({ referenceSource, reference, resource, source, id, }) => {
    const getMatchingReferences = (0, react_1.useCallback)(state => {
        const referenceResource = (0, reducer_1.getReferenceResource)(state, {
            reference,
        });
        if (
        // resources are registered
        Object.keys(state.admin.resources).length > 0 &&
            // no registered resource matching the reference
            !referenceResource) {
            throw new Error(`Cannot fetch a reference to "${reference}" (unknown resource).
You must add <Resource name="${reference}" /> as child of <Admin> to use "${reference}" in a reference`);
        }
        const possibleValues = (0, reducer_1.getPossibleReferenceValues)(state, {
            referenceSource,
            resource,
            source,
        });
        return (0, reducer_1.getPossibleReferences)(referenceResource, possibleValues, [
            id,
        ]);
    }, [referenceSource, reference, resource, source, id]);
    return (0, react_redux_1.useSelector)(getMatchingReferences);
};
