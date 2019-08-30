const commonUtils = window.commonUtils

const vm = new Vue({
    el: '#app',
    data() {
        return {}
    },
    template: `<section class="list">
        <el-button type="primary" @click="copyData">拷贝</el-button>
    </section>`,
    methods: {
        copyData() {
            commonUtils.copyData('123')
            this.$message.success('拷贝成功')
        }
    }
})
