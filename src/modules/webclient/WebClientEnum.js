export const WebClientEnum = {
    Cache: {
        Default: 'default',
        NoStore: 'no-store',
        Reload: 'reload',
        NoCache: 'no-cache',
        ForceCache: 'force-cache',
        OnlyIfCached: 'only-if-cached',
    },
    Mode: {
        SameOrigin: 'same-origin',
        Cors: 'cors',
        NoCors: 'no-cors',
        Navigate: 'navigate',
        Websocket: 'websocket'
    },
    Credentials: {
        Omit: 'omit',
        SameOrigin: "same-origin",
        Include: 'include'
    },
    Redirect: {
        Follow: 'follow',
        Error: 'error',
        Manual: 'manual'
    },
    ReferrerPolicy: {
        Empty: "",
        NoReferrer: "no-referrer",
        NoReferrerWhenDowngrade: "no-referrer-when-downgrade",
        SameOrigin: "same-origin",
        Origin: "origin",
        StrictOrign: "strict-origin",
        OriginWhenCrossOrigin: "origin-when-cross-origin",
        StrictOriginWhenCrossOrigin: "strict-origin-when-cross-origin",
        UnsafeUrl: "unsafe-url"   
    },
    Settings: {
        TokenStorage: {
            LocalStorage: "local-storage",
            Cookie: "cookie"
        }
    }    
}