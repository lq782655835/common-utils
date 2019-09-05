/**
 * 列表页逻辑mixin
 */
export default {
  data() {
    return {
      listService: null, // 获取列表服务接口，必须赋值

      // result
      list: [],
      total: 0,

      // params
      page: 1,
      pageSize: 50,
      conditions: {},

      loading: false
    };
  },
  mounted() {
    if (this.shouldUpdateList()) {
      this.__getList();
    }
  },
  methods: {
    shouldUpdateList() {
      // override this method if needed
      return true;
    },

    async beforeUpdateListHandler() {
      // override this method if needed
      return new Promise(resolve => {
        resolve();
      });
    },

    afterUpdateListHandler(data) {
      // override this method if needed
      return data;
    },

    async __getList() {
      try {
        await this.beforeUpdateListHandler();

        this.loading = true;
        const param = this.getListParam();
        const data = await this.listService(param);
        const result = this.afterUpdateListHandler(data);
        this.list =
          result.data ||
          result.dialogueList ||
          result.moduleList ||
          result.botGlobalParamVOList ||
          (result instanceof Array && result) ||
          [];
        this.total =
          (result.pagination && result.pagination.total) || result.total;
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },

    getListParam() {
      const param = this.getExtraParam();
      const { page, pageSize } = this;
      return { ...param, page, pageSize };
    },

    getExtraParam() {
      return this.conditions;
    },

    /** 刷新方法 */
    async refresh() {
      this.page = 1;
      await this.__getList();
    },

    /**
     * 刷新当前页
     * 虽然可以根据传参，与refresh合并，
     * 但考虑到无法一眼明白代码意图，故推荐分开写强刷以及当前页刷
     */
    async refreshpage() {
      await this.__getList();
    },

    handleSizeChange(pageSize) {
      this.pageSize = pageSize;
      this.__getList();
    },

    handleCurrentChange(page) {
      this.page = page;
      this.__getList();
    }
  }
};
