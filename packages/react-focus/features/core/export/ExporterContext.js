"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const defaultExporter_1 = __importDefault(require("./defaultExporter"));
const ExporterContext = (0, react_1.createContext)(defaultExporter_1.default);
ExporterContext.displayName = 'ExporterContext';
exports.default = ExporterContext;
