"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const FileInput_1 = __importDefault(require("./FileInput"));
const PREFIX = 'RaImageInput';
const classes = {
    root: `${PREFIX}-root`,
    dropZone: `${PREFIX}-dropZone`,
    preview: `${PREFIX}-preview`,
    removeButton: `${PREFIX}-removeButton`,
};
const StyledFileInput = (0, styles_1.styled)(FileInput_1.default)(({ theme }) => ({
    [`& .${classes.root}`]: { width: '100%' },
    [`& .${classes.dropZone}`]: {
        background: theme.palette.background.default,
        cursor: 'pointer',
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.getContrastText(theme.palette.background.default),
    },
    [`& .${classes.preview}`]: {
        display: 'inline-block',
    },
    [`& .${classes.removeButton}`]: {
        display: 'inline-block',
        position: 'relative',
        float: 'left',
        '& button': {
            position: 'absolute',
            top: theme.spacing(1),
            right: theme.spacing(1),
            minWidth: theme.spacing(2),
            opacity: 0,
        },
        '&:hover button': {
            opacity: 1,
        },
    },
}));
const ImageInput = (props) => {
    return ((0, jsx_runtime_1.jsx)(StyledFileInput, Object.assign({ labelMultiple: "ra.input.image.upload_several", labelSingle: "ra.input.image.upload_single", classes: classes }, props), void 0));
};
exports.default = ImageInput;
