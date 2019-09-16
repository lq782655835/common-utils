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
          <br>
          <template v-if="list[index].result">
            输出结果：<span>{{list[index].result}}</span>
          </template>
          <pre class="code-container">
            <code class="javascript">
              {{list[index].code}}
            </code>
            <el-tooltip class="code-btn copy" effect="dark" content="拷贝" placement="top">
              <i class="el-icon-document" @click="copy(fn)"></i>
            </el-tooltip>
          </pre>
        </li>
      </ul>
    </section>
    <a href="https://github.com/lq782655835/common-utils" class="github-corner" aria-label="View source on Github">
      <svg width="80" height="80" viewBox="0 0 250 250" style="fill:#4AB7BD; color:#fff; position: absolute; top: 0; border: 0; right: 0;"
        aria-hidden="true">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="currentColor" class="octo-body"></path>
      </svg>
    </a>
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
      this.$message.success('复制成功')
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

.code-container{
  position: relative;
}
.javascript > .hljs-function:first-child {
  margin-left: -92px;
}
.code-container .code-btn {
  position: absolute;
  top: 24px;
  cursor: pointer;
}

.code-container .code-btn.copy {
  right: 10px;
}
</style>
