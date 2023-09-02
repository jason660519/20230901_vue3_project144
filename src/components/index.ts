// 引入項目中全部的全局組件
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
const allGlobalComponent = { SvgIcon, Pagination }

export default {
  install(app) {
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key])
    })
  },
}
