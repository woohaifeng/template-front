import Axios from 'axios'
import QS from 'qs'
import Vue from 'vue'
import router from '../router/index'

Axios.defaults.timeout = 5000
Axios.defaults.baseURL = '/api'

Axios.interceptors.request.use((config) => {
  //在请求头中添加token验证信息
  if (config.url != '/outh/login') {
    config.headers.common['token'] = localStorage.getItem(Vue.prototype.global.TOKEN);
  };
  //在发送请求之前做某件事
  if (config.method === 'post') {
    config.data = QS.stringify(config.data);
  }
  return config;
}, (error) => {
  // 可能出现错误的参数
  return Promise.reject(error);
});

Axios.interceptors.response.use((response) => {
  switch (response.data.status) {
    //判断用户登陆是否失效
    case 401:
      localStorage.removeItem(Vue.prototype.global.TOKEN);
      router.replace({path: "/Login"});
      break;
  }
  return response;
}, (error) => {
  return Promise.reject(error.response.data);
});

export function post(url, params) {
  return new Promise((resolve, reject) => {
    Axios.post(url, params)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function get(url, param) {
  return new Promise((resolve, reject) => {
    Axios.get(url, {params: param})
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  post,
  get,
}
