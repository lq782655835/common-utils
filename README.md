# common-utils
common utils in project training

### Usage

First install the package via npm:

    npm install ai-common-utils

To use the package in your module:

    import { copyData } from 'ai-common-utils'

## js

工具函数
* [date](./src/js/date.js) 日期处理
* [event-emitter](./src/js/event-emitter.js) 事件分发
* [string](./src/js/string.js) 字符串处理
* [type](./src/js/type.js) js类型处理
* [url](./src/js/url.js) url处理
## vue
抽象出通用的业务逻辑

* [mount](./src/vue/mount.js) 手动创建Vue组件（适合手动弹窗）
* [list-mixin](./src/vue/mixins/list.js) 列表页mixin
* [close-dialog-mixin](./src/vue/mixins/close-dialog.js) 关闭弹窗mixin（配合上面mount手动创建Vue组件）

### 同类型资料：

* [JS 开发常用工具函数](https://mp.weixin.qq.com/s/ISpEN8BoJOrMirF9OFz87A)
* [Daily-Interview-Question](https://github.com/Advanced-Frontend/Daily-Interview-Question/blob/master/datum/summary.md)