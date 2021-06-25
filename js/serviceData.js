export default {
    topData: {
        china: {
            total: {
                total: 168.21,
                year: 24.32,
                month: 18291,
                today: 8291
            },
            hour: {
                total: 133.93,
                year: 18.32,
                month: 12392,
                today: 7911
            },
            month: {
                total: 34.28,
                year: 6.00,
                month: 5899,
                today: 380
            }
        },
        guangxi: {
            total: {
                total: 102.09,
                year: 24.32,
                month: 18291,
                today: 8291
            },
            hour: {
                total: 133.93,
                year: 18.32,
                month: 12392,
                today: 7911
            },
            month: {
                total: 34.28,
                year: 6.00,
                month: 5899,
                today: 380
            }
        },
        beijing: {
            total: {
                total: 128.21,
                year: 24.32,
                month: 18291,
                today: 8291
            },
            hour: {
                total: 133.93,
                year: 18.32,
                month: 12392,
                today: 7911
            },
            month: {
                total: 34.28,
                year: 6.00,
                month: 5899,
                today: 380
            }
        },
        zhejiang: {
            total: {
                total: 208.21,
                year: 24.32,
                month: 18291,
                today: 8291
            },
            hour: {
                total: 133.93,
                year: 18.32,
                month: 12392,
                today: 7911
            },
            month: {
                total: 34.28,
                year: 6.00,
                month: 5899,
                today: 380
            }
        },
        anhui: {
            total: {
                total: 128.21,
                year: 24.32,
                month: 18291,
                today: 8291
            },
            hour: {
                total: 133.93,
                year: 18.32,
                month: 12392,
                today: 7911
            },
            month: {
                total: 34.28,
                year: 6.00,
                month: 5899,
                today: 380
            }
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
        {name: '广西', en: 'guangxi', value: 13.32, coord: [108.418194,22.839025], cityData: [
            {name: '南宁市', value: 13.32, coord: [108.320004,22.82402]}
        ]},
        {name: '浙江', en: 'zhejiang', value: 25.7, coord: [120.141739,30.291447], cityData:[
            {name:'杭州市', value: 25.7, coord: [120.168992,30.259104]}
        ]},
        {name: '北京', en: 'beijing', value: 3.8, coord: [116.434739,39.912057], cityData: [
            {name:'北京市', value: 3.8, coord: [116.434739,39.912057]}
        ]},
        {name: '安徽', en: 'anhui', value: 10.4, coord: [117.234816,31.832393], cityData:[
            {name: '铜陵市', value: 8.2, coord:[117.822505,30.952967]},
            {name: '合肥市', value: 2.2, coord:[117.234816,31.832393]}]
        }
    ],
    markData: [
        // coord和location与data.baseData相同
        // coord为停车场位置，location为省份经纬度
        {name: '广西', coord: [108.320004,22.82402], location: [108.418194,22.839025]},
        {name: '浙江', coord: [120.168992,30.259104], location: [121.153576,28.987459]},
        // {name: '浙江', coord: [120.168992,30.259104], location: [121.153576,28.987459]},
        {name: '安徽', coord: [117.822505,30.952967], location: [117.234816,31.832393]},
        {name: '安徽', coord: [117.234816,31.832393], location: [117.234816,31.832393]},
        {name: '北京', coord: [116.434739,39.912057], location: [116.403613,39.915185]}
    ],
    rightTopData: {
        china: {
            averageOrder: 323,
            averageinCome: 523.23,
            hour: {
                averageOrder: 172,
                averageinCome: 102.89,
            },
            month: {
                averageOrder: 126,
                averageinCome: 889.89,
            }
        },
        guangxi: {
            averageOrder: 200,
            averageinCome: 523.23,
            hour: {
                averageOrder: 172,
                averageinCome: 102.89,
            },
            month: {
                averageOrder: 126,
                averageinCome: 889.89,
            }
        },
        beijing: {
            averageOrder: 323,
            averageinCome: 523.23,
            hour: {
                averageOrder: 172,
                averageinCome: 102.89,
            },
            month: {
                averageOrder: 126,
                averageinCome: 889.89,
            }
        },
        zhejiang: {
            averageOrder: 323,
            averageinCome: 523.23,
            hour: {
                averageOrder: 172,
                averageinCome: 102.89,
            },
            month: {
                averageOrder: 126,
                averageinCome: 889.89,
            }
        },
        anhui: {
            averageOrder: 323,
            averageinCome: 523.23,
            hour: {
                averageOrder: 172,
                averageinCome: 102.89,
            },
            month: {
                averageOrder: 126,
                averageinCome: 889.89,
            }
        }
        
    },
    lineData: {
        china: {
            year: [43023, 49013, 60239, 54234, 58023, 42230, 48234, 56809, 60124, 42334, 58232, 59203],
            month: [8013, 8323, 9023, 7034, 8902,9023, 9424, 7924, 9824, 9244, 8024,8924],
            day: [923, 802,847,780,609,809,790,892,902,948,801,856],
        },
        guangxi: {
            year: [52023, 49013, 60239, 54234, 58023, 42230, 48234, 56809, 60124, 42334, 58232, 59203],
            month: [8113, 8323, 9023, 7034, 8902,9023, 9424, 7924, 9824, 9244, 8024,8924],
            day: [933, 802,847,780,609,809,790,892,902,948,801,856],
        },
        zhejiang: {
            year: [42223, 49013, 60239, 54234, 58023, 42230, 48234, 56809, 60124, 42334, 58232, 59203],
            month: [8013, 8323, 9023, 7034, 8902,9023, 9424, 7924, 9824, 9244, 8024,8924],
            day: [923, 802,847,780,609,809,790,892,902,948,801,856],
        },
        beijing: {
            year: [43023, 49013, 60239, 54234, 58023, 42230, 48234, 56809, 60124, 42334, 58232, 59203],
            month: [8013, 8323, 9023, 7034, 8902,9023, 9424, 7924, 9824, 9244, 8024,8924],
            day: [923, 802,847,780,609,809,790,892,902,948,801,856],
        },
        anhui: {
            year: [43023, 49013, 60239, 54234, 58023, 42230, 48234, 56809, 60124, 42334, 58232, 59203],
            month: [8013, 8323, 9023, 7034, 8902,9023, 9424, 7924, 9824, 9244, 8024,8924],
            day: [923, 802,847,780,609,809,790,892,902,948,801,856],
        }
        
    },
    barData: {
        china: {
            hour: {
                category: ['30min内', '30-59min', '60-89min', '90-119min', '120min及以上'],
                data: [90, 200, 180, 120, 80]
            },
            month: {
                category: ['1个月', '1-3个月', '3-6个月', '6-12个月', '12个月及以上'],
                data: [190, 220, 190, 210, 90]
            }
        },
        guangxi: {
            hour: {
                category: ['30min内', '30-59min', '60-89min', '90-119min', '120min及以上'],
                data: [180, 200, 180, 120, 80]
            },
            month: {
                category: ['1个月', '1-3个月', '3-6个月', '6-12个月', '12个月及以上'],
                data: [180, 220, 190, 210, 90]
            }
        },
        zhejaing: {
            hour: {
                category: ['30min内', '30-59min', '60-89min', '90-119min', '120min及以上'],
                data: [90, 200, 180, 120, 80]
            },
            month: {
                category: ['1个月', '1-3个月', '3-6个月', '6-12个月', '12个月及以上'],
                data: [190, 220, 190, 210, 90]
            }
        },
        beijing: {
            hour: {
                category: ['30min内', '30-59min', '60-89min', '90-119min', '120min及以上'],
                data: [90, 200, 180, 120, 80]
            },
            month: {
                category: ['1个月', '1-3个月', '3-6个月', '6-12个月', '12个月及以上'],
                data: [190, 220, 190, 210, 90]
            }
        },
        anhui: {
            hour: {
                category: ['30min内', '30-59min', '60-89min', '90-119min', '120min及以上'],
                data: [90, 200, 180, 120, 80]
            },
            month: {
                category: ['1个月', '1-3个月', '3-6个月', '6-12个月', '12个月及以上'],
                data: [190, 220, 190, 210, 90]
            }
        }
    },
    pieData: {
        china: {
            pie1: [
                {name: '新能源车', value: 28},
                {name: '传统油车', value: 72}
            ],
            pie2: [
                {name: '小型车', value: 89},
                {name: '其他', value: 11}
            ]
        },
        guangxi: {
            pie1: [
                {name: '新能源车', value: 20},
                {name: '传统油车', value: 80}
            ],
            pie2: [
                {name: '小型车', value: 89},
                {name: '其他', value: 11}
            ]
        },
        zhejiang: {
            pie1: [
                {name: '新能源车', value: 80},
                {name: '传统油车', value: 20}
            ],
            pie2: [
                {name: '小型车', value: 89},
                {name: '其他', value: 11}
            ]
        },
        beijing: {
            pie1: [
                {name: '新能源车', value: 28},
                {name: '传统油车', value: 72}
            ],
            pie2: [
                {name: '小型车', value: 89},
                {name: '其他', value: 11}
            ]
        },
        anhui: {
            pie1: [
                {name: '新能源车', value: 28},
                {name: '传统油车', value: 72}
            ],
            pie2: [
                {name: '小型车', value: 89},
                {name: '其他', value: 11}
            ]
        }
        
    },
};