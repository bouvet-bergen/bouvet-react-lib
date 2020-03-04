export default class WebClient {
    
    constructor() {
        this._accessControlAllowCredentials = true;
        this._accessControlAllowOrigin = process.env.REACT_APP_HOST ? process.env.REACT_APP_HOST : '';
        this._cacheControl = 'no-cache';
        this._cacheStore = 'no-store';
        this._url = '';
    }

    /**
     * @param {string} url
     */
    set url(url) {
        this._url = url;
    }

    get get() {
        return this.createRequest(this._url)
    }

    getHeader() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': this._accessControlAllowCredentials,
            'Access-Control-Allow-Origin': this._accessControlAllowOrigin,
            'Cache-Control': this._cacheControl
        };
    }

    getRequest(method) {
        return {
            cache: this._cacheStore,
            method: method,
            headers: this.getHeader()
        };
    }

    createRequest(url) {
        return fetch(url, this.getRequest())
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
						return({})
					}
				}
            });
        });
    }
}
