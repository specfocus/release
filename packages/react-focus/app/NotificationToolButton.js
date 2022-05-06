"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationToolButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Badge_1 = __importDefault(require("@mui/material/Badge"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const Notifications_1 = __importDefault(require("@mui/icons-material/Notifications"));
const TranslatedTooltip_1 = __importDefault(require("../components/TranslatedTooltip"));
const NotificationToolButton = () => ((0, jsx_runtime_1.jsx)(TranslatedTooltip_1.default, Object.assign({ title: "Notifications" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.default, Object.assign({ color: "inherit" }, { children: (0, jsx_runtime_1.jsx)(Badge_1.default, Object.assign({ badgeContent: 4, color: "secondary" }, { children: (0, jsx_runtime_1.jsx)(Notifications_1.default, {}, void 0) }), void 0) }), void 0) }), void 0));
exports.NotificationToolButton = NotificationToolButton;
function default_1() {
    return ((0, jsx_runtime_1.jsx)(exports.NotificationToolButton, {}, void 0));
}
exports.default = default_1;
