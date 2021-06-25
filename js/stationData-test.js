export default {
    topNumber: {
        china: {
            provinces: 26,
            projects: 367,
            useStations: 45090,
            totalStations: 87043,
            total: 532.32
        },
        guangxi: {}
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
            name: '广西',
            en: 'guangxi',
            coord: [108.418194,22.839025], // 省份经纬度
            stations: [
                {
                    name: '五象5G基站', 
                    project: '五象5G基站项目',
                    status: 1,  // 1-正常，2-已交付未开通，3-未交付， 4-已拆， 5-待拆
                    No: 'WX2145234',
                    province: '广西',
                    city: '南宁',
                    area: '良庆区',
                    addr: '南宁市良庆区五象湖',
                    type: '单塔型',
                    stationType: '落地',
                    check: '罗雪军',
                    tel: '13320293412',
                    images: ['../image/location.png', '../image/location.png'],
                    admin: '王卫将',
                    time: '2021-03-21 09:23',
                    value: [108.399398,22.817954],  // 基站经纬度，等于markData的coord
                    coord: [108.320004,22.82402], // 城市经纬度，等于cityData的coord
                }, {
                    name: '五象5G基站', 
                    project: '五象5G基站项目',
                    status: 2,
                    No: 'WX2145234',
                    province: '广西',
                    city: '南宁',
                    area: '良庆区',
                    addr: '南宁市良庆区五象湖',
                    type: '单塔型',
                    stationType: '落地',
                    check: '罗雪军',
                    tel: '13320293412',
                    images: ['../image/location.png', '../image/location.png'],
                    admin: '王卫将',
                    time: '2021-03-21 09:23',
                    value: [108.499398,22.817954],
                    coord: [108.320004,22.82402],
                }, {
                    name: '五象5G基站', 
                    project: '五象5G基站项目',
                    status: 3,
                    No: 'WX2145234',
                    province: '广西',
                    city: '柳州',
                    area: '良庆区',
                    addr: '南宁市良庆区五象湖',
                    type: '单塔型',
                    stationType: '落地',
                    check: '罗雪军',
                    tel: '13320293412',
                    images: ['../image/location.png', '../image/location.png'],
                    admin: '王卫将',
                    time: '2021-03-21 09:23',
                    value: [109.499036,24.49228],
                    coord: [109.499036,24.39228],
                }
            ],
            cityData: [
                {
                    name: '南宁市',
                    coord: [108.320004,22.82402],
                },
                {
                    name: '柳州市',
                    coord: [109.499036,24.39228],
                }
            ]
        },
        {
            name: '浙江', 
            en: 'zhejiang',
            coord: [120.141739,30.291447], 
            stations: [
                {
                    name: '五象5G基站', 
                    project: '五象5G基站项目',
                    status: 4,
                    No: 'WX2145234',
                    province: '浙江',
                    city: '杭州',
                    area: '良庆区',
                    addr: '南宁市良庆区五象湖',
                    type: '单塔型',
                    stationType: '落地',
                    check: '罗雪军',
                    tel: '13320293412',
                    images: ['../image/location.png', '../image/location.png'],
                    admin: '王卫将',
                    time: '2021-03-21 09:23',
                    value: [120.126623,30.225902], // 基站位置
                    coord: [120.168992,30.259104]
                }, {
                    name: '五象5G基站', 
                    project: '五象5G基站项目',
                    status: 4,
                    No: 'WX2145234',
                    province: '浙江',
                    city: '杭州',
                    area: '良庆区',
                    addr: '南宁市良庆区五象湖',
                    type: '单塔型',
                    stationType: '落地',
                    check: '罗雪军',
                    tel: '13320293412',
                    images: ['../image/location.png', '../image/location.png'],
                    admin: '王卫将',
                    time: '2021-03-21 09:23',
                    value: [120.168992,30.259104], // 基站位置
                    coord: [120.168992,30.259104]
                }
            ],
            cityData:[
                {name:'杭州市', coord: [120.168992,30.259104]}
            ]
        },
        {
            name: '安徽',
            en: 'anhui',
            coord: [117.234816,31.832393],
            stations: [
                {
                    name: '五象5G基站', 
                    project: '五象5G基站项目',
                    status: 4,
                    No: 'WX2145234',
                    province: '安徽',
                    city: '铜陵',
                    area: '良庆区',
                    addr: '南宁市良庆区五象湖',
                    type: '单塔型',
                    stationType: '落地',
                    check: '罗雪军',
                    tel: '13320293412',
                    images: ['../image/location.png', '../image/location.png'],
                    admin: '王卫将',
                    time: '2021-03-21 09:23',
                    value: [117.722505,30.952967], // 基站位置
                    coord: [117.822505,30.952967]
                }, {
                    name: '五象5G基站', 
                    project: '五象5G基站项目',
                    status: 4,
                    No: 'WX2145234',
                    province: '安徽',
                    city: '合肥',
                    area: '良庆区',
                    addr: '南宁市良庆区五象湖',
                    type: '单塔型',
                    stationType: '落地',
                    check: '罗雪军',
                    tel: '13320293412',
                    images: ['../image/location.png', '../image/location.png'],
                    admin: '王卫将',
                    time: '2021-03-21 09:23',
                    value: [117.134816,31.832393], // 基站位置
                    coord: [117.234816,31.832393]
                }
            ],
            cityData:[
                {name: '铜陵市', value: 8.2, coord:[117.822505,30.952967]},
                {name: '合肥市', value: 2.2, coord:[117.234816,31.832393]}
            ]
        },
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
        {name: '广西', coord: [108.399398,22.817954], location: [108.418194,22.839025]},
        {name: '广西', coord: [108.499398,22.817954], location: [108.418194,22.839025]},
        {name: '广西', coord: [109.499036,24.49228], location: [108.418194,22.839025]},
        {name: '浙江', coord: [120.126623,30.225902], location: [121.153576,28.987459]},
        {name: '浙江', coord: [120.168992,30.259104], location: [121.153576,28.987459]},
        {name: '安徽', coord: [117.722505,30.952967], location: [117.234816,31.832393]},
        {name: '安徽', coord: [117.134816,31.832393], location: [117.234816,31.832393]},
        // {name: '北京', coord: [116.320328,39.883822], location: [116.403613,39.915185]}
    ],
    topBoxData: {
        china: {
            actual: 490.43,
            plan: 500.00,
            contract: 343.00,
            dianbiao: 2091
        }
    },
    electricData: {
        china: {
            today: 122,
            day: 132,
            thisMonth: 29101,
            month: 27819,
            thisYear: 15.22,
            year: 14.55,
            total: 45.22
        }
    },
    lineData: {
        china: {
            year: {
                plan: [43023, 49013, 60239, 54234, 58023, 42230, 48234, 56809, 60124, 42334, 58232, 59203],
                actual: [43043, 48013, 61239, 54334, 59023, 44230, 47234, 55809, 60124, 42334, 58232, 59203]
            },
            month: {
                plan: [8013, 8323, 9023, 7034, 8902,9023, 9424, 7924, 9824, 9244, 8024,8924],
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
        total: {
            total: {
                category: ['北京王府井基站', '杭州银泰基站1号', '上海机场基站', '北京机场基站', '上海外滩基站', '北京王府井基站', '杭州银泰基站1号', '上海机场基站', '北京机场基站', '上海外滩基站'],
                data: [300, 330, 400, 410, 430, 490, 500, 530, 700, 780]
            },
            year: {
                category: ['北京王府井基站', '杭州银泰基站1号', '上海机场基站', '北京机场基站', '上海外滩基站', '北京王府井基站', '杭州银泰基站1号', '上海机场基站', '北京机场基站', '上海外滩基站'],
                data: [300, 330, 400, 410, 430, 490, 500, 530, 700, 780]
            },
            month: {
                category: ['北京王府井基站', '杭州银泰基站1号', '上海机场基站', '北京机场基站', '上海外滩基站', '北京王府井基站', '杭州银泰基站1号', '上海机场基站', '北京机场基站', '上海外滩基站'],
                data: [100, 330, 500, 560, 730, 990, 1200, 1530, 1700, 1780]
            },
            day: {
                category: ['北京王府井基站', '杭州银泰基站1号', '上海机场基站', '北京机场基站', '上海外滩基站', '北京王府井基站', '杭州银泰基站1号', '上海机场基站', '北京机场基站', '上海外滩基站'],
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