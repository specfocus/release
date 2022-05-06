"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@mui/styles");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    buttons: {
        // bottom: theme.spacing(2),
        display: 'flex',
        justifyContent: 'flex-end',
        // left: theme.spacing(2),
        // position: 'absolute',
        // right: theme.spacing(2)
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        '&[type=reset]': {
            marginRight: 'auto'
        }
    },
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
    toolbar: {
        display: 'block',
        height: theme.spacing(8),
        justifyContent: 'stretch',
    }
}));
exports.default = useStyles;
