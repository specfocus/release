"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Drawer_1 = __importDefault(require("@mui/material/Drawer"));
const recoil_1 = require("recoil");
const state_1 = require("./state");
const react_1 = __importDefault(require("react"));
const styles_1 = require("@mui/styles");
const sidebar_1 = require("../../lib/view/sidebar");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    drawer: {
        // position: 'absolute',
        top: theme.spacing(8)
    },
    paper: {
        position: 'absolute'
    },
    slide: {}
}));
const AsideDrawer = props => {
    const active = (0, recoil_1.useRecoilValue)(state_1.atomAsideActive);
    const isSidebarDrawerOpen = (0, recoil_1.useRecoilValue)(sidebar_1.selectorSidebarDawerOpen);
    const [wasSidebarDrawerOpen, resetSidebarDrawerOpen] = react_1.default.useState(isSidebarDrawerOpen);
    const setSidebarDrawerOpen = (0, recoil_1.useSetRecoilState)(sidebar_1.selectorSidebarDawerOpen);
    react_1.default.useEffect(() => {
        if (!active && wasSidebarDrawerOpen !== isSidebarDrawerOpen) {
            resetSidebarDrawerOpen(isSidebarDrawerOpen);
        }
    }, [active, isSidebarDrawerOpen, wasSidebarDrawerOpen, resetSidebarDrawerOpen]);
    react_1.default.useEffect(() => {
        console.log({ active, wasSidebarDrawerOpen });
        if (active && wasSidebarDrawerOpen) {
            setSidebarDrawerOpen(false);
            return () => {
                setSidebarDrawerOpen(wasSidebarDrawerOpen);
            };
        }
    }, [active, wasSidebarDrawerOpen]);
    const aside = (0, recoil_1.useRecoilValue)((0, state_1.selectorAsideEntry)(active));
    const onClose = (0, recoil_1.useResetRecoilState)(state_1.atomAsideActive);
    // const { drawer, paper } = useStyles();
    return ((0, jsx_runtime_1.jsx)(Drawer_1.default, Object.assign({ anchor: "right", open: Boolean(active), onClose: onClose, PaperProps: { sx: { minWidth: 1 / 2 } }, sx: { overflowY: 'hidden' } }, props, { children: aside }), void 0));
};
exports.default = AsideDrawer;
