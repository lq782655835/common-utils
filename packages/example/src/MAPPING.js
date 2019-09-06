
module.exports = [
    {
        fn: 'bytesToSize',
        title: '通用字节转换',
        example: [1024]
    },
    {
        fn: 'dateFormater',
        title: '通用日期格式转换',
        example: ['YYYY年MM月DD日 hh:mm:ss']
    },
    {
        fn: 'timeView',
        title: '日期展示',
        example: ['1567738721718']
    },
    {
        fn: 'copyData',
        title: '拷贝字符',
        example: ['拷贝后可粘贴查看']
    },
    {
        fn: 'getExplorerInfo',
        title: '获取浏览器信息',
        example: []
    },
    {
        fn: 'isPCBroswer',
        title: '是否为PC端浏览器模式',
        example: []
    },
    {
        fn: 'toFullScreen',
        title: '全屏',
        example: []
    },
    {
        fn: 'exitFullScreen',
        title: '退出全屏',
        example: []
    },
    {
        fn: 'disabledBrowserEvent',
        title: '禁用右键',
        example: ['contextmenu']
    },
    {
        fn: 'random',
        title: '指定范围随机数',
        example: [5, 99]
    },
    // {
    //     fn: 'downloadImage',
    //     title: '下载',
    //     example: ['https://github.com/lq782655835/common-utils/blob/master/vscode-logo.png']
    // },
    {
        fn: 'validURL',
        title: '网址正则',
        example: ['http://www.baidu.com']
    },
    {
        fn: 'validEmail',
        title: '邮箱正则',
        example: ['123@163.com']
    },
    {
        fn: 'camelize',
        title: '横线转驼峰命名',
        example: ['ab-cd-ef']
    },
    {
        fn: 'hyphenate',
        title: '驼峰转横线命名',
        example: ['abCdEf']
    },
    {
        fn: 'uppercaseFirst',
        title: '首字母大写',
        example: ['abCdEf']
    },
    {
        fn: 'getQueryValueByName',
        title: '获取location指定值',
        example: ['a']
    },
    {
        fn: 'getQueryParam',
        title: '获取location所有参数',
        example: []
    },
]