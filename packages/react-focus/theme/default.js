"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
export interface AppComponents extends Components {
    Sidebar?: {
        width?: number;
        closedWidth?: number;
    };
}

export interface AppThemeOptions extends Omit<ThemeOptions, 'components'> {
    components: AppComponents;
}
*/
const defaultThemeOptions = {
    palette: {
        primary: {
            light: '#053974',
            main: '#053974',
            dark: '#053974',
            contrastText: '#fff',
        },
        /*
        secondary: {
            light: '#6ec6ff',
            main: '#2196f3',
            dark: '#0069c0',
            contrastText: '#fff',
        }
        */
    },
    typography: {
        // fontSize: 14,
        h5: {
            fontSize: '1.4em',
            fontWeight: 400,
        },
        h6: {
            fontSize: '1.2em',
            fontWeight: 400,
        }
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                // disable ripple for perf reasons
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    '&:hover:active::after': {
                        // recreate a static ripple color
                        // use the currentColor to make it work both for outlined and contained buttons
                        // but to dim the background without dimming the text,
                        // put another element on top with a limited opacity
                        content: '""',
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        backgroundColor: 'currentColor',
                        opacity: 0.3,
                        borderRadius: 'inherit',
                    },
                },
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    '&$disabled': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                },
            }
        }
    }
};
exports.default = defaultThemeOptions;
