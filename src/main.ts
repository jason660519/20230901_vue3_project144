import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})

// svg插件需要配置代碼
import 'virtual:svg-icons-register'
// 引入自定義插件對象:註冊整個項目的全局組件
import globalComponent from '@/components'
console.log(globalComponent)
app.use(globalComponent)
import '@/styles/index.scss'

app.mount('#app')
