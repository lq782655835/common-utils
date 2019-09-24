<template>
    <el-card class="page-card" :class="className" v-if="hasPageData">
        <div slot="header" class="clearfix">
            <span class="title">{{ title }}</span>
            <i
                :title="title"
                class="el-icon-info"
                style="float: right; padding: 3px 0; color: rgb(150, 150, 150)"
            />
        </div>
        <ul class="info">
            <li
                v-for="(item, index) in fieldList.filter(item => !item.hidden)"
                :key="index"
                class="item"
            >
                <span class="label" :style="`width: ${lableWidth}; text-align: ${textAligin}`">{{
                    item.label
                }}</span>
                <template v-if="item.type === 'slot'">
                    <slot
                        :name="`item-${item.value}`"
                        :value="$getDataValue(item, data)"
                        :row="data"
                    ></slot>
                </template>
                <span v-else class="value">{{ $getDataValue(item, data) }}</span>
            </li>
        </ul>
    </el-card>
</template>

<script>
export default {
    props: {
        className: { type: String },
        title: { type: String },
        textAligin: { type: String, default: 'left' },
        lableWidth: { type: String, default: '100px' },
        // field value
        data: { type: Object },
        fieldList: { type: Array }
    },
    computed: {
        hasPageData() {
            return Object.keys(this.data).length !== 0
        }
    }
}
</script>

<style scoped lang="scss">
.page-card {
    .title {
        font-size: 16px;
    }
    .info {
        .item {
            padding: 7px;
            .label,
            .value {
                display: inline-block;
            }
            .label {
                font-size: 13px;
                color: rgb(150, 150, 150);
            }
            .value {
                padding-left: 10px;
                color: rgb(100, 100, 100);
            }
        }
    }
}
</style>
