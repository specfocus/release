"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.model = exports.Model2 = void 0;
const record_1 = require("../record");
const string_1 = require("../string");
const Property_1 = require("./field/Property");
class Model2 {
    constructor(schema) {
        this.schema = schema;
        this.domains = {};
        this.properties = {};
        if (schema && schema.properties) {
            Object.entries(schema.properties).forEach(([key, val]) => {
                const prop = new Property_1.Property(val);
                Object.assign(this.properties, { [key]: prop });
            });
        }
    }
}
exports.Model2 = Model2;
exports.model = {
    area: 'data',
    name: 'Model',
    hint: 'Object type descriptor',
    fields: {
        area: { type: string_1.STRING },
        name: { type: string_1.STRING },
        hint: { type: string_1.STRING },
        fields: { type: [record_1.RECORD, record_1.DICTIONARY] }
    }
};
