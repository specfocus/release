"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTable = exports.DatagridClasses = void 0;
const material_1 = require("@mui/material");
const PREFIX = 'RaDatagrid';
exports.DatagridClasses = {
    table: `${PREFIX}-table`,
    thead: `${PREFIX}-thead`,
    tbody: `${PREFIX}-tbody`,
    headerRow: `${PREFIX}-headerRow`,
    headerCell: `${PREFIX}-headerCell`,
    checkbox: `${PREFIX}-checkbox`,
    row: `${PREFIX}-row`,
    clickableRow: `${PREFIX}-clickableRow`,
    rowEven: `${PREFIX}-rowEven`,
    rowOdd: `${PREFIX}-rowOdd`,
    rowCell: `${PREFIX}-rowCell`,
    expandHeader: `${PREFIX}-expandHeader`,
    expandIconCell: `${PREFIX}-expandIconCell`,
    expandIcon: `${PREFIX}-expandIcon`,
    expanded: `${PREFIX}-expanded`,
};
exports.StyledTable = (0, material_1.styled)(material_1.Table)(({ theme }) => ({
    [`&.${exports.DatagridClasses.table}`]: {
        tableLayout: 'auto',
    },
    [`& .${exports.DatagridClasses.thead}`]: {},
    [`& .${exports.DatagridClasses.tbody}`]: {},
    [`& .${exports.DatagridClasses.headerRow}`]: {},
    [`& .${exports.DatagridClasses.headerCell}`]: {
        position: 'sticky',
        top: 0,
        zIndex: 2,
        backgroundColor: theme.palette.background.paper,
        '&:first-of-type': {
            borderTopLeftRadius: theme.shape.borderRadius,
        },
        '&:last-child': {
            borderTopRightRadius: theme.shape.borderRadius,
        },
    },
    [`& .${exports.DatagridClasses.checkbox}`]: {},
    [`& .${exports.DatagridClasses.row}`]: {},
    [`& .${exports.DatagridClasses.clickableRow}`]: {
        cursor: 'pointer',
    },
    [`& .${exports.DatagridClasses.rowEven}`]: {},
    [`& .${exports.DatagridClasses.rowOdd}`]: {},
    [`& .${exports.DatagridClasses.rowCell}`]: {},
    [`& .${exports.DatagridClasses.expandHeader}`]: {
        padding: 0,
        width: theme.spacing(6),
    },
    [`& .${exports.DatagridClasses.expandIconCell}`]: {
        width: theme.spacing(6),
    },
    [`& .${exports.DatagridClasses.expandIcon}`]: {
        padding: theme.spacing(1),
        transform: 'rotate(-90deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    [`& .${exports.DatagridClasses.expandIcon}.${exports.DatagridClasses.expanded}`]: {
        transform: 'rotate(0deg)',
    },
}));
