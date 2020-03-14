import { default as RequestHeader } from './RequestHeader';
import { WebClientEnum } from './WebClientEnum';
import { default as WebClientError } from './WebClientError';

/**
 * WebClient
 * @class
 */
export default class WebClient {

    /**
     * WebClient constructor - singleton
     * @constructor
     */
    constructor() {
        if (!!WebClient.instance) {
            return WebClient.instance;
        }

        /**
         * default, no-store, reload, no-cache, force-cache, only-if-cached
         * @type {String}
         * @default no-cache
         * @public
         */
        this.cache = WebClientEnum.Cache.NoCache;

        /**
         * get, post, put, delete
         * @type {String}
         * @default empty
         * @public
         */
        this.method = '';

        /**
         * RequestHeader
         * @type {RequestHeader}
         * @default default
         * @public
         */
        this.requestHeader = new RequestHeader();

        /**
         * The request body
         * @type {Object}
         * @default null
         * @public
         */
        this.body = null;

        /**
         * cors, no-cors, navigate, websocket
         * @type {String}
         * @default cors
         * @public
         */
        this.mode = WebClientEnum.Mode.Cors;

        /**
         * omit, same-origin, include
         * @type {String}
         * @default same-origin
         * @public
         */
        this.credentials = WebClientEnum.Credentials.SameOrigin;

        /**
         * follow, error, manual
         * @type {String}
         * @default follow
         * @public
         */
        this.redirect = WebClientEnum.Redirect.Follow;

        /**
         * empty, no-referrer, no-referrer-when-downgrade, same-origin, origin, strict-origin, origin-when-cross-origin, strict-origin-when-cross-origin, unsafe-url
         * @type {String}
         * @default no-referrer
         * @public
         */
        this.referrerPolicy = WebClientEnum.ReferrerPolicy.NoReferrer;

        /**
         * The default url
         * @type {String}
         * @default empty
         * @public
         */
        this.baseUrl = '';

        /**
         * local-storage, cookie
         * @type {String}
         * @default local-storage
         * @public
         */
        this.tokenStorage = WebClientEnum.Settings.TokenStorage.LocalStorage;

        WebClient.instance = this;
        return this;
    }

    /**
     * Use this method to do a get web-request. 
     * @method
     * @example
     * const client = new WebClient();
     * @example
     * const data = yield call(client.get, '/users/3');
     * @param  {String} url The url to the get request. If baseUrl - baseUrl + url
     * @return {Promise} Returns the resolved promise
     */
    get = async (url) => {
        this.method = 'GET';
        this.body = null;
        return this.call(url);
    }

    /**
     * post
     * @method
     * @param  {String} url The url to the post request. If baseUrl - baseUrl + url
     * @param  {Object} body The object to send as a part of request body
     * @return {Promise} Returns the resolved promise
     */
    post = async (url, body) => {
        this.method = 'POST';
        if (body) {
            this.body = JSON.stringify(body);
        } else {
            this.body = null;
        }
        return this.call(url);
    }

    /**
     * put
     * @method
     * @param  {String} url The url to the put request. If baseUrl - baseUrl + url
     * @param  {Object} body The object to send as a part of request body
     * @return {Promise} Returns the resolved promise
     */
    put = async (url, body) => {
        this.method = 'PUT';
        if (body) {
            this.body = JSON.stringify(body);
        } else {
            this.body = null;
        }
        return this.call(url);
    }

    /**
     * delete
     * @method
     * @param  {String} url The url to the delete request. If baseUrl - baseUrl + url
     * @return {Promise} Returns the resolved promise
     */
    delete = async (url) => {
        this.method = 'DELETE';
        this.body = null;
        return this.call(url);
    }

    /**
     * saveToken - Saves the token if tokenStorage is local-storage
     * @method
     * @param  {String} accesstoken The accessToken
     * @param  {String} refreshToken The refreshToken
     */
    saveToken = (accesstoken, refreshToken) => {
        this.removeToken();

        if (this.tokenStorage === WebClientEnum.Settings.TokenStorage.LocalStorage) {
            if (accesstoken) {
                localStorage.setItem('access_token', accesstoken);
            }
            if (refreshToken) {
                localStorage.setItem('refresh_token', refreshToken);
            }
        }
    }

    /**
     * removeToken - Removes the the accessToken and refreshToken from local storage 
     * @method
     */
    removeToken = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    }

    /**
     * request
     * @method
     * @return {Object} The generated request object
     */
    request = () => {
        let request = {
            cache: this.cache,
            method: this.method,
            headers: this.requestHeader.headers(),
            mode: this.mode,
            credentials: this.credentials,
            redirect: this.redirect,
            referrerPolicy: this.referrerPolicy
        };

        if (this.body)
            request.body = this.body;

        return request;
    }

    /**
     * call - Calling api on given url. The method and body used, is properties method and body.
     * @method
     * @param  {String} url The url to the request. If baseUrl - baseUrl + url
     * @return {Promise} Returns the resolved promise
     */
    call = (url) => {
        let baseUrl = this.baseUrl;
        if (!baseUrl && baseUrl.length <= 0)
            baseUrl = process.env.REACT_APP_WEBCLIENT_BASE_URL != null ? process.env.REACT_APP_WEBCLIENT_BASE_URL : '';

        if (baseUrl.length > 0 && baseUrl.substring(baseUrl.length - 1) !== '/') {
            baseUrl += '/';
        }

        const fullUrl = baseUrl + url;

        return fetch(fullUrl, this.request())
            .then(response => {
                return new Promise((resolve, reject) => {
                    if (response.status >= 200 && response.status < 300) {
                        var contentType = response.headers.get('content-type');
                        if (contentType && contentType.indexOf('application/json') !== -1) {
                            response.json().then(json => {
                                resolve(json);
                            });
                        } else {
                            return ({})
                        }
                    } else if (response.status === 400) {
                        var contentType = response.headers.get('content-type');
                        if (contentType && contentType.indexOf('application/json') !== -1) {
                            response.json().then(json => {
                                resolve(json);
                            });
                        } else {
                            return ({})
                        }
                    } else {
                        reject(response);
                    }
                });
            })
            .catch((error) => {
                if (!error.status) {
                    throw new WebClientError("Internal Server Error", 500);
                } else {
                    throw new WebClientError(error.statusText, error.status);
                }
            });
    }
}
