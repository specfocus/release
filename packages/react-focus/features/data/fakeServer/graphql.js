"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const json_graphql_server_1 = __importDefault(require("json-graphql-server"));
const db_1 = __importDefault(require("../../../examples/db"));
const fetch_mock_1 = __importDefault(require("fetch-mock"));
exports.default = () => {
    const data = (0, db_1.default)({ serializeDate: false });
    const restServer = (0, json_graphql_server_1.default)({ data });
    const handler = restServer.getHandler();
    const handlerWithLogs = (url, opts) => handler(url, opts).then((res) => {
        const req = JSON.parse(opts.body);
        const parsedRes = JSON.parse(res.body);
        console.groupCollapsed(`GraphQL ${req.operationName}`);
        console.group('request');
        console.log('operationName', req.operationName);
        console.log(req.query);
        console.log('variables', req.variables);
        console.groupEnd();
        console.group('response');
        console.log('data', parsedRes.data);
        console.log('errors', parsedRes.errors);
        console.groupEnd();
        console.groupEnd();
        return res;
    });
    fetch_mock_1.default.mock('begin:http://localhost:4000', handlerWithLogs);
    return () => fetch_mock_1.default.restore();
};
