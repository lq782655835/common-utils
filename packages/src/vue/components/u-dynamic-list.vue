<template>
  <u-layout dir="v" gap="none">
    <el-row :gutter="20" v-for="(item, index) in list" :key="index">
      <el-col :span="12"> <slot :row="item"></slot> </el-col>
      <el-col :span="4">
        <el-link
          type="danger"
          icon="el-icon-minus"
          :underline="false"
          @click="deleteItem(item)"
          >移除</el-link
        >
      </el-col>
    </el-row>
    <el-link
      type="primary"
      icon="el-icon-circle-plus-outline"
      :underline="false"
      :disabled="disabledAdd"
      @click="addItem"
      >{{ label }}</el-link
    >
  </u-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class URequestParam extends Vue {
  @Prop({ type: Array, default: () => [] }) list: any[];
  @Prop({ type: Object, default: () => ({}) }) row;
  @Prop({ type: Number, default: 0 }) max: number;
  @Prop({ type: Boolean, default: false }) disabled: boolean;
  @Prop({ type: String, default: "新增一条" }) label: string;

  get disabledAdd() {
    if (this.disabled) return true;
    if (this.max === 0) return false;

    return this.list.length >= this.max;
  }

  addItem() {
    this.list.push({ ...this.row });
  }

  deleteItem(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }
}
</script>
