<template>
    <div class="page-table" :class="className">
        <!-- 显示表格 -->
        <el-table
            ref="table"
            v-loading="loading"
            :max-height="tableHeight || undefined"
            :data="data"
            border
            style="width:98%"
        >
            <el-table-column
                v-for="(item, index) in fieldList.filter(item => !item.hidden)"
                :key="index"
                :prop="item.value"
                :label="(typeof item.label === 'function' && item.label(scope.row)) || item.label"
                :fixed="item.fixed"
                :width="item.width"
                :min-width="item.minWidth || '100px'"
                :type="item.type"
            >
                <template v-if="item.type || item.fn" v-slot="scope">
                    <!-- solt 自定义列-->
                    <template v-if="item.type === 'slot' || item.type === 'expand'">
                        <slot :name="'col-' + item.value" :row="scope.row" />
                    </template>
                    <!-- 标签 -->
                    <el-tag v-else-if="item.type === 'tag'">
                        {{ $getDataValue(item, scope.row) }}
                    </el-tag>
                    <!-- 状态 -->
                    <u-badge
                        v-else-if="item.type === 'badge'"
                        :status="item.status(scope.row[item.value], scope.row)"
                    >
                        {{ $getDataValue(item, scope.row) }}
                    </u-badge>
                    <!-- 其他 -->
                    <span v-else>{{ $getDataValue(item, scope.row) }}</span>
                </template>
            </el-table-column>
            <el-table-column
                v-if="handle"
                :key="'handle'"
                :fixed="handle.fixed"
                :label="handle.label"
                :width="handle.width"
                :min-width="handle.minWidth"
            >
                <template v-slot="scope">
                    <template
                        v-for="(item, index) in handle.btList.filter(btn =>
                            supportFunField(btn.hidden, scope.row)
                        )"
                    >
                        <!-- 自定义操作类型 -->
                        <slot
                            v-if="item.slot"
                            :name="'bt-' + item.event"
                            :data="{ item, row: scope.row }"
                        />
                        <!-- 操作按钮 -->
                        <el-link
                            v-if="!item.slot && (!item.ifRender || item.ifRender(scope.row))"
                            :key="index"
                            :type="item.btType || 'primary'"
                            :icon="item.icon"
                            :disabled="disabledBtn(item, scope.row)"
                            @click="handleClick(item.event, scope.row)"
                        >
                            {{
                                (typeof item.label === 'function' && item.label(scope.row)) ||
                                    item.label
                            }}
                        </el-link>
                    </template>
                </template>
            </el-table-column>
        </el-table>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'u-page-table',
    props: {
        // 自定义类名
        className: { type: String },
        // 动效loading
        loading: { type: Boolean },
        // 列表数据
        data: { type: Array, default: () => [] },
        /**
         * 表格字段列表配置。以下是每个字段可配置内容：
         * label：列名称,可配置为string或function
         * value：对应字段
         * fn: 自定义内容
         * type: 内置规则，有slot、filter、badge
         * width： 宽度
         * minWidth：最小宽度
         * fixed：是否固定
         * hidden：是否隐藏该列。建议是一个computed，使得可以响应式显示隐藏（此时tableConfig也需要是一个computed）
         */
        fieldList: { type: Array, default: () => [] },
        /****
         * 操作栏配置,主要针对点击事件
         * width： 宽度
         * minWidth：最小宽度
         * fixed：是否固定
         * btList: 按钮列表。以下是每个列表可配内容：
         ** label: 名称，可配置为string或function
         ** event：事件名(作用类似上面的value)
         ** btType： el-link的主题色,默认是primary
         ** icon： 图标
         ** disabled：可配置为boolean或function
         ** hidden：是否隐藏该列。建议是一个computed，使得可以响应式显示隐藏（此时tableConfig也需要是一个computed）
         */
        handle: { type: Object },
        // 监听高度
        listenHeight: { type: Boolean, default: true }
    },
    data() {
        return {
            tableHeight: 0 // 表格最大高度
        }
    },
    mounted() {
        if (this.listenHeight) {
            this.tableHeight = this.getTableHeight()
        }
    },
    methods: {
        supportFunField(field, row) {
            // 当field是自定义函数时，优先
            if (typeof field === 'function') return field(row)
            return !field
        },
        // // 是否禁用操作按钮
        disabledBtn({ disabled }, row) {
            if (typeof disabled === 'function') return disabled(row)
            return !!disabled
        },
        // 派发按钮点击事件
        handleClick(event, data) {
            this.$emit('handleClick', { event, data })
        },
        // 根据页面的头部, 功能框, 分页组件等高度，计算出table的高度
        getTableHeight() {
            // 当表格存在的时候才执行操作
            if (document.getElementsByClassName('el-table').length === 0) {
                return
            }
            const boxH = document.body.clientHeight
            const headerH = document.getElementsByClassName('app-header')[0]
                ? document.getElementsByClassName('app-header')[0].clientHeight
                : 0
            const navbarH = document.getElementsByClassName('navbar')[0]
                ? document.getElementsByClassName('navbar')[0].clientHeight
                : 0
            const searchH = document.getElementsByClassName('page-filter')[0]
                ? document.getElementsByClassName('page-filter')[0].clientHeight
                : 0
            const paginationH = document.getElementsByClassName('el-pagination')[0]
                ? document.getElementsByClassName('el-pagination')[0].clientHeight
                : 0
            // 表格的高度 = 视口高度 - 头部导航的高度60 - 搜索容器的高度 - 分页组件的高度 - 分页组件 - 内容上下padding40*2，以及组件间距离margin35px
            let resultTableHeight = boxH - headerH - navbarH - searchH - paginationH - 30 - 35
            console.log('表格最大高度为:' + resultTableHeight)
            return resultTableHeight
        }
    }
}
</script>

<style lang="scss" scoped>
.el-link + .el-link {
    margin-left: 10px;
}

.el-pagination {
    margin-top: 20px;
    margin-left: -10px;
}
</style>
