import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setAntDesign } from '@/plugins/anted'
import '@/assets/css/global.scss'
// 引入animate.css..在typesscript中必须申明文件啊类型  注意加class前面必须加上ani
import 'animate.css'

const app = createApp(App)
  .use(store)
  .use(router)

setAntDesign(app)

app.mount('#app')
