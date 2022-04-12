"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toposort_1 = require("../../graph/toposort");
const property_expr_1 = require("../../object/property-expr");
const Reference_1 = __importDefault(require("../Reference"));
const isSchema_1 = __importDefault(require("./isSchema"));
function sortFields(fields, excludedEdges = []) {
    let edges = [];
    let nodes = new Set();
    let excludes = new Set(excludedEdges.map(([a, b]) => `${a}-${b}`));
    function addNode(depPath, key) {
        let node = (0, property_expr_1.split)(depPath)[0];
        nodes.add(node);
        if (!excludes.has(`${key}-${node}`))
            edges.push([key, node]);
    }
    for (const key of Object.keys(fields)) {
        let value = fields[key];
        nodes.add(key);
        if (Reference_1.default.isRef(value) && value.isSibling)
            addNode(value.path, key);
        else if ((0, isSchema_1.default)(value) && 'deps' in value)
            value.deps.forEach((path) => addNode(path, key));
    }
    return (0, toposort_1.array)(Array.from(nodes), edges).reverse();
}
exports.default = sortFields;
