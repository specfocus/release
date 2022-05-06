"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const TranslatedChip_1 = __importDefault(require("../../../components/TranslatedChip"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const StringSchema_1 = require("../../../lib/StringSchema");
const ArrayField = ({ api, dependencies, dispatch, name, readonly, schema, value, variant }) => {
    var _a, _b;
    console.log('ARRAY field', name, schema.items.type, variant);
    const props = (0, react_1.useMemo)(
    // @ts-ignore
    () => (value || []).map((item, index) => {
        const props = { label: JSON.stringify(item), value: item };
        if (schema.items.type === StringSchema_1.STRING_TYPE) {
            Object.assign(props, { label: String(item) });
        }
        if (variant === 'chip') {
            Object.assign(props, { variant: 'outlined' });
        }
        if (readonly) {
        }
        else {
            Object.assign(props, {
                onDelete: () => dispatch({ type: 'REMOVE_ITEM', form: api, name, index, value, values: dependencies })
            });
        }
        return props;
    }), [readonly, (_a = schema.items) === null || _a === void 0 ? void 0 : _a.type, value, variant]);
    switch ((_b = schema.items) === null || _b === void 0 ? void 0 : _b.type) {
        case StringSchema_1.STRING_TYPE:
            switch (variant) {
                case 'chip':
                    return ((0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ container: true, direction: "row", spacing: 1 }, { children: props.map((props, idx) => (
                        // @ts-ignore
                        (0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true }, { children: (0, jsx_runtime_1.jsx)(TranslatedChip_1.default, Object.assign({}, props), void 0) }), String(idx)))) }), void 0));
            }
            break;
    }
    return ((0, jsx_runtime_1.jsx)("ul", { children: 
        // @ts-ignore
        (value || []).map((item, idx) => ((0, jsx_runtime_1.jsx)("li", { children: JSON.stringify(item) }, String(idx)))) }, void 0));
};
exports.default = ArrayField;
