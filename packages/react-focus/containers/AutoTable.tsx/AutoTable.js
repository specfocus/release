"use strict";
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
const react_1 = require("react");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_2 = require("react");
const Table_1 = __importDefault(require("@mui/material/Table"));
const TableBody_1 = __importDefault(require("@mui/material/TableBody"));
const TableCell_1 = __importDefault(require("@mui/material/TableCell"));
const TableHead_1 = __importDefault(require("@mui/material/TableHead"));
const TableRow_1 = __importDefault(require("@mui/material/TableRow"));
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
}
const rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
    createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];
function AutoTable(_a) {
    var { initialState = { orderBy: 'id' }, schema = {
        domain: 'EXAMPLE',
        fields: {
            id: { type: 'number' },
            date: { type: 'string' },
            name: { type: 'string' },
            shipTo: { type: 'string' },
            paymentMethod: { type: 'string' },
            amount: { type: 'number' }
        },
        head: ['id', 'date', 'name', 'shipTo', 'paymentMethod', 'amount'],
        type: 'object'
    } } = _a, otherProps = __rest(_a, ["initialState", "schema"]);
    const [state, setState] = (0, react_2.useState)(initialState);
    const columns = schema.head || Object.keys(schema.fields);
    const title = (name) => name;
    const cellProps = columns.reduce((acc, col) => {
        const props = {
            key: col
        };
        if (schema.fields[col].type === 'number') {
            Object.assign(props, { align: 'right' });
        }
        return Object.assign(acc, { [col]: props });
    }, {});
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(Table_1.default, Object.assign({ size: "small" }, otherProps, { children: [(0, jsx_runtime_1.jsx)(TableHead_1.default, { children: (0, jsx_runtime_1.jsx)(TableRow_1.default, { children: columns.map(col => ((0, jsx_runtime_1.jsx)(TableCell_1.default, Object.assign({}, cellProps[col], { children: title(col) }), void 0))) }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(TableBody_1.default, { children: rows.map((row) => ((0, jsx_runtime_1.jsx)(TableRow_1.default, { children: columns.map((col, index) => ((0, react_1.createElement)(TableCell_1.default, Object.assign({}, cellProps[col], { key: `${col}-${index}` }), row[col]))) }, row.id))) }, void 0)] }), void 0) }, void 0));
}
exports.default = AutoTable;
