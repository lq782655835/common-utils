<template>
  <div id="app">
    <header>
      <img src="../../../vscode-logo.png" class="logo" />
      <h1 class="title">常用函数大全</h1>
      <!-- <h3 class="subtitle">减少查找时间</h3> -->
    </header>
    <section class="list">
      <ul class="list">
        <li v-for="({fn, title, example}, index) in mapping" :key="fn">
          <i class="border"></i>
          <h2>{{title}}</h2>
          输入参数：<el-input v-model="list[index].value" :disabled="list[index].disabled"></el-input>
          <el-button type="primary" @click="exec(fn, index)">{{fn}}</el-button>
          <el-button type="primary" @click="copy(fn)">拷贝函数</el-button>
          <br>
          <template v-if="list[index].result">
            输出结果：<span>{{list[index].result}}</span>
          </template>
          <pre>
            <code class="javascript">
              {{list[index].code}}
            </code>
          </pre>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
import 'highlight.js/styles/github.css';

import Mapping from './MAPPING'
import * as CommonUtils from '../../dist/common-utils.es'

export default {
  name: 'app',
  data() {
    Object.freeze(Mapping);

    return {
      mapping: Mapping,
      list: Mapping.map(({fn, example}) => ({
        value: example.join(','),
        result: '',
        disabled: example.length === 0,
        code: CommonUtils[fn]
      }))
    }
  },
  mounted () {
    hljs.initHighlightingOnLoad()
  },
  methods: {
    exec(fnName, index) {
      let params = this.list[index].value.split(',')
      let result = CommonUtils[fnName](...params)
      this.list[index].result = result
      this.$notify.success({
        title: `${fnName}`,
        message: '执行成功'
      });
    },
    copy(fnName) {
      CommonUtils.copyData(CommonUtils[fnName].toString())
      this.$message.success('拷贝函数成功')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}

header {
  position: relative;
}

.logo {
  height: 180px;
}

.title {
  position: absolute;
  top: 62px;
  left: 156px;
}

li {
  list-style-type: none;
}

.el-input {
    max-width: 300px;
    margin-right: 10px;
}
.el-button {
    margin-top: 10px;
}

.javascript > .hljs-function:first-child {
  margin-left: -92px;
}
</style>
