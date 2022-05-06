"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticDomainManager = void 0;
const ArraySchema_1 = require("./ArraySchema");
const BooleanSchema_1 = require("./BooleanSchema");
const NumberSchema_1 = require("./NumberSchema");
const ObjectSchema_1 = require("./ObjectSchema");
const StringSchema_1 = require("./StringSchema");
class StaticDomainManager {
    constructor(domains) {
        this.domains = domains;
    }
    query(schema) {
        var _a;
        let domain = null;
        switch (schema.type) {
            case ArraySchema_1.ARRAY_TYPE:
                if ((_a = schema.items) === null || _a === void 0 ? void 0 : _a.domain) {
                    domain = this.domains[schema.items.domain] || null;
                }
                break;
            case BooleanSchema_1.BOOLEAN_TYPE:
                break;
            case NumberSchema_1.NUMBER_TYPE:
                if (schema.domain) {
                    domain = this.domains[schema.domain] || null;
                }
                break;
            case StringSchema_1.STRING_TYPE:
                if (schema.domain) {
                    domain = this.domains[schema.domain] || null;
                }
                break;
            case ObjectSchema_1.OBJECT_TYPE:
                if (schema.domain) {
                    domain = this.domains[schema.domain] || null;
                }
                break;
            default:
                break;
        }
        return domain;
    }
    store(name, domain) {
        this.domains[name] = domain;
    }
}
exports.StaticDomainManager = StaticDomainManager;
StaticDomainManager.instance = new StaticDomainManager({});
