import { WebClientEnum } from './WebClientEnum';

/**
 * RequestHeader
 * @class
 */
export default class RequestHeader {

    /**
     * RequestHeader constructor
     * @constructor
     */
    constructor() {
        
        /**
         * The accept header
         * @type {String}
         * @default application/json
         * @public
         */
        this.accept = 'application/json';

        /**
         * The content type
         * @type {String}
         * @default application/json
         * @public
         */
        this.contentType = 'application/json';

        
        this.accessControlAllowCredentials = true;
        this.accessControlAllowOrigin = '*';
        this.cacheControl = WebClientEnum.Cache.NoCache;
        this.authorization = null;
    }    

    headers() {
        let headers = {
            'Accept': this.accept,
            'Content-Type': this.contentType,
            'Access-Control-Allow-Credentials': this.accessControlAllowCredentials,
            'Access-Control-Allow-Origin': this.accessControlAllowOrigin,
            'Cache-Control': this.cacheControl
        };

        if (this.authorization)
            headers.Authorization = 'Bearer ' + this.authorization;

        return headers;
    }
}
