/*
 * @Author: PoJun
 * @Date: 2022-02-28 10:15:39
 * @LastEditors: PoJun
 * @LastEditTime: 2022-03-01 17:09:23
 * @Message: Do not edit
 */
import Mock from "mockjs";

Mock.mock("/list", {
    "data|100": [
        {
            title: "@name", //随机名称
            description: "@paragraph", //随机昵称
            url: "@url",
            content: "@url",
            avatar() {
                //用户头像
                return Mock.Random.dataImage();
            },
        },
    ],
});

Mock.mock("/personInfo", {
    name: "@name", //随机名称
    nickName: "@last", //随机昵称
    phone: /^1[34578]\d{9}$/, //随机电话号码
    avatar() {
        return Mock.Random.dataImage();
    },
});

Mock.mock("/homeList", {
    "data|8": [
        {
            name: "@last",
            avatar() {
                return Mock.Random.dataImage();
            },
        },
    ],
});
Mock.mock("/data", {
    "data|5": [
        {
            title: "@name",
            avatar() {
                return Mock.Random.dataImage();
            },
            description: "@last", //随机昵称
        },
    ],
});
