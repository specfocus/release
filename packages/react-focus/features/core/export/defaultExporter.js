"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dist_1 = __importDefault(require("jsonexport/dist"));
const downloadCSV_1 = __importDefault(require("./downloadCSV"));
const defaultExporter = (data, _, __, resource) => (0, dist_1.default)(data, (err, csv) => (0, downloadCSV_1.default)(csv, resource));
exports.default = defaultExporter;
