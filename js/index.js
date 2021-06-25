import '../scss/common.scss';
import '../scss/index.scss';

import common from './common.js';
import base from '../lib/base.js';

import totalData from './indexData';

const INTERVAL = 3000;
const ICON = 'image://../image/icon.png';
const ACICON = 'image://../image/icon-active.png';


// 左上数字栏
function initLTBar(data) {
    function initBox1() {
        // var cl;
        // $('#J_top_number_1 .item').each(function(i, n) {
        //     cl = $(this).find('.number').attr('class');
        //     $(this).find('.number').remove();
        //     $(this).append(`<div class="${cl}"></div>`);
        // });

        $('#J_top_number_1 .province').score(data.province);
        $('#J_top_number_1 .project').score(data.project);
        $('#J_top_number_1 .position').score(data.position, {space: 3});
        $('#J_top_number_1 .rate').score(data.rate, {decimal: 1});
        $('#J_top_number_1 .people').score(data.people, {space: 3});
        $('#J_top_number_1 .equipment').score(data.equipment, {decimal: 2});
        $('#J_top_number_1 .total').score(data.total, {space: 3});
    }
    
    function initBox2() {
        // var cl;
        // $('#J_top_number_2 .item').each(function(i, n) {
        //     cl = $(this).find('.number').attr('class');
        //     $(this).find('.number').remove();
        //     $(this).append(`<div class="${cl}"></div>`);
        // });
        $('#J_top_number_2 .check').score(data.check, {space: 3});
        $('#J_top_number_2 .video').score(data.video, {space: 3});
        $('#J_top_number_2 .lock').score(data.lock, {space: 3});
        $('#J_top_number_2 .car').score(data.car);
        $('#J_top_number_2 .pos').score(data.pos, {space: 3});
        $('#J_top_number_2 .tech').score(data.tech, {decimal: 2});
    }
    initBox1();
    var i = 0;
    var flag = false;
    setInterval(() => {
        if (!flag) {
            initBox2();
            flag = true;
        }
        i = (i + 1) % $('.top-number-bar').length;
        $('.top-number-bar').hide();
        $('.top-number-bar').eq(i).show();
        
    }, INTERVAL);

}

// 左下滚动列表
function initLBList(data) {
    let tmp = doT.template($('#J_lb_list_tmp').html());
    $('#J_lb_list').html(tmp(data));

    
    let aniList = function () {
        var ul = $("#J_lb_list");
        ul.stop().animate({
            marginTop: - 30
        }, 1000 * 2, "linear", function () {
            ul.find("li:eq(0)").appendTo(ul);
            ul.css({
                marginTop: 0
            });
            aniList();
        });
    };

    setTimeout(() => {
        aniList();
    }, 2000);
}

function initRightLine (data) {
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
            data: data.today
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
                options.series[0].data = data.sevenDays;
                line.setOption(options);
            } else if (name == '30days') {
                options.xAxis.data = getDays(30);
                options.xAxis.axisLabel.interval = 3;
                options.series[0].data = data.month;
                line.setOption(options);
            } else {
                options.xAxis.data = common.getMonth('月');
                options.xAxis.axisLabel.interval = 0;
                options.series[0].data = data.year;
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


function initRightPie (data) {
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
            data: data
        }]
    };
    let pie = echarts.init(document.getElementById('J_pie'));
    pie.setOption(options);
}

function initMap(data) {

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
                symbolOffset: [0, -17],
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

function initRightBoxNumber(data) {
    $('.today-index .order').score(data.order, {space: 3});
    $('.today-index .income').score(data.income, {space: 3});
    $('.today-index .use').score(data.use, {decimal: 1});
    $('.today-index .overturn').score(data.overturn, {decimal: 1});
    
    $('.now-index .average-income').score(data.averageIncome, {decimal: 1});
    $('.now-index .actual-use').score(data.actualUse, {space: 3});
    $('.now-index .actual-overturn').score(data.actualOverturn, {decimal: 1});
}

$(document).ready(function() {
    common.headerTime();
    common.initMenu();
    initLTBar(totalData.topNumber);
    initLBList(totalData.listData);

    initMap(totalData.mapData);

    initRightLine(totalData.lineData);
    initRightPie(totalData.pieData);
    initRightBoxNumber(totalData.rightBoxNumber);

    
});