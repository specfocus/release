"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subheader = exports.LinkItem = exports.Item = exports.Drawer = exports.DrawerHeader = void 0;
const Drawer_1 = __importDefault(require("@mui/material/Drawer"));
const ListSubheader_1 = __importDefault(require("@mui/material/ListSubheader"));
const styles_1 = require("@mui/material/styles");
const TranslatedListItem_1 = __importDefault(require("../../../components/TranslatedListItem"));
const TranslatedListItemLink_1 = __importDefault(require("../../../components/TranslatedListItemLink"));
const openedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    })
});
const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.down('sm')]: {
        width: theme.spacing(0),
    },
});
exports.DrawerHeader = (0, styles_1.styled)('div')(({ theme }) => (Object.assign({ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: theme.spacing(0, 1) }, theme.mixins.toolbar)));
exports.Drawer = (0, styles_1.styled)(Drawer_1.default, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => (Object.assign(Object.assign({ flexShink: 0, whiteSpace: 'nowrap', boxSizing: 'border-box', overflowX: 'hidden' }, (open && Object.assign(Object.assign({}, openedMixin(theme)), { '& .MuiDrawer-paper': openedMixin(theme) }))), (!open && Object.assign(Object.assign({}, closedMixin(theme)), { '& .MuiDrawer-paper': closedMixin(theme) })))));
exports.Item = (0, styles_1.styled)(TranslatedListItem_1.default)(({ theme }) => ({
    color: theme.palette.text.secondary
}));
exports.LinkItem = (0, styles_1.styled)(TranslatedListItemLink_1.default)(({ theme }) => {
    const backgroundColor = theme.palette.mode !== 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark;
    return {
        color: theme.palette.text.secondary,
        '&.Mui-selected': {
            color: theme.palette.getContrastText(backgroundColor),
            backgroundColor,
        }
    };
});
exports.Subheader = (0, styles_1.styled)(ListSubheader_1.default)(({ theme }) => ({
    display: 'block',
    justifyContent: 'flex-start',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    overflow: 'hidden',
    paddingLeft: 0,
    paddingRight: 0,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
}));
