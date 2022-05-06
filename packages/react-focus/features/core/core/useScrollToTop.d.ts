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
export declare const useScrollToTop: () => void;
