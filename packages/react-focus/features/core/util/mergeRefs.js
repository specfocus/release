"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeRefs = void 0;
// https://github.com/gregberge/react-merge-refs
function mergeRefs(refs) {
    return value => {
        refs.forEach(ref => {
            if (typeof ref === 'function') {
                ref(value);
            }
            else if (ref != null) {
                ref.current = value;
            }
        });
    };
}
exports.mergeRefs = mergeRefs;
