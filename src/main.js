/*
 * @Author: TaiWei
 * @Date: 2022-04-12 11:47:17
 * @LastEditors: PoJun
 * @LastEditTime: 2022-06-09 11:31:30
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Dialog, Select, Option } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(Dialog);
Vue.use(Select);
Vue.use(Option);
Vue.prototype.$time = 600000;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");
