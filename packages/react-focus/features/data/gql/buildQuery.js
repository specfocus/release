"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildQueryFactory = void 0;
const buildVariables_1 = __importDefault(require("./buildVariables"));
const buildGqlQuery_1 = __importDefault(require("./buildGqlQuery"));
const getResponseParser_1 = __importDefault(require("./getResponseParser"));
const buildQueryFactory = (buildVariablesImpl = buildVariables_1.default, buildGqlQueryImpl = buildGqlQuery_1.default, getResponseParserImpl = getResponseParser_1.default) => (introspectionResults) => {
    const knownResources = introspectionResults.resources.map(r => r.type.name);
    const buildQuery = (raFetchType, resourceName, params) => {
        const resource = introspectionResults.resources.find(r => r.type.name === resourceName);
        if (!resource) {
            throw new Error(`Unknown resource ${resourceName}. Make sure it has been declared on your server side schema. Known resources are ${knownResources.join(', ')}`);
        }
        const queryType = resource[raFetchType];
        if (!queryType) {
            throw new Error(`No query or mutation matching fetch type ${raFetchType} could be found for resource ${resource.type.name}`);
        }
        const variables = buildVariablesImpl(introspectionResults)(resource, raFetchType, params, queryType);
        const query = buildGqlQueryImpl(introspectionResults)(resource, raFetchType, queryType, variables);
        const parseResponse = getResponseParserImpl(introspectionResults)(raFetchType, resource, queryType);
        return {
            query,
            variables,
            parseResponse,
        };
    };
    return buildQuery;
};
exports.buildQueryFactory = buildQueryFactory;
exports.default = (0, exports.buildQueryFactory)(buildVariables_1.default, buildGqlQuery_1.default, getResponseParser_1.default);
