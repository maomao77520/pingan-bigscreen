import '../scss/common.scss';
import '../scss/index.scss';

import common from './common.js';
import base from '../lib/base.js';

import totalData from './indexData';

const INTERVAL = 2000;
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
    $('#J_lb_list').html(tmp(totalData.listData));

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
            boundaryGap: false,
            data: common.getHours(),
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
            data: totalData.lineData.today
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
                options.series[0].data = totalData.lineData.sevenDays;
                line.setOption(options);
            } else if (name == '30days') {
                options.xAxis.data = getDays(30);
                options.xAxis.axisLabel.interval = 3;
                options.series[0].data = totalData.lineData.month;
                line.setOption(options);
            } else {
                options.xAxis.data = common.getMonth('月');
                options.xAxis.axisLabel.interval = 0;
                options.series[0].data = totalData.lineData.year;
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
            data: totalData.pieData
        }]
    };
    let pie = echarts.init(document.getElementById('J_pie'));
    pie.setOption(options);
}

function initMap() {
    let data = totalData.mapData;

    data.map(item => {item.itemStyle = {areaColor: '#008EFA'}});
    data[0].selected = true;
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
            data: data[0].park ? [data[0].park[0]]: [],
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
        // let time = data[prev].park.length * INTERVAL;

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
        }, INTERVAL);

    }

    function getMarkData(i) {
        let res = [];
        data.map((item, index) => {
            item.park && item.park.map(p => {
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