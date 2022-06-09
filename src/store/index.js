/*
 * @Author: TaiWei
 * @Date: 2022-04-21 16:53:40
 * @LastEditors: PoJun
 * @LastEditTime: 2022-05-29 14:56:34
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        isLogin: false,
        vAllNormData: [],
        vAllChartsData: [],
        vAllReportData: [],
    },
    mutations: {
        updateVallNormData(state, data) {
            state.vAllNormData = data;
        },
        updateVallChartsData(state, data) {
            state.vAllChartsData = data;
        },
        updateVallReportData(state, data) {
            state.vAllReportData = data;
        },
    },
    actions: {},
    modules: {},
});
