export default {
    markData: [
        // coord和location与data.baseData相同
        // coord为停车场位置，location为省份经纬度
        {name: '广西', coord: [108.399398,22.817954], location: [108.418194,22.839025]},
        {name: '浙江', coord: [120.126623,30.225902], location: [121.153576,28.987459]},
        {name: '浙江', coord: [120.168992,30.259104], location: [121.153576,28.987459]},
        {name: '北京', coord: [116.320328,39.883822], location: [116.403613,39.915185]}
    ],
    mapData: [
        // 省份位置
        {name: '广西', en: 'guangxi', coord: [108.418194,22.839025]},
        {name: '浙江', en: 'zhejiang', coord: [121.153576,28.987459]},
        {name: '北京', en: 'beijing', coord: [116.403613,39.915185]}
    ],
    data: [
        {
            baseData: {
                name: '丰台区-西三环南路14号院首科大厦智慧停车项目',
                province: '北京',
                city: '北京',
                total: 1000,
                used: 253,
                company: '北京静态交通投资运营有限公司',
                No: 'CH-BJ-32124000032',
                addr: '北京市-丰台区-西三环南路14号院首科大厦',
                type: '停车场',
                admin: '王福文',
                adminTel: '18688782992',
                begin: '2020-03',
                time: '1年3个月',
                coord: [116.320328,39.883822], // 当前项目经纬度
                location: [116.403613,39.915185] // 省份经纬度
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
                name: '南宁市-青秀区-华润万象城智慧停车项目',
                province: '广西',
                city: '南宁',
                total: 5000,
                used: 3281,
                company: '华润置地（南宁）有限公司',
                No: 'CH-GXNN-32124000024',
                addr: '南宁市民族大道136号',
                type: '停车场',
                admin: '朱婉璇',
                adminTel: '13372258868',
                begin: '2020-10',
                time: '8个月',
                coord: [108.399398,22.817954],
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
                name: '西湖区-杭州大厦A座智慧停车项目',
                province: '浙江',
                city: '杭州',
                total: 2500,
                used: 683,
                company: '杭州大厦运营公司',
                No: 'CH-ZJHZ-32124000038',
                addr: '杭州市西湖区武林广场1号',
                type: '停车场',
                admin: '李国庆',
                adminTel: '13872379001',
                begin: '2020-12',
                time: '7个月',
                coord: [120.126623,30.225902],
                location: [121.153576,28.987459]
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
                name: '上城区-湖滨银泰广场智慧停车项目',
                province: '浙江',
                city: '杭州',
                total: 2000,
                used: 891,
                company: '北京银泰裕盛商业管理顾问有限公司',
                No: 'CH-ZJHZ-32124000029',
                addr: '杭州市上城区东坡路7号',
                type: '停车场',
                admin: '林一岚',
                adminTel: '18599226224',
                begin: '2021-01',
                time: '6个月',
                coord: [120.168992,30.259104],
                location: [121.153576,28.987459]
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
    ],

    provinceData: {
        guangxi: [
            {
                baseData: {
                    name: '南宁市-青秀区-华润万象城智慧停车项目',
                    province: '广西',
                    city: '南宁',
                    total: 5000,
                    used: 3281,
                    company: '华润置地（南宁）有限公司',
                    No: 'CH-GXNN-32124000024',
                    addr: '南宁市民族大道136号',
                    type: '停车场',
                    admin: '朱婉璇',
                    adminTel: '13372258868',
                    begin: '2020-10',
                    time: '8个月',
                    coord: [108.399398,22.817954],
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
            }
        ],
         zhejiang: [
            {
                baseData: {
                    name: '上城区-湖滨银泰广场智慧停车项目',
                    province: '浙江',
                    city: '杭州',
                    total: 2000,
                    used: 891,
                    company: '北京银泰裕盛商业管理顾问有限公司',
                    No: 'CH-ZJHZ-32124000029',
                    addr: '杭州市上城区东坡路7号',
                    type: '停车场',
                    admin: '林一岚',
                    adminTel: '18599226224',
                    begin: '2021-01',
                    time: '6个月',
                    coord: [120.168992,30.259104],
                    location: [121.153576,28.987459]
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
                    name: '西湖区-杭州大厦A座智慧停车项目',
                    province: '浙江',
                    city: '杭州',
                    total: 2500,
                    used: 683,
                    company: '杭州大厦运营公司',
                    No: 'CH-ZJHZ-32124000038',
                    addr: '杭州市西湖区武林广场1号',
                    type: '停车场',
                    admin: '李国庆',
                    adminTel: '13872379001',
                    begin: '2020-12',
                    time:'7个月',
                    coord: [120.126623,30.225902],
                    location: [121.153576,28.987459]
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
        ],
        beijing: [
            {
                baseData: {
                    name: '丰台区-西三环南路14号院首科大厦智慧停车项目',
                    province: '北京',
                    city: '北京',
                    total: 1000,
                    used: 253,
                    company: '北京静态交通投资运营有限公司',
                    No: 'CH-BJ-32124000032',
                    addr: '北京市-丰台区-西三环南路14号院首科大厦',
                    type: '停车场',
                    admin: '王福文',
                    adminTel: '18688782992',
                    begin: '2020-03',
                    time: '1年3个月',
                    coord: [116.320328,39.883822],
                    location: [116.403613,39.915185]
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