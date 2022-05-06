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
const app_1 = require("../../../app");
const fakeServer_1 = __importDefault(require("../fakeServer"));
exports.default = (type) => {
    // The fake servers require to generate data, which can take some time.
    // Here we start the server initialization but we don't wait for it to finish
    let dataProviderPromise = getDataProvider(type);
    // Instead we return this proxy which may be called immediately by ../../app if the
    // user is already signed-in. In this case, we simply wait for the dataProvider promise
    // to complete before requesting it the data.
    // If the user isn't signed in, we already started the server initialization while they see
    // the login page. By the time they come back to the admin as a signed-in user,
    // the fake server will be initialized.
    const dataProviderWithGeneratedData = new Proxy(defaultDataProvider, {
        get(_, name) {
            return (resource, params) => {
                return dataProviderPromise.then(dataProvider => {
                    // We have to convert the dataProvider here otherwise the proxy would try to intercept the promise resolution
                    if (typeof dataProvider === 'function') {
                        return (0, app_1.convertLegacyDataProvider)(dataProvider)[name.toString()](resource, params);
                    }
                    return dataProvider[name.toString()](resource, params);
                });
            };
        },
    });
    return dataProviderWithGeneratedData;
};
const getDataProvider = (type) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, fakeServer_1.default)(process.env.REACT_APP_DATA_PROVIDER || '');
    /**
     * This demo can work with either a fake REST server, or a fake GraphQL server.
     *
     * To avoid bundling both libraries, the dataProvider and fake server factories
     * use the import() function, so they are asynchronous.
     */
    if (type === 'graphql') {
        return Promise.resolve().then(() => __importStar(require('./graphql'))).then(factory => factory.default());
    }
    return Promise.resolve().then(() => __importStar(require('./rest'))).then(provider => provider.default);
});
const defaultDataProvider = {
    // @ts-ignore
    create: () => Promise.resolve({ data: { id: 0 } }),
    // @ts-ignore
    delete: () => Promise.resolve({ data: {} }),
    deleteMany: () => Promise.resolve({}),
    getList: () => Promise.resolve({ data: [], total: 0 }),
    getMany: () => Promise.resolve({ data: [] }),
    getManyReference: () => Promise.resolve({ data: [], total: 0 }),
    // @ts-ignore
    getOne: () => Promise.resolve({ data: {} }),
    // @ts-ignore
    update: () => Promise.resolve({ data: {} }),
    updateMany: () => Promise.resolve({}),
};
