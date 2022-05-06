"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fakerest_1 = __importDefault(require("fakerest"));
const fetch_mock_1 = __importDefault(require("fetch-mock"));
const db_1 = __importDefault(require("../../../examples/db"));
exports.default = () => {
    const data = (0, db_1.default)({ serializeDate: true });
    const restServer = new fakerest_1.default.FetchServer('http://localhost:4000');
    if (window) {
        window.restServer = restServer; // give way to update data in the console
    }
    restServer.init(data);
    restServer.toggleLogging(); // logging is off by default, enable it
    fetch_mock_1.default.mock('begin:http://localhost:4000', restServer.getHandler());
    return () => fetch_mock_1.default.restore();
};
