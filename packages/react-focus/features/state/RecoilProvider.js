"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetRecoil = exports.setRecoil = exports.getRecoilPromise = exports.getRecoil = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const recoil_1 = require("recoil");
const _context = {};
const RecoilProvider = (props) => {
    _context.get = (0, recoil_1.useRecoilCallback)(({ snapshot }) => function (atom) {
        return snapshot.getLoadable(atom).contents;
    }, []);
    _context.getPromise = (0, recoil_1.useRecoilCallback)(({ snapshot }) => function (atom) {
        return snapshot.getPromise(atom);
    }, []);
    _context.set = (0, recoil_1.useRecoilCallback)(({ set }) => set, []);
    _context.reset = (0, recoil_1.useRecoilCallback)(({ reset }) => reset, []);
    return ((0, jsx_runtime_1.jsx)(recoil_1.RecoilRoot, Object.assign({}, props), void 0));
};
exports.default = RecoilProvider;
function getRecoil(atom) {
    return _context.get(atom);
}
exports.getRecoil = getRecoil;
function getRecoilPromise(atom) {
    return _context.getPromise(atom);
}
exports.getRecoilPromise = getRecoilPromise;
function setRecoil(atom, valOrUpdater) {
    _context.set(atom, valOrUpdater);
}
exports.setRecoil = setRecoil;
function resetRecoil(atom) {
    _context.reset(atom);
}
exports.resetRecoil = resetRecoil;
