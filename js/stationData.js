export default {
    topNumber: {
        china: {
            provinces: 2,
            projects: 7,
            useStations: 151,
            totalStations: 208,
            total: 435.32 //单位是万元
        }
    },
    leftBar: {
        most: {
            category: ["河北", "上海", "浙江", "广东", "湖北", "福建", "湖南", "安徽", "江苏", "北京"],
            data: [9, 10, 13, 14, 15, 18, 22, 25, 28, 30]
        },
        least: {
            category: ["北京", "上海", "浙江", "广东", "湖北", "福建", "四川", "贵州", "海南", "云南"],
            data: [2.1, 2.1, 1.8, 1.8, 1.6, 1.4, 1.2, 0.9, 0.8, 0.7]
        }
        
    },
    mapData: [
        {
            name: '河北',
            en: 'hebei',
            coord: [114.509905,38.048457], // 省份经纬度
            stations: [
                {
                    name: '保定市新兴庄北', 
                    project: '2020PAZL03030',
                    status: 1,  // 1-正常，2-已交付未开通，3-未交付， 4-已拆， 5-待拆
                    No: '2',
                    province: '河北',
                    city: '保定',
                    area: '顺平县',
                    addr: '保定市新兴庄北',
                    type: '地面站',
                    stationType: '地面站',
                    check: '翟勇',
                    checkTime: '2021/6/10', //这里是最近巡检时间不是巡检人电话，我改了字段名字
                    images: ['../image/photo/xxzb1.jpg', '../image/photo/xxzb2.jpg'],
                    admin: '闫奕哲',
                    time: '2021/6/10',
                    value: [114.921974,38.530934],  // 基站经纬度，等于markData的coord
                    coord: [115.474789,38.886683], // 城市经纬度，等于cityData的coord
                }, {
                    name: '保定市文村', 
                    project: '2020PAZL03030',
                    status: 1,  // 1-正常，2-已交付未开通，3-未交付， 4-已拆， 5-待拆
                    No: '3',
                    province: '河北',
                    city: '保定',
                    area: '望都县',
                    addr: '保定市文村',
                    type: '地面站',
                    stationType: '地面站',
                    check: '翟勇',
                    checkTime: '2021/6/13', //这里是最近巡检时间不是巡检人电话，我改了字段名字
                    images: ['../image/photo/wc1.jpg', '../image/photo/wc2.jpg'],
                    admin: '闫奕哲',
                    time: '2021/6/10',
                    value: [115.522272,39.075793],  // 基站经纬度，等于markData的coord
                    coord: [115.474789,38.886683], // 城市经纬度，等于cityData的coord
                }, {
                    name: '保定市蠡县仉村村南', 
                    project: '2020PAZL03030',
                    status: 1,  // 1-正常，2-已交付未开通，3-未交付， 4-已拆， 5-待拆
                    No: '4',
                    province: '河北',
                    city: '保定',
                    area: '蠡县',
                    addr: '保定市蠡县仉村村南',
                    type: '地面站',
                    stationType: '地面站',
                    check: '翟勇',
                    checkTime: '2021/6/13', //这里是最近巡检时间不是巡检人电话，我改了字段名字
                    images: ['../image/photo/zc1.jpg', '../image/photo/zc2.jpg'],
                    admin: '闫奕哲',
                    time: '2021/6/10',
                    value: [115.610646, 38.468881],  // 基站经纬度，等于markData的coord
                    coord: [115.474789,38.886683], // 城市经纬度，等于cityData的coord
                }, {
                    name: '保定市蠡县东市口', 
                    project: '2020PAZL03030',
                    status: 1,  // 1-正常，2-已交付未开通，3-未交付， 4-已拆， 5-待拆
                    No: '5',
                    province: '河北',
                    city: '保定',
                    area: '蠡县',
                    addr: '保定市蠡县东市口',
                    type: '地面站',
                    stationType: '地面站',
                    check: '翟勇',
                    checkTime: '2021/6/13', //这里是最近巡检时间不是巡检人电话，我改了字段名字
                    images: ['../image/photo/dsk1.jpg', '../image/photo/dsk2.jpg'],
                    admin: '闫奕哲',
                    time: '2021/6/10',
                    value: [115.764488,38.513728],  // 基站经纬度，等于markData的coord
                    coord: [115.474789,38.886683], // 城市经纬度，等于cityData的coord
                }, {
                    name: '保定市蠡县北宗南', 
                    project: '2020PAZL03030',
                    status: 1,  // 1-正常，2-已交付未开通，3-未交付， 4-已拆， 5-待拆
                    No: '2',
                    province: '河北',
                    city: '保定',
                    area: '蠡县',
                    addr: '保定市蠡县北宗南',
                    type: '地面站',
                    stationType: '地面站',
                    check: '翟勇',
                    checkTime: '2021/6/13', //这里是最近巡检时间不是巡检人电话，我改了字段名字
                    images: ['../image/photo/bzn1.jpg', '../image/photo/bzn2.jpg'],
                    admin: '闫奕哲',
                    time: '2021/6/10',
                    value: [115.641208,38.580177],  // 基站经纬度，等于markData的coord
                    coord: [115.474789,38.886683], // 城市经纬度，等于cityData的coord
                }, {
                    name: '保定市光明东街与富强北路交口', 
                    project: '2020PAZL03030',
                    status: 1,  // 1-正常，2-已交付未开通，3-未交付， 4-已拆， 5-待拆
                    No: '2',
                    province: '河北',
                    city: '保定',
                    area: '清苑区',
                    addr: '保定市光明东街与富强北路交口',
                    type: '地面站',
                    stationType: '地面站',
                    check: '翟勇',
                    checkTime: '2021/6/13', //这里是最近巡检时间不是巡检人电话，我改了字段名字
                    images: ['../image/photo/gmdj1.jpg', '../image/photo/gmdj2.jpg'],
                    admin: '闫奕哲',
                    time: '2021/6/10',
                    value: [115.495836,38.768952],  // 基站经纬度，等于markData的coord
                    coord: [115.474789,38.886683], // 城市经纬度，等于cityData的coord
                }
            ],
            cityData: [
                {
                    name: '保定市',
                    coord: [115.474789,38.886683],
                }
            ]
        },
        // {
        //     name: '广西',
        //     en: 'guangxi',
        //     coord: [108.418194,22.839025], // 省份经纬度
        //     stations: [
        //         {
        //             name: '五象5G基站', 
        //             project: '五象5G基站项目',
        //             status: 1,  // 1-正常，2-已交付未开通，3-未交付， 4-已拆， 5-待拆
        //             No: 'WX2145234',
        //             province: '广西',
        //             city: '南宁',
        //             area: '良庆区',
        //             addr: '南宁市良庆区五象湖',
        //             type: '单塔型',
        //             stationType: '落地',
        //             check: '罗雪军',
        //             tel: '13320293412',
        //             images: ['../image/photo/location.jpg', '../image/photo/location.jpg'],
        //             admin: '王卫将',
        //             time: '2021-03-21 09:23',
        //             value: [108.399398,22.817954],  // 基站经纬度，等于markData的coord
        //             coord: [108.320004,22.82402], // 城市经纬度，等于cityData的coord
        //         }, {
        //             name: '五象5G基站', 
        //             project: '五象5G基站项目',
        //             status: 2,
        //             No: 'WX2145234',
        //             province: '广西',
        //             city: '南宁',
        //             area: '良庆区',
        //             addr: '南宁市良庆区五象湖',
        //             type: '单塔型',
        //             stationType: '落地',
        //             check: '罗雪军',
        //             tel: '13320293412',
        //             images: ['../image/photo/location.jpg', '../image/photo/location.jpg'],
        //             admin: '王卫将',
        //             time: '2021-03-21 09:23',
        //             value: [108.499398,22.817954],
        //             coord: [108.320004,22.82402],
        //         }, {
        //             name: '五象5G基站', 
        //             project: '五象5G基站项目',
        //             status: 3,
        //             No: 'WX2145234',
        //             province: '广西',
        //             city: '柳州',
        //             area: '良庆区',
        //             addr: '南宁市良庆区五象湖',
        //             type: '单塔型',
        //             stationType: '落地',
        //             check: '罗雪军',
        //             tel: '13320293412',
        //             images: ['../image/photo/location.jpg', '../image/photo/location.jpg'],
        //             admin: '王卫将',
        //             time: '2021-03-21 09:23',
        //             value: [109.499036,24.49228],
        //             coord: [109.499036,24.39228],
        //         }
        //     ],
        //     cityData: [
        //         {
        //             name: '南宁市',
        //             coord: [108.320004,22.82402],
        //         },
        //         {
        //             name: '柳州市',
        //             coord: [109.499036,24.39228],
        //         }
        //     ]
        // },
        // {
        //     name: '广东',
        //     en: 'guangdong',
        //     coord: [113.245102,23.133708],
        // },
        // {name: '云南', en: 'yunnan', value: 6.2, coord: [102.734544,24.892237]},
        // {name: '贵州', en: 'guizhou', value: 6.7, coord: [106.630905,26.666246]},
        // {name: '四川', en: 'sichuan', value: 4, coord: [104.067767,30.57603]},
        // {name: '北京', en: 'beijing', value: 3.8, coord: [116.434739,39.912057]},
        // {name: '天津', en: 'tianjin', value: 1.3, coord: [117.210513,39.09158]},
        // {name: '湖南', en: 'hunan', value: 20.4, coord: [112.879598,28.25279]},
        // {name: '湖北', en: 'hubei', value: 9.3, coord: [114.311984,30.603332]},
        // {name: '河南', en: 'henan', value: 8.4, coord: [113.667618,34.749248]},
        
        // {name: '青海', en: 'qinghai', value: 2, coord: [101.768175,36.649268]},
        // {name: '山东', en: 'shandong', value: 22.3, coord: [117.1278,36.657036]},
        // {name: '山西', en: 'shanxi', value: 9.8, coord: [112.550698,37.872468]},
        // {name: '江苏', en: 'jiangsu', value: 23.4, coord: [118.797098,32.070503]},
        // {name: '上海', en: 'shanghai', value: 10.2, coord: [121.486561,31.234576]}
    ],
    markData: [
        // coord和location与data.baseData相同
        // coord为停车场位置，location为省份经纬度
        // {name: '广西', coord: [108.399398,22.817954], location: [108.418194,22.839025]},
        // {name: '广西', coord: [108.499398,22.817954], location: [108.418194,22.839025]},
        // {name: '广西', coord: [109.499036,24.49228], location: [108.418194,22.839025]},
        // {name: '浙江', coord: [120.126623,30.225902], location: [121.153576,28.987459]},
        // {name: '浙江', coord: [120.168992,30.259104], location: [121.153576,28.987459]},
        // {name: '安徽', coord: [117.722505,30.952967], location: [117.234816,31.832393]},
        // {name: '安徽', coord: [117.134816,31.832393], location: [117.234816,31.832393]},
        {name: '河北', coord: [115.495836,38.768952], location: [114.509905,38.048457]},
        {name: '河北', coord: [115.641208,38.580177], location: [114.509905,38.048457]},
        {name: '河北', coord: [115.764488,38.513728], location: [114.509905,38.048457]},
        {name: '河北', coord: [115.610646, 38.468881], location: [114.509905,38.048457]},
        {name: '河北', coord: [115.522272,39.075793], location: [114.509905,38.048457]},
        {name: '河北', coord: [114.921974,38.530934], location: [114.509905,38.048457]},
    ],
    topBoxData: {
        china: {
            actual: 664.43,
            plan: 778.00,
            contract: 196,
            dianbiao: 151,  //漏了在线电表、预警电表和离线电表
            online: 146,
            warming: 15,
            offline:5
        }
    },
    electricData: {
        china: {
            today: 7550,
            day: 6795,
            thisMonth: 25.67,
            month: 22.65,
            thisYear: 347.3,
            year: 271.8,
            total: 513.4
        }
    },
    lineData: {
        china: {
            year: {
                plan: [43023, 49013, 60239, 54234, 58023, 42230, 48234, 56809, 60124, 42334, 58232, 59203],
                actual: [43043, 48013, 61239, 54334, 59023, 44230, 47234, 55809, 60124, 42334, 58232, 59203]
            },
            month: {
                plan: [135, 123, 148, 75, 183,0, 0, 0, 0, 0, 0,0],
                actual: []
            },
            day: {
                plan: [923, 802,847,780,609,809,790,892,902,948,801,856],
                actual: []
            },
            total: {
                plan: [43023, 49013, 60239, 54234, 58023, 42230, 48234, 56809, 60124, 42334, 58232, 59203],
                actual: [33043, 38013, 51239, 64334, 59023, 44230, 47234, 55809, 60124, 42334, 58232, 59203]
            }
        }
        
    },
    rightBarData: {
        china: {
            total: {
                total: {
                    category: ["刘家沟", "路庄子", "清苑东安", "荣家营东", "沙地", "市区刘守庙", "双彩小区南", "王辛庄", "西大地", "西娘庄西"],
                    data: [7700, 8800, 9300, 11600, 13200, 14300, 15300, 16800, 17500, 18000]
                },
                year: {
                    category: ["刘家沟", "路庄子", "清苑东安", "荣家营东", "沙地", "市区刘守庙", "双彩小区南", "王辛庄", "西大地", "西娘庄西"],
                    data: [300, 330, 400, 410, 430, 490, 500, 530, 700, 780]
                },
                month: {
                    category: ["刘家沟", "路庄子", "清苑东安", "荣家营东", "沙地", "市区刘守庙", "双彩小区南", "王辛庄", "西大地", "西娘庄西"],
                    data: [100, 330, 500, 560, 730, 990, 1200, 1530, 1700, 1780]
                },
                day: {
                    category: ["刘家沟", "路庄子", "清苑东安", "荣家营东", "沙地", "市区刘守庙", "双彩小区南", "王辛庄", "西大地", "西娘庄西"],
                    data: [100, 330, 500, 560, 730, 990, 1200, 1530, 1700, 1780]
                },
            },
            new: {
                total: {
                    category: ['江苏', '河北', '安徽', '北京', '上海','江苏', '河北', '安徽', '北京', '上海'],
                    data: [30, 35, 40, 44, 45, 48,51, 55, 60, 70, 88]
                },
                year: {
                    category: ['江苏', '河北', '安徽', '北京', '上海','江苏', '河北', '安徽', '北京', '上海'],
                    data: [20, 25, 30, 44, 45, 48,51, 55, 60, 70, 88]
                },
                month: {
                    category: ['江苏', '河北', '安徽', '北京', '上海','江苏', '河北', '安徽', '北京', '上海'],
                    data: [30, 35, 40, 44, 45, 48,51, 55, 60, 70, 88]
                },
                day: {
                    category: ['江苏', '河北', '安徽', '北京', '上海','江苏', '河北', '安徽', '北京', '上海'],
                    data: [30, 35, 40, 44, 45, 48,51, 55, 60, 70, 88]
                }
            }
        }
        
    }
}