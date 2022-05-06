"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@apollo/client");
const gql_1 = __importStar(require("features/data/gql"));
const app_1 = require("../../../app");
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const getGqlResource = (resource) => {
    switch (resource) {
        case 'customers':
            return 'Customer';
        case 'categories':
            return 'Category';
        case 'commands':
            return 'Command';
        case 'products':
            return 'Product';
        case 'reviews':
            return 'Review';
        case 'invoices':
            return 'Invoice';
        default:
            throw new Error(`Unknown resource ${resource}`);
    }
};
const customBuildQuery = (introspectionResults) => {
    const buildQuery = (0, gql_1.buildQuery)(introspectionResults);
    return (type, resource, params) => {
        if (type === app_1.DELETE) {
            return {
                query: (0, graphql_tag_1.default) `mutation remove${resource}($id: ID!) {
                    remove${resource}(id: $id)
                }`,
                variables: { id: params.id },
                parseResponse: ({ data }) => {
                    if (data[`remove${resource}`]) {
                        return { data: { id: params.id } };
                    }
                    throw new Error(`Could not delete ${resource}`);
                },
            };
        }
        return buildQuery(type, resource, params);
    };
};
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    const dataProvider = yield (0, gql_1.default)({
        clientOptions: {
            uri: 'http://localhost:4000/graphql',
            cache: new client_1.InMemoryCache()
        },
        introspection: {
            operationNames: {
                [app_1.DELETE]: (resource) => `remove${resource.name}`,
            },
        },
        buildQuery: customBuildQuery,
    });
    return (type, resource, params) => {
        return dataProvider(type, getGqlResource(resource), params);
    };
});
