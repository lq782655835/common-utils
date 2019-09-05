export default class EventEmitter {
  constructor() {
    this._eventStore = {};
  }

  /**
   * 绑定事件
   * @param {String|Symbol} 事件名
   * @param {Function} 回调函数
   */
  on(eventName, listener) {
    (this._eventStore[eventName] || (this._eventStore[eventName] = [])).push(
      listener
    );
    return this;
  }

  /**
   * 添加单次监听器 listener 到名为 eventName 的事件。
   * 当 eventName 事件下次触发时，监听器会先被移除，然后再调用。
   * @param {String|Symbol} 事件名
   * @param {Function} 回调函数
   */
  once(eventName, listener) {
    function on() {
      this.off(eventName, listener);
      listener.apply(this, arguments);
    }
    this.on(eventName, on);
    return this;
  }

  /**
   * 按照监听器注册的顺序，同步地调用每个注册到名为 eventName 的事件的监听器，并传入提供的参数。
   * @param {String|Symbol} 事件名
   * @param {Any} 载荷数据
   * @returns this
   */
  emit(eventName, ...payload) {
    let cbs = this._eventStore[eventName];
    if (cbs) {
      cbs.forEach(cb => cb.apply(this, payload));
    }
    return this;
  }

  /**
   * 解除绑定
   * 如果不指定listener, 那么解除所有eventName对应回调
   * @param {String|Symbol} 事件名
   * @param {Function} 回调函数
   */
  off(eventName, listener) {
    let cbs = this._eventStore[eventName];
    if (cbs) {
      // 清空事件
      if (!listener) {
        this._eventStore[eventName] = null;
      } else {
        // 清空指定回调
        let delIndex = cbs.findIndex(fn => fn === listener);
        cbs.splice(delIndex, 1);
      }
    }
    return this;
  }

  eventNames() {
    console.log(this._eventStore, 123);
    return Object.keys(this._eventStore);
  }

  count(eventName) {
    let cbs = this._eventStore[eventName];
    return (cbs && cbs.length) || 0;
  }

  /**
   * 销毁实例
   */
  destroy() {
    this._eventStore = {};
  }
}
