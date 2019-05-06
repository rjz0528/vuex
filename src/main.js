import Vue from 'vue'
import App from './App'
import router from './router'

// ? 引入饿了吗手机组建
import Mint from 'mint-ui'
import 'mint-ui/lib/style.min.css'

// ? 引入axios
import axios from 'axios'
// ?引入 mui相关文件
import './linb/css/mui.min.css'

import './linb/css/icons-extra.css'

// ? 配置跟地址
axios.defaults.baseURL = 'http://www.liulongbin.top:3005'
// ? 把 axios 配置给 Vue
Vue.prototype.$http = axios

Vue.use(Mint)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
