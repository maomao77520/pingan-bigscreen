import '../scss/common.scss';
import '../scss/index.scss';

import common from './common.js';
import base from '../lib/base.js';


const INTERVAL = 1000;
const ICON = 'image://../image/icon.png';
const ACICON = 'image://../image/icon-active.png';


// 左上数字栏
function initLTBar() {
    $('.top-number-bar .province').score(28);
    $('.top-number-bar .project').score(230);
    $('.top-number-bar .position').score(45090, {space: 3});
    $('.top-number-bar .rate').score(90.60, {decimal: 2});
    $('.top-number-bar .people').score(75639, {space: 3});
    $('.top-number-bar .total').score(295639, {space: 3});
}

// 左下滚动列表
function initLBList() {
    let tmp = doT.template($('#J_lb_list_tmp').html());
    $('#J_lb_list').html(tmp([
        {info: '浙A D***3', time: '2021-6-12 12:02:12', duration: '2:02:35', area: '浙江-杭州-西湖区-冰壶银台-B2-1802', total: '10.00'},
        {info: '浙A D***4', time: '2021-6-12 12:02:12', duration: '2:02:35', area: '浙江-杭州-西湖区-冰壶银台-B2-1802', total: '10.00'},
        {info: '浙A D***5', time: '2021-6-12 12:02:12', duration: '2:02:35', area: '浙江-杭州-西湖区-冰壶银台-B2-1802', total: '10.00'},
        {info: '浙A D***6', time: '2021-6-12 12:02:12', duration: '2:02:35', area: '浙江-杭州-西湖区-冰壶银台-B2-1802', total: '10.00'},
        {info: '浙A D***7', time: '2021-6-12 12:02:12', duration: '2:02:35', area: '浙江-杭州-西湖区-冰壶银台-B2-1802', total: '10.00'},
        {info: '浙A D***8', time: '2021-6-12 12:02:12', duration: '2:02:35', area: '浙江-杭州-西湖区-冰壶银台-B2-1802', total: '10.00'},
        {info: '浙A D***9', time: '2021-6-12 12:02:12', duration: '2:02:35', area: '浙江-杭州-西湖区-冰壶银台-B2-1802', total: '10.00'},
        {info: '浙A D***0', time: '2021-6-12 12:02:12', duration: '2:02:35', area: '浙江-杭州-西湖区-冰壶银台-B2-1802', total: '10.00'},
    ]));

    let aniList = function () {
        var ul = $("#J_lb_list");
        ul.animate({
            marginTop: - 30
        }, 1000 * 2, "linear", function () {
            ul.css({
                marginTop: 0
            });
            ul.find("li:eq(0)").appendTo(ul);
            aniList();
        });
    };

    setTimeout(() => {
        aniList();
    }, 2000);
}

function initRightLine () {
    let options = {
        grid: {
            top: 30,
            left: 46,
            right: 18
        },
        xAxis: {
            type: 'category',
            data: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
            axisLabel: {
                show: true,
                fontSize: 12,
                color: '#93B0EB',
                interval: 1,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#93B0EB'
                }
            },
            axisTick: {
                show: true
            }
        },
        yAxis: {
            type: 'value',
            name: '单位：元',
            nameTextStyle: {
                fontSize: 12,
                color: '#93B0EB',
                padding: [0, 0, 0, -30]
            },
            splitNumber: 4,
            axisLabel: {
                show: true,
                fontSize: 12,
                color: '#93B0EB',
                interval: 0
            },
            axisLine: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: '#93B0EB'
                }
            }
        },
        series: [{
            type: 'line',
            symbol: 'none',
            lineStyle: {
                color: '#0084FF',
                width: 3
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(0, 132, 255, 0.5)' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(0, 119, 255, 0)' // 100% 处的颜色
                    }]
                }
            },
            markLine: {
                symbol: ['none', 'none'],
                label: {show: false},
            },
            data: [583, 483, 392, 192, 52, 52, 58, 88, 390, 1390, 1829, 1729, 1129, 1229, 1232, 832, 729, 889, 1729, 1819, 1929, 1769, 1629, 829, 538]
        }]
    };
    let line = echarts.init(document.getElementById('J_right_line'));
    line.setOption(options);

    // 不知道为啥visualMap清除不了，只能做两个了
    let todayOptions = Object.assign({}, options, {
        visualMap: {
            type: 'piecewise',
            show: false,
            dimension: 0,
            seriesIndex: 0,
            pieces: [{
                gt: 9,
                lt: 11,
                color: '#FFAB00'
            }, {
                gt: 18,
                lt: 22,
                color: '#FFAB00'
            }]
        }
    });
    todayOptions.series[0].areaStyle = {};
    let todayLine = echarts.init(document.getElementById('J_right_line_today'));
    todayLine.setOption(todayOptions);
    

    $('#J_tabs a').on('click', function(e) {
        $('#J_tabs a').removeClass('active');
        $(this).addClass('active');
        let name = $(this).data('name');
        if (name == 'today') {
            $('#J_right_line_today').show();
            $('#J_right_line').hide();
        } else {
            $('#J_right_line_today').hide();
            $('#J_right_line').show();
            if (name == '7days') {
                options.xAxis.data = getDays(7);
                options.xAxis.axisLabel.interval = 0;
                options.series[0].data = [20190, 21237, 31241, 28312, 40932, 48212, 47102];
                line.setOption(options);
            } else if (name == '30days') {
                options.xAxis.data = getDays(30);
                options.xAxis.axisLabel.interval = 3;
                options.series[0].data = [20190, 21237, 31241, 28312, 40932, 48212, 47102, 20190, 21237, 31241, 28312, 40932, 48212, 47102, 20190, 21237, 31241, 28312, 40932, 48212, 47102, 20190, 21237, 31241, 28312, 40932, 48212, 47102];
                line.setOption(options);
            } else {
                options.xAxis.data = getMonth();
                options.xAxis.axisLabel.interval = 0;
                options.series[0].data = [20190, 21237, 31241, 28312, 40932];
                line.setOption(options);
            }
        }
    }); 

}

