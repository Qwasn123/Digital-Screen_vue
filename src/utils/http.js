// http.js
import axios from 'axios';
import { reject } from 'lodash';

const apiPrefix = import.meta.env.VITE_API_PREFIX || process.env.VITE_API_PREFIX;

const axiosInstance = axios.create({
    baseURL: apiPrefix,
})
export const fetchData = function(url, data={}){
    return new Promise((resolve, reject) => {
        axiosInstance.post(url, data)
            .then(response => {
                if (response.data.success) {
                    resolve(response.data.data)
                }
            })
    })
        .catch(error => {
            console.error(error);
            reject(error);
        })



}
export default { fetchData };












// const http = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com',
//   // 其他配置...
// });

// // 请求拦截器
// http.interceptors.request.use(config => {
//   // Do something before request is sent
//   return config;
// }, error => {
//   // Do something with request error
//   return Promise.reject(error);
// });

// // 响应拦截器
// http.interceptors.response.use(response => {
//   // Do something with response data
//   return response;
// }, error => {
//   // Do something with response error
//   return Promise.reject(error);
// });

// export default http;
