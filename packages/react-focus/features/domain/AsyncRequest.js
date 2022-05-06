"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const Autocomplete_1 = __importDefault(require("@mui/material/Autocomplete"));
const CircularProgress_1 = __importDefault(require("@mui/material/CircularProgress"));
function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}
function Asynchronous() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;
    React.useEffect(() => {
        let active = true;
        if (!loading) {
            return undefined;
        }
        (() => __awaiter(this, void 0, void 0, function* () {
            yield sleep(1e3); // For demo purposes.
            if (active) {
                setOptions([...topFilms]);
            }
        }))();
        return () => {
            active = false;
        };
    }, [loading]);
    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);
    return ((0, jsx_runtime_1.jsx)(Autocomplete_1.default, { id: "asynchronous-demo", sx: { width: 300 }, open: open, onOpen: () => {
            setOpen(true);
        }, onClose: () => {
            setOpen(false);
        }, isOptionEqualToValue: (option, value) => option.title === value.title, getOptionLabel: (option) => option.title, options: options, loading: loading, renderInput: (params) => ((0, jsx_runtime_1.jsx)(TextField_1.default, Object.assign({}, params, { label: "Asynchronous", InputProps: Object.assign(Object.assign({}, params.InputProps), { endAdornment: ((0, jsx_runtime_1.jsxs)(React.Fragment, { children: [loading ? (0, jsx_runtime_1.jsx)(CircularProgress_1.default, { color: "inherit", size: 20 }, void 0) : null, params.InputProps.endAdornment] }, void 0)) }) }), void 0)) }, void 0));
}
exports.default = Asynchronous;
// Top films as rated by IMDb users. http://www.imdb.com/chart/top
const topFilms = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
];
