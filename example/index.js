const commonUtils = window.commonUtils

const vm = new Vue({
    el: '#app',
    data() {
        return {}
    },
    template: `<section class="list">
        <button @click="copyData">拷贝</button>
    </section>`,
    methods: {
        copyData() {
            commonUtils.copyData('123')
            alert('拷贝成功')
        }
    }
})
