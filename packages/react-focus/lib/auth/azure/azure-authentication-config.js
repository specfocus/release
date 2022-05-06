"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphConfig = exports.loginRequest = exports.MSAL_CONFIG = void 0;
const msal_browser_1 = require("@azure/msal-browser");
const AzureActiveDirectoryAppClientId = process.env.REACT_APP_AZURE_ACTIVE_DIRECTORY_APP_CLIENT_ID;
const AzureActiveDirectoryAppClientIdRedirectUri = process.env.REACT_APP_AZURE_REDIRECT_URI;
exports.MSAL_CONFIG = {
    auth: {
        authority: "https://login.microsoftonline.com/common/",
        clientId: AzureActiveDirectoryAppClientId,
        redirectUri: AzureActiveDirectoryAppClientIdRedirectUri
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case msal_browser_1.LogLevel.Error:
                        console.error(message);
                        return;
                    case msal_browser_1.LogLevel.Info:
                        console.info(message);
                        return;
                    case msal_browser_1.LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case msal_browser_1.LogLevel.Warning:
                        console.warn(message);
                        return;
                }
            },
        },
    },
};
/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
exports.loginRequest = {
    scopes: ["User.Read"]
};
/**
* Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
* https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
*/
exports.graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
