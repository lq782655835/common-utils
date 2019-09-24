/**** 修改： 1. validate-on-rule-change="false" rule改变时不作校验 2.
v-show="!item.hidden" */

<template>
  <el-form
    ref="form"
    class="page-form"
    :class="className"
    :model="formModel"
    :rules="formRules"
    :label-width="labelWidth"
    :validate-on-rule-change="false"
  >
    <el-form-item
      v-for="(item, index) in this.fieldList"
      :key="index"
      :prop="item.value"
      :label="item.label"
      :class="item.className"
      v-show="!item.hidden"
    >
      <!-- solt -->
      <template v-if="item.type === 'slot'">
        <slot :name="'item-' + item.value" />
      </template>
      <!-- 普通输入框 -->
      <el-input
        v-if="item.type === 'input' || item.type === 'password'"
        v-model="formModel[item.value]"
        :type="item.type"
        :disabled="item.disabled"
        :placeholder="getPlaceholder(item)"
        @focus="handleEvent(item.event)"
      />
      <!-- 文本输入框 -->
      <el-input
        v-if="item.type === 'textarea'"
        v-model.trim="formModel[item.value]"
        :type="item.type"
        :disabled="item.disabled"
        :placeholder="getPlaceholder(item)"
        :autosize="item.autosize || { minRows: 2, maxRows: 10 }"
        @focus="handleEvent(item.event)"
      />
      <!-- 计数器 -->
      <el-input-number
        v-if="item.type === 'inputNumber'"
        v-model="formModel[item.value]"
        size="small"
        :min="item.min"
        :max="item.max"
        @change="handleEvent(item.event)"
      />
      <!-- 选择框 -->
      <u-el-select
        v-if="item.type === 'select'"
        v-model="formModel[item.value]"
        :options="item.options"
        :disabled="item.disabled"
        :clearable="item.clearable"
        :filterable="item.filterable"
        :placeholder="getPlaceholder(item)"
        @change="handleEvent(item.event, formModel[item.value])"
      >
      </u-el-select>
      <!-- 单选框组 -->
      <u-el-radio-group
        v-if="item.type === 'radio-group'"
        v-model="formModel[item.value]"
        :options="item.options"
        :disabled="item.disabled"
        @change="handleEvent(item.event, formModel[item.value])"
      >
      </u-el-radio-group>
      <!-- 日期选择框 -->
      <el-date-picker
        v-if="item.type === 'date'"
        v-model="formModel[item.value]"
        :type="item.dateType"
        :picker-options="item.TimePickerOptions"
        :clearable="item.clearable"
        :disabled="item.disabled"
        :placeholder="getPlaceholder(item)"
        @focus="handleEvent(item.event)"
      />
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "u-page-form",
  props: {
    // 自定义类名
    className: { type: String },
    // 表单双向绑定数据
    formModel: { type: Object, default: () => ({}) },
    // 字段配置
    /**
     * 配置参数列表
     * type: 类型，目前支持slot、input、select、inputNumber、date
     * label：提示内容，string类型
     * value：值字段，v-model绑定的值为this.data[value]
     * options: 针对select组件，配置options list
     * disabled 是否禁用
     * hidden：是否隐藏该列。建议是一个computed，使得可以响应式显示隐藏
     * required: 校验规则：是否必须
     * pattern：校验规则：满足正则
     * validator：校验规则：自定义函数，最灵活
     */
    fieldList: { type: Array },
    // 验证规则：相对于filedList快速规则，这里设置的rules具有最高优先级
    rules: { type: Object, default: () => ({}) },
    // label宽度
    labelWidth: { type: String, default: "100px" },
    refObj: { type: Object }
  },
  computed: {
    // formModel: {
    //     get() {
    //         return this.value
    //     },
    //     set(value) {
    //         console.log(123)
    //         this.$emit('input', value)
    //         // 将form实例返回到父级
    //         this.$emit('update:refObj', this.$refs.form)
    //     }
    // },
    formRules() {
      if (!this.fieldList || this.fieldList.length === 0) {
        return this.rules;
      }

      // 快速规则
      let fieldRules = this.fieldList
        .filter(
          ({ required, pattern, validator }) => required || pattern || validator
        )
        .reduce((rules, fieldConfig) => {
          let {
            label,
            value,
            type,
            required,
            pattern,
            validator
          } = fieldConfig;
          let trigger = "blur";
          rules[value] = [];
          if (required) {
            const requireTips =
              type === "select" ? `请选择${label}` : `请输入${label}`;
            rules[value].push({ required, message: requireTips, trigger });
          }
          if (pattern) {
            rules[value].push({
              pattern,
              message: `请输入有效${label}`,
              trigger
            });
          }
          if (validator) {
            rules[value].push({ validator, trigger });
          }
          return rules;
        }, {});
      console.log(fieldRules, "rules");
      return { ...fieldRules, ...this.rules };
    }
  },
  data() {
    return {};
  },
  watch: {
    formModel: {
      handler: function(val) {
        console.log(val);
        // this.$emit('input', val)
        // 将form实例返回到父级
        this.$emit("update:refObj", this.$refs.form);
      },
      deep: true // 深度监听
    }
  },
  mounted() {
    // 将form实例返回到父级
    this.$emit("update:refObj", this.$refs.form);
  },
  methods: {
    // 得到placeholder的显示
    getPlaceholder({ type, label, placeholder }) {
      if (placeholder) return placeholder;

      if (type === "input" || type === "textarea") {
        placeholder = "请输入" + label;
      } else if (type === "select" || type === "time" || type === "date") {
        placeholder = "请选择" + label;
      } else {
        placeholder = label;
      }
      return placeholder;
    },
    // 绑定的相关事件
    handleEvent(event) {
      this.$emit("handleEvent", { event });
    },
    // 派发按钮点击事件
    handleClick(event, data) {
      this.$emit("handleClick", { event, data });
    }
  }
};
</script>

<style lang="scss" scoped></style>
