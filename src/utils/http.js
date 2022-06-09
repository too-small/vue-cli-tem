/*
 * @Author: PoJun
 * @Date: 2022-02-28 10:18:24
 * @LastEditors: TaiWei
 * @LastEditTime: 2022-05-29 11:00:04
 * @Message: Do not edit
 */
import axios from "axios";

// 创建axios实例
// axios.defaults.baseURL = "https://gf.an-xun.net/bnc_rest"; //配置根域名路径
axios.defaults.baseURL = process.env.VUE_APP_BASE_API; //配置根域名路径
console.log(process.env.VUE_APP_BASE_API);
const service = axios.create({
    timeout: 15000, // 请求超时时间
    headers: {
        get: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            type: "web",
        },
        post: {
            "Content-Type": "application/json;charset=utf-8",
            type: "web",
        },
    },
    // 是否跨站点访问控制请求
    withCredentials: true,
    validateStatus() {
        // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
        return true;
    },
    transformResponse: [
        data => {
            if (typeof data === "string" && data.startsWith("{")) {
                data = JSON.parse(data);
            }
            return data;
        },
    ],
});
// respone拦截器
service.interceptors.response.use(
    response => {
        /**
         * code为非200是抛错 可结合自己业务进行修改
         */
        const res = response.data;
        return res;
    },
    error => {
        return Promise.reject(error);
    }
);

function processingParams(params) {
    let data = new URLSearchParams();
    params.systemid = "91331082MABMK9W47K";
    for (let i in params) {
        data.append(i, params[i]);
    }
    return data;
}
function $https(url, ways, params = {}) {
    if (ways && ways === "post") {
        let data = processingParams(params);
        return service.post(url, data);
    } else {
        params.systemid = "91331082MABMK9W47K";
        return service.get(url, { params });
    }
}

export default $https;
