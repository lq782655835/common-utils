const commonUtils = window.commonUtils
const btnList = Object.keys(commonUtils).map(fnName => `<el-button type="primary" @click="copyData('${fnName}')">${fnName}</el-button>`)
const vm = new Vue({
    el: '#app',
    data() {
        return {}
    },
    template: `<section class="list">
        ${btnList.join('<br>')}
    </section>`,
    methods: {
        copyData(fnName) {
            commonUtils.copyData(fnName)
            this.$message.success('拷贝成功')
        }
    }
})
