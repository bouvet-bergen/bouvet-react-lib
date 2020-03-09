import { RequestEnum } from './RequestEnum';

export default class RequestHeader {
    constructor() {
        this._accept = 'application/json';
        this._contentType = 'application/json';
        this._accessControlAllowCredentials = true;
        this._accessControlAllowOrigin = '*';
        this._cacheControl = RequestEnum.Cache.NoCache;
        this._authorization = null;
    }

    get accept() {
        return this._accept;
    }

    get contentType() {
        return this._contentType;
    }

    get accessControlAllowCredentials() {
        return this._accessControlAllowCredentials;
    }

    get accessControlAllowOrigin() {
        return this._accessControlAllowOrigin;
    }

    get cacheControl() {
        return this._cacheControl;
    }

    get authorization() {
        return this._authorization;
    }

    set accept(accept) {
        this._accept = accept;
    }

    set contentType(contentType) {
        this._contentType = contentType;
    }

    set accessControlAllowCredentials(accessControlAllowCredentials) {
        this._accessControlAllowCredentials = accessControlAllowCredentials;
    }

    set accessControlAllowOrigin(accessControlAllowOrigin) {
        this._accessControlAllowOrigin = accessControlAllowOrigin;
    }

    set cacheControl(cacheControl) {
        this._cacheControl = cacheControl;
    }

    set authorization(authorization) {
        this._authorization = authorization;
    }

    headers() {
        let headers = {
            'Accept': this._accept,
            'Content-Type': this._contentType,
            'Access-Control-Allow-Credentials': this._accessControlAllowCredentials,
            'Access-Control-Allow-Origin': this._accessControlAllowOrigin,
            'Cache-Control': this._cacheControl
        };

        if (this._authorization)
            headers.Authorization = this._authorization;

        return headers;
    }
}
