export default {
    markData: [
        // coord和location与data.baseData相同
        // coord为停车场位置，location为省份经纬度
        {name: '广西', coord: [109.418194,22.839025], location: [108.418194,22.839025]},
        {name: '广西', coord: [108.318194,23.039025], location: [108.418194,22.839025]},
        {name: '广西', coord: [109.499036,24.39228], location: [108.418194,22.839025]},
        {name: '浙江', coord: [121.153576,28.987459], location: [121.153576,28.987459]},
        {name: '浙江', coord: [121.153576,28.587459], location: [121.153576,28.987459]},
        {name: '浙江', coord: [120.053576,28.587459], location: [121.153576,28.987459]},
        {name: '湖南', coord: [112.644973,26.910059], location: [112.644973,26.910059]},
        {name: '湖南', coord: [112.994522,28.213559], location: [112.644973,26.910059]},
        {name: '贵州', coord: [106.635091,26.654039], location: [106.635091,26.654039]}
    ],
    mapData: [
        // 省份位置
        {name: '广西', key: 'guangxi', coord: [108.418194,22.839025]},
        {name: '浙江', key: 'zhejiang', coord: [121.153576,28.987459]},
        {name: '湖南', key: 'hunan', coord: [112.644973,26.910059]},
        {name: '贵州', key: 'guizhou', coord: [106.635091,26.654039]}
    ],
    data: [
        {
            baseData: {
                name: '五象航洋城一期智慧停车项目',
                province: '广西',
                city: '南宁',
                total: 680,
                used: 350,
                company: '南宁市智慧停车有限公司',
                No: 'CH-32124000032',
                addr: '南宁市良庆区平乐大道2号五象航洋城B1',
                type: '停车场',
                admin: '张红丽',
                adminTel: '13522220000',
                begin: '2019-03',
                coord: [109.418194,22.839025], // 当前项目经纬度
                location: [108.418194,22.839025] // 省份经纬度
            },
            // mapData: {
            //     name: '广西',
            //     coord: [108.418194,22.839025],
            //     selected: true
            // },
            // markData: [
            //     {name: '广西', coord: [108.418194,22.839025], index: 0},
            //     {name: '广西', coord: [109.499036,24.39228], index: 0}
            // ],
            statisticData: {
                income: {
                    yearIncome: 1052.25,
                    monthIncome: 89.14,
                    dayIncome: 3.27,
                    yearOrder: 80.43,
                    monthOrder: 6.72,
                    dayOrder: 0.22,
                    orderIncome: 18.8
                },
                useRate: {
                    use: 4522,
                    averageUse: 232,
                    useRate: 45.22,
                    averageRate: 32.44,
                    turnover: 7.4,
                    averageTurnover: 7.8
                }
            },
            lineData: {
                day: [583, 483, 392, 192, 52, 52, 58, 88, 390, 1390, 1829, 1729, 1129, 1229, 1232, 832, 729, 889, 1729, 1819, 1929, 1769, 1629, 829, 538],
                month: [3782, 2234, 3435, 5342, 2342, 6324],
                year: [234245, 234235, 251245, 29174]
            },
            pieData: {
                day: [
                    { name: '第三方', value: 5.9 },
                    { name: '支付宝', value: 35.3 },
                    { name: '现金', value: 17.6 },
                    { name: '微信', value: 41.2 }
                ],
                month: [
                    { name: '第三方', value: 6.9 },
                    { name: '支付宝', value: 34.3 },
                    { name: '现金', value: 17.6 },
                    { name: '微信', value: 41.2 }
                ],
                year: [
                    { name: '第三方', value: 7.9 },
                    { name: '支付宝', value: 33.3 },
                    { name: '现金', value: 17.6 },
                    { name: '微信', value: 41.2 }
                ],
            },
            video: {}
        },
        {
            baseData: {
                name: '五象航洋城一期智慧停车项目',
                province: '广西',
                city: '南宁',
                total: 680,
                used: 350,
                company: '南宁市智慧停车有限公司',
                No: 'CH-32124000032',
                addr: '南宁市良庆区平乐大道2号五象航洋城B1',
                type: '停车场',
                admin: '张红丽',
                adminTel: '13522220000',
                begin: '2019-03',
                coord: [108.318194,23.039025],
                location: [108.418194,22.839025]
            },
            // mapData: {
            //     name: '广西',
            //     coord: [108.418194,22.839025],
            //     selected: true
            // },
            // markData: [
            //     {name: '广西', coord: [108.418194,22.839025], index: 0},
            //     {name: '广西', coord: [109.499036,24.39228], index: 0}
            // ],
            statisticData: {
                income: {
                    yearIncome: 1052.25,
                    monthIncome: 89.14,
                    dayIncome: 3.27,
                    yearOrder: 80.43,
                    monthOrder: 6.72,
                    dayOrder: 0.22,
                    orderIncome: 18.8
                },
                useRate: {
                    use: 4522,
                    averageUse: 232,
                    useRate: 45.22,
                    averageRate: 32.44,
                    turnover: 7.4,
                    averageTurnover: 7.8
                }
            },
            lineData: {
                day: [583, 483, 392, 192, 52, 52, 58, 88, 390, 1390, 1829, 1729, 1129, 1229, 1232, 832, 729, 889, 1729, 1819, 1929, 1769, 1629, 829, 538],
                month: [3782, 2234, 3435, 5342, 2342, 6324],
                year: [234245, 234235, 251245, 29174]
            },
            pieData: {
                day: [
                    { name: '第三方', value: 5.9 },
                    { name: '支付宝', value: 35.3 },
                    { name: '现金', value: 17.6 },
                    { name: '微信', value: 41.2 }
                ],
                month: [
                    { name: '第三方', value: 6.9 },
                    { name: '支付宝', value: 34.3 },
                    { name: '现金', value: 17.6 },
                    { name: '微信', value: 41.2 }
                ],
                year: [
                    { name: '第三方', value: 7.9 },
                    { name: '支付宝', value: 33.3 },
                    { name: '现金', value: 17.6 },
                    { name: '微信', value: 41.2 }
                ],
            },
            video: {}
        },
        {
            baseData: {
                name: '五象航洋城二期智慧停车项目',
                province: '广西',
                city: '柳州',
                total: 680,
                used: 350,
                company: '南宁市智慧停车有限公司',
                No: 'CH-32124000032',
                addr: '南宁市良庆区平乐大道2号五象航洋城B1',
                type: '停车场',
                admin: '张红丽',
                adminTel: '13522220000',
                begin: '2019-03',
                coord: [109.499036,24.39228],
                location: [108.418194,22.839025]
            },
            // mapData: {
            //     name: '广西',
            //     coord: [108.418194,22.839025],
            // },
            // markData: [
            //     {name: '广西', coord: [108.418194,22.839025], index: 0},
            //     {name: '广西', coord: [109.499036,24.39228], index: 0}
            // ],
            statisticData: {
                income: {
                    yearIncome: 1052.25,
                    monthIncome: 89.14,
                    dayIncome: 3.27,
                    yearOrder: 80.43,
                    monthOrder: 6.72,
                    dayOrder: 0.22,
                    orderIncome: 18.8
                },
                useRate: {
                    use: 4522,
                    averageUse: 232,
                    useRate: 45.22,
                    averageRate: 32.44,
                    turnover: 7.4,
                    averageTurnover: 7.8
                }
            },
            lineData: {
                day: [583, 483, 392, 192, 52, 52, 58, 88, 390, 1390, 1829, 1729, 1129, 1229, 1232, 832, 729, 889, 1729, 1819, 1929, 1769, 1629, 829, 538],
                month: [3782, 2234, 3435, 5342, 2342, 6324],
                year: [234245, 234235, 251245, 29174]
            },
            pieData: {
                day: [
                    { name: '第三方', value: 5.9 },
                    { name: '支付宝', value: 35.3 },
                    { name: '现金', value: 17.6 },
                    { name: '微信', value: 41.2 }
                ],
                month: [
                    { name: '第三方', value: 6.9 },
                    { name: '支付宝', value: 34.3 },
                    { name: '现金', value: 17.6 },
                    { name: '微信', value: 41.2 }
                ],
                year: [
                    { name: '第三方', value: 7.9 },
                    { name: '支付宝', value: 33.3 },
                    { name: '现金', value: 17.6 },
                    { name: '微信', value: 41.2 }
                ],
            },
            video: {}
        },
        {
            baseData: {
                name: '五象航洋智慧停车项目2',
                province: '浙江',
                city: '杭州',
                total: 680,
                used: 350,
                company: '杭州市智慧停车有限公司',
                No: 'CH-32124000032',
                addr: '南宁市良庆区平乐大道2号五象航洋城B1',
                type: '停车场',
                admin: '张红丽',
                adminTel: '13522220000',
                begin: '2019-03',
                coord: [121.153576,28.987459],
                location: [121.153576,28.987459]
            },
            // mapData: {
            //     name: '浙江',
            //     coord: [121.153576,28.987459]
            // },
            // markData: [
            //     {name: '浙江', coord: [121.153576,28.987459], index: 1},
            //     {name: '浙江', coord: [121.153576,28.587459], index: 1},
            //     {name: '浙江', coord: [120.053576,28.587459], index: 1}
            // ],
            statisticData: {
                income: {
                    yearIncome: 2052.25,
                    monthIncome: 89.14,
                    dayIncome: 3.27,
                    yearOrder: 80.43,
                    monthOrder: 6.72,
                    dayOrder: 0.22,
                    orderIncome: 18.8
                },
                useRate: {
                    use: 4522,
                    averageUse: 232,
                    useRate: 45.22,
                    averageRate: 32.44,
                    turnover: 7.4,
                    averageTurnover: 7.8
                }
            },
            lineData: {
                day: [583, 483, 392, 192, 52, 52, 58, 88, 390, 1390, 1829, 1729, 1129, 1229, 1232, 832, 729, 889, 1729, 1819, 1929, 1769, 1629, 829, 538],
                month: [3782, 2234, 3435, 5342, 2342, 6324],
                year: [234245, 234235, 251245, 29174]
            },
            pieData: {
                day: [
                    { name: '第三方', value: 10.9 },
                    { name: '支付宝', value: 30.3 },
                    { name: '现金', value: 17.6 },
                    { name: '微信', value: 41.2 }
                ],
                month: [
                    { name: '第三方', value: 6.9 },
                    { name: '支付宝', value: 34.3 },
                    { name: '现金', value: 17.6 },
                    { name: '微信', value: 41.2 }
                ],
                year: [
                    { name: '第三方', value: 7.9 },
                    { name: '支付宝', value: 33.3 },
                    { name: '现金', value: 17.6 },
                    { name: '微信', value: 41.2 }
                ],
            },
            video: {}
        },
        {
            baseData: {
                name: '五象航洋智慧停车项目3',
                province: '湖南',
                city: '长沙',
                total: 680,
                used: 350,
                company: '长沙市智慧停车有限公司',
                No: 'CH-32124000032',
                addr: '南宁市良庆区平乐大道2号五象航洋城B1',
                type: '停车场',
                admin: '张红丽',
                adminTel: '13522220000',
                begin: '2019-03',
                coord: [112.644973,26.910059],
                location: [112.644973,26.910059]
            },
            // mapData: {
            //     name: '湖南',
            //     coord: [112.644973,26.910059]
            // },
            // markData: [
            //     {name: '湖南', coord: [112.644973,26.910059], index: 2},
            //     {name: '湖南', coord: [112.994522,28.213559], index: 2}
            // ],
            statisticData: {
                income: {
                    yearIncome: 1052.25,
                    monthIncome: 89.14,
                    dayIncome: 3.27,
                    yearOrder: 80.43,
                    monthOrder: 6.72,
                    dayOrder: 0.22,
                    orderIncome: 18.8
                },
                useRate: {
                    use: 4522,
                    averageUse: 232,
                    useRate: 45.22,
                    averageRate: 32.44,
                    turnover: 7.4,
                    averageTurnover: 7.8
                }
            },
            lineData: {
                day: [583, 483, 392, 192, 52, 52, 58, 88, 390, 1390, 1829, 1729, 1129, 1229, 1232, 832, 729, 889, 1729, 1819, 1929, 1769, 1629, 829, 538],
                month: [3782, 2234, 3435, 5342, 2342, 6324],
                year: [234245, 234235, 251245, 29174]
            },
            pieData: {
                day: [
                    { name: '第三方', value: 5.9 },
                    { name: '支付宝', value: 35.3 },
                    { name: '现金', value: 17.6 },
                    { name: '微信', value: 41.2 }
                ],
                month: [
                    { name: '第三方', value: 6.9 },
                    { name: '支付宝', value: 34.3 },
                    { name: '现金', value: 17.6 },
                    { name: '微信', value: 41.2 }
                ],
                year: [
                    { name: '第三方', value: 7.9 },
                    { name: '支付宝', value: 33.3 },
                    { name: '现金', value: 17.6 },
                    { name: '微信', value: 41.2 }
                ],
            },
            video: {}
        },
        {
            baseData: {
                name: '五象航洋智慧停车项目4',
                province: '贵州',
                city: '贵阳',
                total: 680,
                used: 350,
                company: '贵阳市智慧停车有限公司',
                No: 'CH-32124000032',
                addr: '南宁市良庆区平乐大道2号五象航洋城B1',
                type: '停车场',
                admin: '张红丽',
                adminTel: '13522220000',
                begin: '2019-03',
                coord: [106.635091,26.654039],
                location: [106.635091,26.654039]
            },
            // mapData: {
            //     name: '贵州',
            //     coord: [106.635091,26.654039]
            // },
            // markData: [
            //     {name: '贵州', coord: [106.635091,26.654039], index: 3}
            // ],
            statisticData: {
                income: {
                    yearIncome: 1052.25,
                    monthIncome: 89.14,
                    dayIncome: 3.27,
                    yearOrder: 80.43,
                    monthOrder: 6.72,
                    dayOrder: 0.22,
                    orderIncome: 18.8
                },
                useRate: {
                    use: 4522,
                    averageUse: 232,
                    useRate: 45.22,
                    averageRate: 32.44,
                    turnover: 7.4,
                    averageTurnover: 7.8
                }
            },
            lineData: {
                day: [583, 483, 392, 192, 52, 52, 58, 88, 390, 1390, 1829, 1729, 1129, 1229, 1232, 832, 729, 889, 1729, 1819, 1929, 1769, 1629, 829, 538],
                month: [3782, 2234, 3435, 5342, 2342, 6324],
                year: [234245, 234235, 251245, 29174]
            },
            pieData: {
                day: [
                    { name: '第三方', value: 5.9 },
                    { name: '支付宝', value: 35.3 },
                    { name: '现金', value: 17.6 },
                    { name: '微信', value: 41.2 }
                ],
                month: [
                    { name: '第三方', value: 6.9 },
                    { name: '支付宝', value: 34.3 },
                    { name: '现金', value: 17.6 },
                    { name: '微信', value: 41.2 }
                ],
                year: [
                    { name: '第三方', value: 7.9 },
                    { name: '支付宝', value: 33.3 },
                    { name: '现金', value: 17.6 },
                    { name: '微信', value: 41.2 }
                ],
            },
            video: {}
        },
    ],

    provinceData: {
        guangxi: [
            {
                baseData: {
                    name: '五象航洋城一期智慧停车项目',
                    province: '广西',
                    city: '南宁',
                    total: 680,
                    used: 350,
                    company: '南宁市智慧停车有限公司',
                    No: 'CH-32124000032',
                    addr: '南宁市良庆区平乐大道2号五象航洋城B1',
                    type: '停车场',
                    admin: '张红丽',
                    adminTel: '13522220000',
                    begin: '2019-03',
                    coord: [108.418194,22.839025],
                    location: [108.418194,22.839025]
                },
                statisticData: {
                    income: {
                        yearIncome: 1052.25,
                        monthIncome: 89.14,
                        dayIncome: 3.27,
                        yearOrder: 80.43,
                        monthOrder: 6.72,
                        dayOrder: 0.22,
                        orderIncome: 18.8
                    },
                    useRate: {
                        use: 4522,
                        averageUse: 232,
                        useRate: 45.22,
                        averageRate: 32.44,
                        turnover: 7.4,
                        averageTurnover: 7.8
                    }
                },
                lineData: {
                    day: [583, 483, 392, 192, 52, 52, 58, 88, 390, 1390, 1829, 1729, 1129, 1229, 1232, 832, 729, 889, 1729, 1819, 1929, 1769, 1629, 829, 538],
                    month: [3782, 2234, 3435, 5342, 2342, 6324],
                    year: [234245, 234235, 251245, 29174]
                },
                pieData: {
                    day: [
                        { name: '第三方', value: 5.9 },
                        { name: '支付宝', value: 35.3 },
                        { name: '现金', value: 17.6 },
                        { name: '微信', value: 41.2 }
                    ],
                    month: [
                        { name: '第三方', value: 6.9 },
                        { name: '支付宝', value: 34.3 },
                        { name: '现金', value: 17.6 },
                        { name: '微信', value: 41.2 }
                    ],
                    year: [
                        { name: '第三方', value: 7.9 },
                        { name: '支付宝', value: 33.3 },
                        { name: '现金', value: 17.6 },
                        { name: '微信', value: 41.2 }
                    ],
                },
                video: {}
            },
            {
                baseData: {
                    name: '五象航洋城二期智慧停车项目',
                    province: '广西',
                    city: '南宁',
                    total: 680,
                    used: 350,
                    company: '南宁市智慧停车有限公司',
                    No: 'CH-32124000032',
                    addr: '南宁市良庆区平乐大道2号五象航洋城B1',
                    type: '停车场',
                    admin: '张红丽',
                    adminTel: '13522220000',
                    begin: '2019-03',
                    coord: [108.318194,23.039025],
                    location: [108.418194,22.839025]
                },
                statisticData: {
                    income: {
                        yearIncome: 1052.25,
                        monthIncome: 89.14,
                        dayIncome: 3.27,
                        yearOrder: 80.43,
                        monthOrder: 6.72,
                        dayOrder: 0.22,
                        orderIncome: 18.8
                    },
                    useRate: {
                        use: 4522,
                        averageUse: 232,
                        useRate: 45.22,
                        averageRate: 32.44,
                        turnover: 7.4,
                        averageTurnover: 7.8
                    }
                },
                lineData: {
                    day: [583, 483, 392, 192, 52, 52, 58, 88, 390, 1390, 1829, 1729, 1129, 1229, 1232, 832, 729, 889, 1729, 1819, 1929, 1769, 1629, 829, 538],
                    month: [3782, 2234, 3435, 5342, 2342, 6324],
                    year: [234245, 234235, 251245, 29174]
                },
                pieData: {
                    day: [
                        { name: '第三方', value: 5.9 },
                        { name: '支付宝', value: 35.3 },
                        { name: '现金', value: 17.6 },
                        { name: '微信', value: 41.2 }
                    ],
                    month: [
                        { name: '第三方', value: 6.9 },
                        { name: '支付宝', value: 34.3 },
                        { name: '现金', value: 17.6 },
                        { name: '微信', value: 41.2 }
                    ],
                    year: [
                        { name: '第三方', value: 7.9 },
                        { name: '支付宝', value: 33.3 },
                        { name: '现金', value: 17.6 },
                        { name: '微信', value: 41.2 }
                    ],
                },
                video: {}
            },
            {
                baseData: {
                    name: '五象航洋城二期智慧停车项目',
                    province: '广西',
                    city: '柳州',
                    total: 680,
                    used: 350,
                    company: '南宁市智慧停车有限公司',
                    No: 'CH-32124000032',
                    addr: '南宁市良庆区平乐大道2号五象航洋城B1',
                    type: '停车场',
                    admin: '张红丽',
                    adminTel: '13522220000',
                    begin: '2019-03',
                    coord: [109.499036,24.39228],
                    location: [109.499036,24.39228]
                },
                statisticData: {
                    income: {
                        yearIncome: 1052.25,
                        monthIncome: 89.14,
                        dayIncome: 3.27,
                        yearOrder: 80.43,
                        monthOrder: 6.72,
                        dayOrder: 0.22,
                        orderIncome: 18.8
                    },
                    useRate: {
                        use: 4522,
                        averageUse: 232,
                        useRate: 45.22,
                        averageRate: 32.44,
                        turnover: 7.4,
                        averageTurnover: 7.8
                    }
                },
                lineData: {
                    day: [583, 483, 392, 192, 52, 52, 58, 88, 390, 1390, 1829, 1729, 1129, 1229, 1232, 832, 729, 889, 1729, 1819, 1929, 1769, 1629, 829, 538],
                    month: [3782, 2234, 3435, 5342, 2342, 6324],
                    year: [234245, 234235, 251245, 29174]
                },
                pieData: {
                    day: [
                        { name: '第三方', value: 5.9 },
                        { name: '支付宝', value: 35.3 },
                        { name: '现金', value: 17.6 },
                        { name: '微信', value: 41.2 }
                    ],
                    month: [
                        { name: '第三方', value: 6.9 },
                        { name: '支付宝', value: 34.3 },
                        { name: '现金', value: 17.6 },
                        { name: '微信', value: 41.2 }
                    ],
                    year: [
                        { name: '第三方', value: 7.9 },
                        { name: '支付宝', value: 33.3 },
                        { name: '现金', value: 17.6 },
                        { name: '微信', value: 41.2 }
                    ],
                },
                video: {}
            }
        ]
    }
};