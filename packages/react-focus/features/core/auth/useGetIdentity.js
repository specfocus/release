"use strict";
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
const react_1 = require("react");
const useAuthProvider_1 = __importDefault(require("./useAuthProvider"));
const hooks_1 = require("../util/hooks");
const defaultIdentity = {
    id: '',
    fullName: null,
};
/**
 * Return the current user identity by calling authProvider.getIdentity() on mount
 *
 * The return value updates according to the call state:
 *
 * - mount: { loading: true, loaded: false }
 * - success: { identity: Identity, loading: false, loaded: true }
 * - error: { error: Error, loading: false, loaded: true }
 *
 * The implementation is left to the authProvider.
 *
 * @returns The current user identity. Destructure as { identity, error, loading, loaded }.
 *
 * @example
 *
 * import { useGetIdentity, useGetOne } from '../app';
 *
 * const PostDetail = ({ id }) => {
 *     const { data: post, loading: postLoading } = useGetOne('posts', id);
 *     const { identity, loading: identityLoading } = useGetIdentity();
 *     if (postLoading || identityLoading) return <>Loading...</>;
 *     if (!post.lockedBy || post.lockedBy === identity.id) {
 *         // post isn't locked, or is locked by me
 *         return <PostEdit post={post} />
 *     } else {
 *         // post is locked by someone else and cannot be edited
 *         return <PostShow post={post} />
 *     }
 * }
 */
const useGetIdentity = () => {
    const [state, setState] = (0, hooks_1.useSafeSetState)({
        loading: true,
        loaded: false,
    });
    const authProvider = (0, useAuthProvider_1.default)();
    (0, react_1.useEffect)(() => {
        if (authProvider && typeof authProvider.getIdentity === 'function') {
            const callAuthProvider = () => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    const identity = yield authProvider.getIdentity();
                    setState({
                        loading: false,
                        loaded: true,
                        identity: identity || defaultIdentity,
                    });
                }
                catch (error) {
                    setState({
                        loading: false,
                        loaded: true,
                        error,
                    });
                }
            });
            callAuthProvider();
        }
        else {
            // fallback for pre-3.9 authProviders, which had no getIdentity method
            // FIXME to be removed for the next major
            setState({
                loading: false,
                loaded: true,
                identity: defaultIdentity,
            });
        }
    }, [authProvider, setState]);
    return state;
};
exports.default = useGetIdentity;
