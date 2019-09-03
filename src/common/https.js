import Axios from 'axios'
import QS from 'qs'

Axios.defaults.timeout = 5000
Axios.defaults.baseURL = '/api'

Axios.interceptors.request.use((config) => {
  //在发送请求之前做某件事
  if (config.method === 'post') {
    config.data = QS.stringify(config.data);
  }
  return config;
}, (error) => {
  console.log('错误的参数！')
  return Promise.reject(error);
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
