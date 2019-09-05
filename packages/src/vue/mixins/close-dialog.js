/**
 * 配合手动mount弹窗的mixin
 */
export default {
  data() {
    return {
      visible: true
    };
  },
  watch: {
    visible(val) {
      !val && this.$destroy();
    }
  },
  mounted() {
    document.body.appendChild(this.$el);
  },
  destroyed() {
    this.$el.parentNode.removeChild(this.$el);
  },
  methods: {
    close(isDone = false, outData = {}) {
      this.visible = false;
      let eventName = isDone ? "done" : "cancel";
      this.$emit(eventName, outData);
    }
  }
};
