"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Link_1 = __importDefault(require("@mui/material/Link"));
const styles_1 = require("@mui/styles");
const Table_1 = __importDefault(require("@mui/material/Table"));
const TableBody_1 = __importDefault(require("@mui/material/TableBody"));
const TableCell_1 = __importDefault(require("@mui/material/TableCell"));
const TableHead_1 = __importDefault(require("@mui/material/TableHead"));
const TableRow_1 = __importDefault(require("@mui/material/TableRow"));
const Title_1 = __importDefault(require("./Title"));
// Generate Order Data
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
function preventDefault(event) {
    event.preventDefault();
}
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));
function Orders() {
    const classes = useStyles();
    return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)(Title_1.default, { children: "Recent Orders" }, void 0), (0, jsx_runtime_1.jsxs)(Table_1.default, Object.assign({ size: "small" }, { children: [(0, jsx_runtime_1.jsx)(TableHead_1.default, { children: (0, jsx_runtime_1.jsxs)(TableRow_1.default, { children: [(0, jsx_runtime_1.jsx)(TableCell_1.default, { children: "Date" }, void 0), (0, jsx_runtime_1.jsx)(TableCell_1.default, { children: "Name" }, void 0), (0, jsx_runtime_1.jsx)(TableCell_1.default, { children: "Ship To" }, void 0), (0, jsx_runtime_1.jsx)(TableCell_1.default, { children: "Payment Method" }, void 0), (0, jsx_runtime_1.jsx)(TableCell_1.default, Object.assign({ align: "right" }, { children: "Sale Amount" }), void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(TableBody_1.default, { children: rows.map((row) => ((0, jsx_runtime_1.jsxs)(TableRow_1.default, { children: [(0, jsx_runtime_1.jsx)(TableCell_1.default, { children: row.date }, void 0), (0, jsx_runtime_1.jsx)(TableCell_1.default, { children: row.name }, void 0), (0, jsx_runtime_1.jsx)(TableCell_1.default, { children: row.shipTo }, void 0), (0, jsx_runtime_1.jsx)(TableCell_1.default, { children: row.paymentMethod }, void 0), (0, jsx_runtime_1.jsx)(TableCell_1.default, Object.assign({ align: "right" }, { children: row.amount }), void 0)] }, row.id))) }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.seeMore }, { children: (0, jsx_runtime_1.jsx)(Link_1.default, Object.assign({ color: "primary", href: "#", onClick: preventDefault }, { children: "See more orders" }), void 0) }), void 0)] }, void 0));
}
exports.default = Orders;
