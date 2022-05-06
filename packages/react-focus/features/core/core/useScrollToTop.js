"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScrollToTop = void 0;
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
/**
 * Scroll the window to top when the target location contains the _scrollToTop state
 *
 * @see BaseAppRouter where it's enabled by default
 *
 * @example // usage in buttons
 * import { Link } from 'react-router-dom';
 * import { Button } from '@mui/material';
 *
 * const FooButton = () => (
 *     <Button
 *         component={Link}
 *         to={'/foo'}
 *         state={{ _scrollToTop: true }}
 *     >
 *         Go to foo
 *     </Button>
 * );
 */
const useScrollToTop = () => {
    const location = (0, react_router_dom_1.useLocation)();
    // const history = useNavigate</*{ _scrollToTop?: boolean; }>();
    (0, react_1.useEffect)(() => {
        // location.listen((location, action) => {
        if (
        // action !== 'POP' &&
        // location.state?._scrollToTop &&
        typeof window != 'undefined') {
            window.scrollTo(0, 0);
        }
    }, [location]);
};
exports.useScrollToTop = useScrollToTop;
