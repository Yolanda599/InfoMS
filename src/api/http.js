import axios from"axios";
import router from "../router";
axios.defaults.timeout=5000;//超时时间5s
axios.defaults.withCredentials=true;//允许跨域

//Content-type
axios.defaults.headers.post['Content-Type']='application/x-www.form-urlencoded;charset=utf8';
//基础url
axios.defaults.baseURL="http://localhost:8888"

//相应拦截器
axios.interceptors.response.use(
    response => {
        //如果reponse里面的status是200，说明访问到接口了，否则错误
        if(response.status == 200){
            return Promise.resolve(response);
        }else{
            return Promise.reject(response);
        }
    },
    error => {
        if(error.response.status){
            switch(error.response.status){
                case 401:       //未登录
                    router.replace({
                        path:'/',
                        query:{
                            redirect: router.currentRoute.fullPath
                        }
                    });
                    break;
                case 404:   //没找到
                    break;
            }
            return Promise.reject(error.response);
        }
    }
);

/**
 * 封装get方法
 */
export function get(url,params={}){
    return new Promise((resolve,reject) => {
        axios.get(url,{params:params})
        .then(response =>{
            resolve(response.data);
        })
        .catch(err =>{
            reject(err);
        })
    });
}

/**
 * 封装post
 * 
 */
export function post(url,data={}){
    return new Promise((resolve,reject) => {
        axios.post(url,data)
        .then(response =>{
            resolve(response.data);
        })
        .catch(err =>{
            reject(err);
        })
    });
}