function getDays(days) {
    let res = [];
    for (let i = days; i > 0; i--) {
        res.push(common.getDay(0 - i));
    }
    return res;
}

function getMonth() {
    let curr = new Date().getMonth();
    let res = [];
    for (let i = 1; i <= curr; i++) {
        res.push(i + '月');
    }
    return res;
}

function initRightPie () {
    let options = {
        series: [{
            type: 'pie',
            radius: ['32%', '75%'],
            center: ['45%', '52%'],
            color: ['#34495E ', '#007AFF', '#FF9500', '#2ECC71'],
            label: {
                color: '#fff',
                fontSize: 12,
                formatter: function (param) {
                    return param.name + '\n' + param.value + '%';
                }
            },
            labelLine: {
                length: 5,
                length2: 10
            },
            data: [
                { name: '第三方', value: 5.9 },
                { name: '支付宝', value: 35.3 },
                { name: '现金', value: 17.6 },
                { name: '微信', value: 41.2 }
            ]
        }]
    };
    let pie = echarts.init(document.getElementById('J_pie'));
    pie.setOption(options);
}

function initMap() {
    let data = [
        {
            name: '浙江',
            park: [
                {name: '杭州-滨湖银泰停车场', value: [121.153576,28.987459], coord: [121.153576,28.987459], No: 'AB7892', car: '浙AG***6', time: '1:20:34', pay: 'wechat', total: 15},
                {name: '杭州-滨湖银泰停车场1', value: [121.153576,28.587459], coord: [121.153576,28.587459], No: 'AB7892', car: '浙AG***6', time: '1:20:34', pay: 'wechat', total: 15},
                {name: '杭州-滨湖银泰停车场2', value: [120.053576,28.587459], coord: [120.053576,28.587459], No: 'AB7892', car: '浙AG***6', time: '1:20:34', pay: 'wechat', total: 15},
            ],
            itemStyle: {areaColor: '#008EFA'},
            selected: true
        }, {
            name: '广西',
            park: [
                {name: '南宁-滨湖银泰停车场', value: [108.418194,22.839025], coord: [108.418194,22.839025], No: 'AB7892', car: '浙AG***6', time: '1:20:34', pay: 'ali', total: 15},
                {name: '柳州-滨湖银泰停车场', value: [109.499036,24.39228], coord: [109.499036,24.39228], No: 'AB7892', car: '浙AG***6', time: '1:20:34', pay: 'ali', total: 15},
            ],
            itemStyle: {areaColor: '#008EFA'}
        }, {
            name: '湖南',
            park: [
                {name: '长沙-滨湖银泰停车场', value: [112.994522,28.213559], coord: [112.994522,28.213559], No: 'AB7892', car: '浙AG***6', time: '1:20:34', pay: 'cash', total: 15},
                {name: '衡阳-滨湖银泰停车场', value: [112.644973,26.910059], coord: [112.644973,26.910059], No: 'AB7892', car: '浙AG***6', time: '1:20:34', pay: 'cash', total: 15},
            ],
            itemStyle: {areaColor: '#008EFA'}
        }, {
            name: '贵州',
            park: [
                {name: '贵阳-滨湖银泰停车场', value: [106.635091,26.654039], coord: [106.635091,26.654039], No: 'AB7892', car: '浙AG***6', time: '1:20:34', pay: 'other', total: 25}
            ],
            itemStyle: {areaColor: '#008EFA'}
        }
        
    ];

    let markData = getMarkData(0);

    let options = {
        geo: [{
			map: 'china',
			zoom: 1.2,
			aspectScale: 0.78,
			roam: false
		}],
        series: [{
            type: 'map',
            map: 'china',
            z: 2,
            aspectScale: 0.78,
            zoom: 1.2,
            label: {
                show: true,
                color: '#8FC5FF',
                fontSize: 18
            },
            itemStyle: {
                areaColor: '#143D90',
                borderColor: '#0A1942',
                borderWidth: 0.5
            },
            emphasis: {
                label: {
                    color: '#000'
                },
                itemStyle: {
                    areaColor: '#FFCC00 '
                }
            },
            data: data,
            markPoint: {
                symbol: ICON,
                symbolSize: [29, 34],
                label: {
                    show: false
                },
                data: markData
            }
        }, {
            type: 'scatter',
            z: 3,
            zlevel: 3,
            coordinateSystem: 'geo',
            data: [data[0].park[0]],
            itemStyle: {
                color: 'rgba(0, 0, 0, 0)'
            },
            label: {
                show: true,
                position: 'right',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 20,
                offset: [20, 0],
                color: '#fff',
                fontSize: 16,
                formatter: function(param) {
                    return [
                        `{a|车场名称：${param.name}}`,
                        `{a|泊位号：${param.data.No}}`,
                        `{a|车牌信息：${param.data.car}}`,
                        `{a|停车时长：${param.data.time}}`,
                        `{a|支付方式：}${param.data.pay == 'wechat'
                            ? '{b|}' : param.data.pay == 'ali'
                                ? '{c|}' : param.data.pay == 'cash'
                                    ? '{d|}' : '{e|}'}{a|￥${param.data.total}}`,
                    ].join('\n');;
                },
                rich: {
                    a: {
                        color: '#fff',
                        fontSize: 16,
                        lineHeight: 22
                    },
                    b: {
                        width: 16,
                        height: 16,
                        backgroundColor: {
                            image: '../image/pay-wechat.png'
                        }
                    },
                    c: {
                        width: 16,
                        height: 16,
                        backgroundColor: {
                            image: '../image/pay-ali.png'
                        }
                    },
                    d: {
                        width: 16,
                        height: 16,
                        backgroundColor: {
                            image: '../image/pay-cash.png'
                        }
                    },
                    e: {
                        width: 16,
                        height: 16,
                        backgroundColor: {
                            image: '../image/pay-other.png'
                        }
                    }
                }
            }
        }]
    };
    let map = echarts.init(document.getElementById('J_map'));
    map.setOption(options);
    var i = 1, prev = 0;
    loop(i);

    function loop(i) {
        let time = data[prev].park.length * INTERVAL;
        let mkData = getMarkData(i);
        let timeout = setTimeout(() => {
            options.series[0].data[i].selected = true;
            options.series[0].data[prev].selected = false;
            options.series[0].markPoint.data = mkData;
            options.series[1].data = [data[i].park[Math.floor(Math.random() * data[i].park.length)]];
            map.setOption(options);
            prev = i;
            i = (i + 1) % data.length;
            loop(i);
        }, time);

    }

    function getMarkData(i) {
        let res = [];
        data.map((item, index) => {
            item.park.map(p => {
                if (index == i) {
                    res.push(Object.assign({}, p, {symbol: ACICON}));
                } else {
                    res.push(Object.assign({}, p));
                }
            });
        });
        return res;
    }
}

$(document).ready(function() {
    common.headerTime();
    common.initMenu();
    initLTBar();
    initLBList();

    initMap();

    initRightLine();
    initRightPie();


    $('.today-index .order').score(23056, {space: 3});
    $('.today-index .total').score(123, {space: 3});
    $('.today-index .rate1').score(12, {decimal: 1});
    $('.today-index .rate2').score(7.4, {decimal: 1});
    
    $('.now-index .total').score(10.5, {decimal: 1});
    $('.now-index .count').score(43886, {space: 3});
    $('.now-index .rate').score(97.4, {decimal: 1});
});