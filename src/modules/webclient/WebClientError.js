export default class WebClientError extends Error {
    constructor(message, status) {
        super(message);
        this.name = "WebClientError";
        this.status = status;
    }
}

