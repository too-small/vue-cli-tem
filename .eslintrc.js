/*
 * @Author: PoJun
 * @Date: 2022-02-25 14:29:07
 * @LastEditors: PoJun
 * @LastEditTime: 2022-05-29 11:13:23
 * @Message: Do not edit
 */
module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
    globals: {
        AMap: false,
    },
};
