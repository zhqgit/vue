import axios from 'axios'
import server from './server'
import api from './api'


// const BASEURL = 'http://' + server.ip + ':' + server.port + '/' + server.server + '/'
const BASEURL = 'http://' + server.ip + ':' + server.port + '/'

const http = axios.create({
  headers: {
    'Accept': 'application/json,text/plain',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Language': 'zh-CN',
  },
  baseURL: BASEURL,
  timeout: 5000,
  withCredentials: false
})

export default {
  http,
  api
}
