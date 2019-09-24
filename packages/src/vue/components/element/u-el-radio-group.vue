<template>
    <el-radio-group v-model="svalue" v-bind="$attrs" v-on="$listeners">
        <el-radio-button v-for="item in items" :key="item.value" :label="item.value">
            {{ item.label }}
        </el-radio-button>
    </el-radio-group>
</template>

<script>
export default {
    name: 'u-el-select',
    props: ['value', 'options'],
    data() {
        return {
            svalue: this.value,
            items: []
        }
    },
    watch: {
        selected(val) {
            this.$emit('input', val)
        },
        value(val) {
            this.svalue = val
        }
    },
    mounted() {
        let { options } = this
        if (!options || typeof options !== 'object') return

        let _dataTransform = (arr, fileType) => {
            let { label: labelField, value: valueField } = fileType
            return arr.map(item => {
                if (typeof item === 'object') {
                    return { ...item, label: item[labelField], value: item[valueField] }
                }
                // 针对返回[string, string类型]
                if (typeof item === 'string') {
                    return { label: item, value: item }
                }
            })
        }

        if (Array.isArray(this.options)) {
            this.items = this.options
        } else {
            let { api, fileType = { label: 'label', value: 'value' } } = this.options
            typeof api === 'function' &&
                api().then(data => {
                    console.log(data, 'select result')
                    this.items = _dataTransform(data, fileType)
                    this.$emit('api-load', data)
                })
        }
    }
}
</script>

<style lang="scss" scoped></style>
