/*
 * @Author: TaiWei
 * @Date: 2022-04-11 14:39:58
 * @LastEditors: TaiWei
 * @LastEditTime: 2022-04-25 16:43:08
 */
export function delay(callback, delayTime) {
    setTimeout(() => {
        callback();
    }, delayTime || 200);
}
export function filteringData(arr, name) {
    let mObj = [];
    arr.forEach(item => {
        let result = item.filter(v => {
            return v.name === name;
        });
        if (result.length > 0) {
            mObj = result;
            return;
        }
    });
    return mObj;
}
