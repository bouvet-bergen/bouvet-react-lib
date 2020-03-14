import { default as WebClient } from './WebClient';

const WebClientMiddleware = (resolveRefreshToken, baseUrl) => store => next => action => {

    try {
        var client = new WebClient();

        if (baseUrl)
            client.baseUrl = baseUrl;

        const existingToken = localStorage.getItem('access_token');

        if (existingToken) {
            var jwtDecode = require('jwt-decode');
            var decodedToken = jwtDecode(existingToken);
            if (decodedToken.exp * 1000 > Date.now()) {
                client.requestHeader.authorization = existingToken;
                next(action);
            } else {
                const refreshToken = localStorage.getItem('refresh_token');
                if (refreshToken) {
                    resolveRefreshToken(client, refreshToken)
                        .then(tokens => {
                            const { token, refreshToken } = tokens;
                            if (token && refreshToken) {
                                client.saveToken(token, refreshToken);
                                client.requestHeader.authorization = token;
                                next(action);
                            }
                        })
                        .catch((error) => {
                            console.error('Status: ' + error.status + 'Message: ' + error.statusText);
                            next(action);
                        });
                } else {
                    next(action);
                }
            }
        } else {
            next(action);
        }
    } catch (error) {
        console.error('Status: ' + error.status + 'Message: ' + error.statusText);
        next(action);
    }
}

export default WebClientMiddleware;