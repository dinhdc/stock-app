import axios from 'axios';
import { TIMEOUT, stageURL } from '../utils/constants';

const axiosInstance = axios.create({
    baseURL: `${stageURL}`,
    timeout: TIMEOUT,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.request.use(
    async config => {
        // const accessToken = getCookieStorage('access_token');
        // const expireToken = parseFloat(getCookieStorage('expire_token') || '0');
        // const expireRefreshToken = parseFloat(getCookieStorage('expire_refresh_token') || '0');

        // if (
        //     !!accessToken &&
        //     expireToken &&
        //     expireRefreshToken &&
        //     new Date().getTime() > expireRefreshToken
        // ) {
        //     removeAllCookieStorage([
        //         'access_token',
        //         'refresh_token',
        //         'expire_token',
        //         'expire_refresh_token'
        //     ]);
        //     // window.location.replace(routeConstants.SIGN_IN);
        // }

        // if (accessToken) {
        //     config.headers['Authorization'] = `Bearer ${accessToken}`;
        // }

        return config;
    },
    error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    async response => {
        if (response && response.data) {
            return response.data;
        }

        return response;
    },
    (error) => {

        // const originalConfig = error.config;
        // if (originalConfig.url !== "/restapi/login/" && error.response) {
        //     // Access Token was expired
        //     if (!isAlreadyFetchingAccessToken && error.response.status === 401) {
        //         getAccessToken(getCookieStorage('refresh_token')).then();
        //         isAlreadyFetchingAccessToken = true;
        //         return new Promise(function (resolve, reject) {
        //             failedQueue.push(newAccessToken => {
        //                 error.config.headers['Authorization'] = `Bearer ${newAccessToken}`;
        //                 try {

        //                     resolve(axiosInstance(error.config));

        //                 } catch (err) {
        //                     reject(err);
        //                 }
        //             });
        //         });
        //     }
        // }
        return Promise.reject(error);
    }
);




export default axiosInstance;