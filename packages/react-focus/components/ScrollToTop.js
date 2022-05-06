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
exports.ScrollToTop = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styles_1 = require("@mui/styles");
const Fab_1 = __importDefault(require("@mui/material/Fab"));
// import NavigationIcon from '@mui/icons-material/Navigation';
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    root: {
        display: "flex",
        border: "none",
        bottom: 40,
        flexDirection: "row",
        height: 40,
        justifyContent: "center",
        outline: "none",
        position: "fixed",
        transition: "opacity 1s ease-in-out",
        width: "100%",
        zIndex: 2
    },
    active: {
        transform: "matrix(0.95, 0, 0, 0.95, 0, 0)"
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));
function scrollToTop(smooth = false) {
    if (smooth) {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    else {
        document.documentElement.scrollTop = 0;
    }
}
const ScrollToTop = (_a) => {
    var { top = 20, 
    // className = styles["scroll-to-top"],
    color = "black", smooth = false, viewBox = "0 0 256 256", svgPath = "M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z" } = _a, props = __rest(_a, ["top", "color", "smooth", "viewBox", "svgPath"]);
    const [visible, setVisible] = (0, react_1.useState)(false);
    const onScroll = () => {
        setVisible(document.documentElement.scrollTop > top);
    };
    (0, react_1.useEffect)(() => {
        document.addEventListener("scroll", onScroll);
        // Remove listener on unmount
        return () => document.removeEventListener("scroll", onScroll);
    }, []);
    const classes = useStyles();
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.root }, { children: visible && ((0, jsx_runtime_1.jsx)(Fab_1.default, Object.assign({ onClick: () => scrollToTop(smooth), variant: "extended" }, props, { children: "up" }), void 0)) }), void 0));
};
exports.ScrollToTop = ScrollToTop;
