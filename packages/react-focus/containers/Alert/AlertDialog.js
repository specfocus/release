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
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const Dialog_1 = __importDefault(require("@mui/material/Dialog"));
const DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
const DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
const DialogContentText_1 = __importDefault(require("@mui/material/DialogContentText"));
const DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
const Slide_1 = __importDefault(require("@mui/material/Slide"));
const Transition = react_1.default.forwardRef(function Transition(_a, ref) {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (0, jsx_runtime_1.jsx)(Slide_1.default, Object.assign({ direction: "up", ref: ref }, props, { children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "children" }, void 0) }), void 0);
});
function AlertDialogSlide() {
    const [open, setOpen] = react_1.default.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ variant: "outlined", color: "primary", onClick: handleClickOpen }, { children: "Slide in alert dialog" }), void 0), (0, jsx_runtime_1.jsxs)(Dialog_1.default, Object.assign({ open: open, TransitionComponent: Transition, keepMounted: true, onClose: handleClose, "aria-labelledby": "alert-dialog-slide-title", "aria-describedby": "alert-dialog-slide-description" }, { children: [(0, jsx_runtime_1.jsx)(DialogTitle_1.default, Object.assign({ id: "alert-dialog-slide-title" }, { children: "Use Google's location service?" }), void 0), (0, jsx_runtime_1.jsx)(DialogContent_1.default, { children: (0, jsx_runtime_1.jsx)(DialogContentText_1.default, Object.assign({ id: "alert-dialog-slide-description" }, { children: "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running." }), void 0) }, void 0), (0, jsx_runtime_1.jsxs)(DialogActions_1.default, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ onClick: handleClose, color: "primary" }, { children: "Disagree" }), void 0), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ onClick: handleClose, color: "primary" }, { children: "Agree" }), void 0)] }, void 0)] }), void 0)] }, void 0));
}
exports.default = AlertDialogSlide;
