import { default as RequestHeader } from './RequestHeader';
import { RequestEnum } from './RequestEnum';

export default class Request {
    constructor() {
        this._cache = RequestEnum.Cache.NoCache;
        this._method = '';
        this._requestHeader = new RequestHeader();
        this._body = null;
        this._mode = RequestEnum.Mode.Cors;
        this._credentials = RequestEnum.Credentials.SameOrigin;
        this._redirect = RequestEnum.Redirect.Follow;
        this._referrerPolicy = RequestEnum.ReferrerPolicy.NoReferrer;
        this._baseUrl = '';
    }

    get cache() {
        return this._cache;
    }

    get method() {
        return this._method;
    }

    get requestHeader() {
        return this._requestHeader;
    }

    get body() {
        return this._body;
    }

    get cache() {
        return this._cache;
    }

    get mode() {
        return this._mode;
    }

    get credentials() {
        return this._credentials;
    }

    get redirect() {
        return this._redirect;
    }

    get referrerPolicy() {
        return this._referrerPolicy;
    }
    
    get baseUrl() {
        return this._baseUrl;
    }

    set method(method) {
        this._method = method;
    }

    set requestHeader(requestHeader) {
        this._requestHeader = requestHeader;
    }

    set body(body) {
        this._body = body;
    }

    set mode(mode) {
        this._mode = mode;
    }

    set credentials(credentials) {
        this._credentials = credentials;
    }

    set redirect(redirect) {
        this._redirect = redirect;
    }

    set redirect(referrerPolicy) {
        this._referrerPolicy = referrerPolicy;
    }
    
    set baseUrl(baseUrl) {
        this._baseUrl = baseUrl;
    }

    request = () => {
        let request = {
            cache: this._cache,
            method: this._method,
            headers: this._requestHeader.headers(),
            mode: this._mode,
            credentials: this._credentials,
            redirect: this._redirect,
            referrerPolicy: this._referrerPolicy
        };

        if (this.body)
            request.body = this._body;

        return request;
    }

    get = (url) => {
        this.method = 'GET';
        return this.call(url);
    }

    post = (url, body) => {
        this.method = 'POST';
        if (body)
            this.body = JSON.stringify(body);
        return this.call(url);
    }

    call = (url) => {
        let baseUrl = this._baseUrl;
        if(!baseUrl && baseUrl.length <= 0)
        baseUrl = process.env.REACT_APP_WEBCLIENT_BASE_URL != null ? process.env.REACT_APP_WEBCLIENT_BASE_URL : '';
        
        if (baseUrl.length > 0 && baseUrl.substring(baseUrl.length - 1) !== '/') {
            baseUrl += '/';
        }

        const fullUrl = baseUrl + url;

        return fetch(fullUrl, this.request())
            .then(response => {
                return new Promise((resolve, reject) => {
                    if (response.status === 401) {
                        reject(response);
                    }
                    if (response.status === 500 || response.status === 404) {
                        reject(response);
                    }
                    if ((response.status >= 200 && response.status < 300) || response.status === 400) {
                        var contentType = response.headers.get('content-type');
                        if (contentType && contentType.indexOf('application/json') !== -1) {
                            response.json().then(json => {
                                resolve(json);
                            });
                        } else {
                            return ({})
                        }
                    }
                });
            });
    }
}