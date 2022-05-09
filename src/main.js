import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
// 引入 element plus 的样式
import 'element-plus/dist/index.css';
import './style/index.css'


const app = createApp(App)

app.use(ElementPlus)
app.use(router)

app.mount('#app')
