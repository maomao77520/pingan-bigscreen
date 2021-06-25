export default {
    topData: {
        total: {
            total: 23.32,
            year: 6.32,
            month: 8290,
            today: 1325
        },
        hour: {
            total: 20.32,
            year: 5.32,
            month: 7290,
            today: 1225
        },
        month: {
            total: 3.32,
            year: 0.32,
            month: 1290,
            today: 425
        }
    },
    leftBar: {
        most: {
            category: ["北京", "上海", "浙江", "广东", "湖北", "福建", "湖南", "安徽", "江苏", "河北"],
            data: [9, 10, 13, 14, 15, 18, 22, 25, 28, 30]
        },
        least: {
            category: ["北京", "上海", "浙江", "广东", "湖北", "福建", "四川", "贵州", "广西", "云南"],
            data: [2.1, 2.1, 1.8, 1.8, 1.6, 1.4, 1.2, 0.9, 0.8, 0.7]
        }
        
    },
    mapData: [
        {name: '广西', en: 'guangxi', value: 13.32, coord: [108.418194,22.839025], cityData: [
            {name: '南宁市', value: 3.5, coord: [108.320004,22.82402]},
            {name: '柳州市', value: 2.6, coord: [109.411703,24.314617]},
            {name: '桂林市', value: 1.6, coord: [110.299121,25.274215]}
        ]},
        {name: '广东', en: 'guangdong', value: 12.1, coord: [113.245102,23.133708]},
        {name: '浙江', en: 'zhejiang', value: 25.7, coord: [120.141739,30.291447]},
        {name: '云南', en: 'yunnan', value: 6.2, coord: [102.734544,24.892237]},
        {name: '贵州', en: 'guizhou', value: 6.7, coord: [106.630905,26.666246]},
        {name: '四川', en: 'sichuan', value: 4, coord: [104.067767,30.57603]},
        {name: '北京', en: 'beijing', value: 3.8, coord: [116.434739,39.912057]},
        {name: '天津', en: 'tianjin', value: 1.3, coord: [117.210513,39.09158]},
        {name: '湖南', en: 'hunan', value: 20.4, coord: [112.879598,28.25279]},
        {name: '湖北', en: 'hubei', value: 9.3, coord: [114.311984,30.603332]},
        {name: '河南', en: 'henan', value: 8.4, coord: [113.667618,34.749248]},
        {name: '河北', en: 'hebei', value: 10.4, coord: [114.512983,38.0059]},
        {name: '青海', en: 'qinghai', value: 2, coord: [101.768175,36.649268]},
        {name: '山东', en: 'shandong', value: 22.3, coord: [117.1278,36.657036]},
        {name: '山西', en: 'shanxi', value: 9.8, coord: [112.550698,37.872468]},
        {name: '江苏', en: 'jiangsu', value: 23.4, coord: [118.797098,32.070503]},
        {name: '上海', en: 'shanghai', value: 10.2, coord: [121.486561,31.234576]}
    ],
    markData: [
        {name: '广西', coord: [109.018194,22.839025], location: [108.418194,22.839025]},
        {name: '广西', coord: [108.618194,23.039025], location: [108.418194,22.839025]},
        {name: '广西', coord: [109.499036,24.39228], location: [108.418194,22.839025]},
        {name: '浙江', coord: [121.153576,28.987459], location: [121.153576,28.987459]},
        {name: '浙江', coord: [121.153576,28.587459], location: [121.153576,28.987459]},
        {name: '浙江', coord: [120.053576,28.587459], location: [121.153576,28.987459]},
        {name: '湖南', coord: [112.644973,26.910059], location: [112.644973,26.910059]},
        {name: '湖南', coord: [112.994522,28.213559], location: [112.644973,26.910059]},
        {name: '贵州', coord: [106.635091,26.654039], location: [106.635091,26.654039]}
    ],
    lineData: {
        year: [43023, 49013, 60239, 54234, 58023, 42230, 48234, 56809, 60124, 42334, 58232, 59203],
        month: [8013, 8323, 9023, 7034, 8902,9023, 9424, 7924, 9824, 9244, 8024,8924],
        day: [923, 802,847,780,609,809,790,892,902,948,801,856],
    },
    barData: {
        hour: {
            category: ['30min内', '30-59min', '60-89min', '90-119min', '120min及以上'],
            data: [90, 200, 180, 120, 80]
        },
        month: {
            category: ['1个月', '1-3个月', '3-6个月', '6-12个月', '12个月及以上'],
            data: [90, 200, 180, 120, 80]
        }
    },
    pieData: {
        pie1: [
            {name: '新能源车', value: 40},
            {name: '传统油车', value: 60}
        ],
        pie2: [
            {name: '小型车', value: 50},
            {name: '其他', value: 50}
        ]
    },
};