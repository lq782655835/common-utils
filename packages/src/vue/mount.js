import Vue from "vue";
/**
 * 编程式打开弹窗
 * 销毁弹窗,需要配合../mixins/close-dialog.js
 * @param {*} component
 * example: openDialog(EditDialog)({yourprop: ''}).then(...).catch(...)
 */
export const openDialog = component => {
  const _constructor = Vue.extend(component);
  return function(propsData = {}) {
    let instance = new _constructor({ propsData }).$mount();

    return new Promise((resolve, reject) => {
      instance.$once("done", data => resolve(data));
      instance.$once("cancel", data => reject(data));
    });
  };
};
