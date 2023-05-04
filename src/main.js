import {createApp, VueElement} from 'vue'
import App from './App.vue'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from "@/router";
import axios from "axios";
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'

//createApp(App).use(store).use(router).use(ElementPlus,{locale}).mount('#app')
//App.config.globalProperties.$echarts=echarts;
//VueElement.prototype.axios=axios;

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus,{locale})
app.mount('#app')

VueElement.prototype.axios=axios;







