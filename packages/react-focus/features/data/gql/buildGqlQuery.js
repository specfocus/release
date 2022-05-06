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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArgType = exports.buildApolloArgs = exports.buildArgs = exports.buildFragments = exports.buildFields = void 0;
const core_1 = require("../../core");
const build_1 = require("./build");
const graphql_1 = require("graphql");
const gqlTypes = __importStar(require("graphql-ast-types-browser"));
const getFinalType_1 = __importDefault(require("./getFinalType"));
const isList_1 = __importDefault(require("./isList"));
const isRequired_1 = __importDefault(require("./isRequired"));
exports.default = (introspectionResults) => (resource, raFetchMethod, queryType, variables) => {
    const { sortField, sortOrder } = variables, metaVariables = __rest(variables, ["sortField", "sortOrder"]);
    const apolloArgs = (0, exports.buildApolloArgs)(queryType, variables);
    const args = (0, exports.buildArgs)(queryType, variables);
    const metaArgs = (0, exports.buildArgs)(queryType, metaVariables);
    const fields = (0, exports.buildFields)(introspectionResults)(resource.type.fields);
    if (raFetchMethod === core_1.GET_LIST ||
        raFetchMethod === core_1.GET_MANY ||
        raFetchMethod === core_1.GET_MANY_REFERENCE) {
        return gqlTypes.document([
            gqlTypes.operationDefinition('query', gqlTypes.selectionSet([
                gqlTypes.field(gqlTypes.name(queryType.name), gqlTypes.name('items'), args, null, gqlTypes.selectionSet(fields)),
                gqlTypes.field(gqlTypes.name(`_${queryType.name}Meta`), gqlTypes.name('total'), metaArgs, null, gqlTypes.selectionSet([
                    gqlTypes.field(gqlTypes.name('count')),
                ])),
            ]), gqlTypes.name(queryType.name), apolloArgs),
        ]);
    }
    if (raFetchMethod === core_1.DELETE) {
        return gqlTypes.document([
            gqlTypes.operationDefinition('mutation', gqlTypes.selectionSet([
                gqlTypes.field(gqlTypes.name(queryType.name), gqlTypes.name('data'), args, null, gqlTypes.selectionSet(fields)),
            ]), gqlTypes.name(queryType.name), apolloArgs),
        ]);
    }
    return gqlTypes.document([
        gqlTypes.operationDefinition(build_1.QUERY_TYPES.includes(raFetchMethod) ? 'query' : 'mutation', gqlTypes.selectionSet([
            gqlTypes.field(gqlTypes.name(queryType.name), gqlTypes.name('data'), args, null, gqlTypes.selectionSet(fields)),
        ]), gqlTypes.name(queryType.name), apolloArgs),
    ]);
};
const buildFields = (introspectionResults, paths = []) => fields => fields.reduce((acc, field) => {
    const type = (0, getFinalType_1.default)(field.type);
    if (type.name.startsWith('_')) {
        return acc;
    }
    if (type.kind !== graphql_1.TypeKind.OBJECT && type.kind !== graphql_1.TypeKind.INTERFACE) {
        return [...acc, gqlTypes.field(gqlTypes.name(field.name))];
    }
    const linkedResource = introspectionResults.resources.find(r => r.type.name === type.name);
    if (linkedResource) {
        return [
            ...acc,
            gqlTypes.field(gqlTypes.name(field.name), null, null, null, gqlTypes.selectionSet([gqlTypes.field(gqlTypes.name('id'))])),
        ];
    }
    const linkedType = introspectionResults.types.find(t => t.name === type.name);
    if (linkedType && !paths.includes(linkedType.name)) {
        const possibleTypes = linkedType.possibleTypes || [];
        return [
            ...acc,
            gqlTypes.field(gqlTypes.name(field.name), null, null, null, gqlTypes.selectionSet([
                ...(0, exports.buildFragments)(introspectionResults)(possibleTypes),
                ...(0, exports.buildFields)(introspectionResults, [
                    ...paths,
                    linkedType.name,
                ])(linkedType.fields),
            ])),
        ];
    }
    // NOTE: We might have to handle linked types which are not resources but will have to be careful about
    // ending with endless circular dependencies
    return acc;
}, []);
exports.buildFields = buildFields;
const buildFragments = (introspectionResults) => (possibleTypes) => possibleTypes.reduce((acc, possibleType) => {
    const type = (0, getFinalType_1.default)(possibleType);
    const linkedType = introspectionResults.types.find(t => t.name === type.name);
    return [
        ...acc,
        gqlTypes.inlineFragment(gqlTypes.selectionSet((0, exports.buildFields)(introspectionResults)(linkedType.fields)), gqlTypes.namedType(gqlTypes.name(type.name))),
    ];
}, []);
exports.buildFragments = buildFragments;
const buildArgs = (query, variables) => {
    if (query.args.length === 0) {
        return [];
    }
    const validVariables = Object.keys(variables).filter(k => typeof variables[k] !== 'undefined');
    let args = query.args
        .filter(a => validVariables.includes(a.name))
        .reduce((acc, arg) => [
        ...acc,
        gqlTypes.argument(gqlTypes.name(arg.name), gqlTypes.variable(gqlTypes.name(arg.name))),
    ], []);
    return args;
};
exports.buildArgs = buildArgs;
const buildApolloArgs = (query, variables) => {
    if (query.args.length === 0) {
        return [];
    }
    const validVariables = Object.keys(variables).filter(k => typeof variables[k] !== 'undefined');
    let args = query.args
        .filter(a => validVariables.includes(a.name))
        .reduce((acc, arg) => {
        return [
            ...acc,
            gqlTypes.variableDefinition(gqlTypes.variable(gqlTypes.name(arg.name)), (0, exports.getArgType)(arg)),
        ];
    }, []);
    return args;
};
exports.buildApolloArgs = buildApolloArgs;
const getArgType = (arg) => {
    const type = (0, getFinalType_1.default)(arg.type);
    const required = (0, isRequired_1.default)(arg.type);
    const list = (0, isList_1.default)(arg.type);
    if (list) {
        if (required) {
            return gqlTypes.listType(gqlTypes.nonNullType(gqlTypes.namedType(gqlTypes.name(type.name))));
        }
        return gqlTypes.listType(gqlTypes.namedType(gqlTypes.name(type.name)));
    }
    if (required) {
        return gqlTypes.nonNullType(gqlTypes.namedType(gqlTypes.name(type.name)));
    }
    return gqlTypes.namedType(gqlTypes.name(type.name));
};
exports.getArgType = getArgType;
