/*
 * @Author: TaiWei
 * @Date: 2022-04-08 17:05:49
 * @LastEditors: PoJun
 * @LastEditTime: 2022-06-09 11:38:47
 */
import Vue from "vue";
import VueRouter from "vue-router";
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

// 增加一层母版
const routes = [
    {
        path: "/",
        redirect: "/index", //设置默认指向的路径
    },
    {
        path: "/index",
        component: () => import("@/views/index/index.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
