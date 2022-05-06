"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatusForArrayInput = exports.getSelectedReferencesStatus = exports.REFERENCES_STATUS_EMPTY = exports.REFERENCES_STATUS_INCOMPLETE = exports.REFERENCES_STATUS_READY = exports.getStatusForInput = void 0;
const isMatchingReferencesError = (matchingReferences) => matchingReferences && matchingReferences.error !== undefined;
const getStatusForInput = ({ input, matchingReferences, referenceRecord, translate = x => x, }) => {
    const matchingReferencesError = isMatchingReferencesError(matchingReferences)
        ? translate(matchingReferences.error, {
            _: matchingReferences.error,
        })
        : null;
    const selectedReferenceError = input.value && !referenceRecord
        ? translate('ra.input.references.single_missing', {
            _: 'ra.input.references.single_missing',
        })
        : null;
    return {
        waiting: (input.value && selectedReferenceError && !matchingReferences) ||
            (!input.value && !matchingReferences),
        error: (input.value &&
            selectedReferenceError &&
            matchingReferencesError) ||
            (!input.value && matchingReferencesError)
            ? input.value
                ? selectedReferenceError
                : matchingReferencesError
            : null,
        warning: selectedReferenceError || matchingReferencesError,
        choices: Array.isArray(matchingReferences)
            ? matchingReferences
            : [referenceRecord].filter(choice => choice),
    };
};
exports.getStatusForInput = getStatusForInput;
exports.REFERENCES_STATUS_READY = 'REFERENCES_STATUS_READY';
exports.REFERENCES_STATUS_INCOMPLETE = 'REFERENCES_STATUS_INCOMPLETE';
exports.REFERENCES_STATUS_EMPTY = 'REFERENCES_STATUS_EMPTY';
const getSelectedReferencesStatus = (input, referenceRecords) => !input.value || input.value.length === referenceRecords.length
    ? exports.REFERENCES_STATUS_READY
    : referenceRecords.length > 0
        ? exports.REFERENCES_STATUS_INCOMPLETE
        : exports.REFERENCES_STATUS_EMPTY;
exports.getSelectedReferencesStatus = getSelectedReferencesStatus;
const getStatusForArrayInput = ({ input, matchingReferences, referenceRecords, translate = x => x, }) => {
    // selectedReferencesDataStatus can be "empty" (no data was found for references from input.value)
    // or "incomplete" (Not all of the reference data was found)
    // or "ready" (all references data was found or there is no references from input.value)
    const selectedReferencesDataStatus = (0, exports.getSelectedReferencesStatus)(input, referenceRecords);
    const matchingReferencesError = isMatchingReferencesError(matchingReferences)
        ? translate(matchingReferences.error, {
            _: matchingReferences.error,
        })
        : null;
    return {
        waiting: (!matchingReferences &&
            input.value &&
            selectedReferencesDataStatus === exports.REFERENCES_STATUS_EMPTY) ||
            (!matchingReferences && !input.value),
        error: matchingReferencesError &&
            (!input.value ||
                (input.value &&
                    selectedReferencesDataStatus === exports.REFERENCES_STATUS_EMPTY))
            ? translate('ra.input.references.all_missing', {
                _: 'ra.input.references.all_missing',
            })
            : null,
        warning: matchingReferencesError ||
            (input.value &&
                selectedReferencesDataStatus !== exports.REFERENCES_STATUS_READY)
            ? matchingReferencesError ||
                translate('ra.input.references.many_missing', {
                    _: 'ra.input.references.many_missing',
                })
            : null,
        choices: Array.isArray(matchingReferences)
            ? matchingReferences
            : referenceRecords,
    };
};
exports.getStatusForArrayInput = getStatusForArrayInput;
