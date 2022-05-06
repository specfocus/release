"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnConfig = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const BooleanSchema_1 = require("../../../lib/BooleanSchema");
const NumberSchema_1 = require("../../../lib/NumberSchema");
const StringSchema_1 = require("../../../lib/StringSchema");
const app_1 = require("../../../app");
const DomainManager_1 = require("../../../lib/DomainManager");
const BooleanColumnConfig = (name, schema) => {
    return {
        name,
        element: ((0, jsx_runtime_1.jsx)(app_1.BooleanField, { source: name }, void 0))
    };
};
const NumberColumnConfig = (name, schema) => {
    const domain = DomainManager_1.StaticDomainManager.instance.query(schema);
    /*
    if (domain && domain.integer === true && domain.reference) {
      //
      return {
        name,
        element: (<ReferenceField label={name} source={name} reference={domain.reference} />)
      };
  
    }
    */
    return {
        name,
        element: ((0, jsx_runtime_1.jsx)(app_1.NumberField, { label: name, source: name }, void 0))
    };
};
const StringColumnConfig = (name, schema) => {
    const domain = DomainManager_1.StaticDomainManager.instance.query(schema);
    return {
        name,
        element: ((0, jsx_runtime_1.jsx)(app_1.TextField, { source: name }, void 0))
    };
};
const ColumnConfig = (name, schema) => {
    switch (schema.type) {
        case BooleanSchema_1.BOOLEAN_TYPE:
            return BooleanColumnConfig(name, schema);
        case NumberSchema_1.NUMBER_TYPE:
            return NumberColumnConfig(name, schema);
        case StringSchema_1.STRING_TYPE:
            return StringColumnConfig(name, schema);
    }
    return null;
};
exports.ColumnConfig = ColumnConfig;
