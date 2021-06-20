import '../scss/common.scss';
import '../scss/manage.scss';

import common from './common.js';
import base from '../lib/base.js';

import totalData from './manageData';

let mapInterval;
const INTERVAL = 2000;


function initLines() {

    function getOptions({xAxisData, color1, color2, lineColor, data}) {
        return {
            grid: {
                top: 56,
                left: 46,
                right: 18,
                bottom: 40
            },
            xAxis: {
                type: 'category',
                data: xAxisData,
                axisLabel: {
                    show: true,
                    fontSize: 12,
                    color: '#93B0EB',
                    interval: 5,
                    padding: [4, 0, 0, 0]
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
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            },
            series: [{
                type: 'line',
                symbol: 'none',
                lineStyle: {
                    color: lineColor,
                    width: 2
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: color1 // 0% 处的颜色
                        }, {
                            offset: 1, color: color2 // 100% 处的颜色
                        }]
                    }
                },
                markLine: {
                    symbol: ['none', 'none'],
                    label: {show: false},
                },
                data: data
            }]
        };
    }
    let dayXAxis = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"];
    let incomeOptions = getOptions({
        xAxisData: dayXAxis,
        color1: '#FFCC00',
        color2: 'rgba(255, 168, 0, 0.13)',
        lineColor: '#FFCC00',
        data: [583, 483, 392, 192, 52, 52, 58, 88, 390, 1390, 1829, 1729, 1129, 1229, 1232, 832, 729, 889, 1729, 1819, 1929, 1769, 1629, 829, 538]
    });
    let incomeLine = echarts.init(document.getElementById('J_income_trend'));
    incomeLine.setOption(incomeOptions);

    let orderOptions = getOptions({
        xAxisData: dayXAxis,
        color1: '#0074FF',
        color2: 'rgba(0, 65, 255, 0.22)',
        lineColor: '#0084FF',
        data: [583, 483, 392, 192, 52, 52, 58, 88, 390, 1390, 1829, 1729, 1129, 1229, 1232, 832, 729, 889, 1729, 1819, 1929, 1769, 1629, 829, 538]
    });
    let orderLine = echarts.init(document.getElementById('J_order_trend'));
    orderLine.setOption(orderOptions);

    let averageOptions = getOptions({
        xAxisData: dayXAxis,
        color1: '#4CD964',
        color2: 'rgba(0, 255, 32, 0.13)',
        lineColor: '#4CD964',
        data: [583, 483, 392, 192, 52, 52, 58, 88, 390, 1390, 1829, 1729, 1129, 1229, 1232, 832, 729, 889, 1729, 1819, 1929, 1769, 1629, 829, 538]
    });
    let averageLine = echarts.init(document.getElementById('J_average_trend'));
    averageLine.setOption(averageOptions);

    $('#J_line_tabs a').on('click', function(e) {
        $('#J_line_tabs a').removeClass('active');
        $(this).addClass('active');
        let name = $(this).data('name');
        if (name == 'month') {
            incomeOptions.xAxis.data = common.getDays();
            orderOptions.xAxis.data = common.getDays();
            averageOptions.xAxis.data = common.getDays();
            incomeOptions.xAxis.axisLabel.interval = 1;
            orderOptions.xAxis.axisLabel.interval = 1;
            averageOptions.xAxis.axisLabel.interval = 1;
        } else if (name == 'year') {
            incomeOptions.xAxis.data = common.getMonth();
            orderOptions.xAxis.data = common.getMonth();
            averageOptions.xAxis.data = common.getMonth();
            incomeOptions.xAxis.axisLabel.interval = 1;
            orderOptions.xAxis.axisLabel.interval = 1;
            averageOptions.xAxis.axisLabel.interval = 1;
        } else {
            incomeOptions.xAxis.data = dayXAxis;
        }

        incomeLine.setOption(incomeOptions);
        orderLine.setOption(orderOptions);
        averageLine.setOption(averageOptions);
    });
}

function initPie() {
    function getPieOptions({data}) {
        return {
            series: [{
                type: 'pie',
                radius: ['29%', '62%'],
                center: ['46%', '45%'],
                color: ['#007AFF', '#F1C40F', '#2ECC71'],
                label: {
                    color: '#fff',
                    fontSize: 12,
                    formatter: function (param) {
                        return param.name + '\n' + param.value + '%';
                    }
                },
                labelLine: {
                    length: 15,
                    length2: 10
                },
                data: data
            }]
        };
    }
    let incomePie = echarts.init(document.getElementById('J_income_pie'));
    incomePie.setOption(getPieOptions({data: [
        {name: '路内', value: 40},
        {name: '停车场', value: 35},
        {name: '立体车库', value: 25}
    ]}));
    let orderPie = echarts.init(document.getElementById('J_order_pie'));
    orderPie.setOption(getPieOptions({data: [
        {name: '路内', value: 50},
        {name: '停车场', value: 30},
        {name: '立体车库', value: 20}
    ]}));
}

function initBar() {
    let option = {
        grid: {
            top: 40,
            left: 44,
            right: 0,
            bottom: 40
        },
        xAxis: {
            type: 'category',
            data: ['浙江', '上海', '广州', '江苏', '山东', '北京', '湖南', '四川', '湖北', '天津'],
            axisLabel: {
                show: true,
                fontSize: 12,
                color: '#93B0EB'
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#93B0EB'
                }
            },
            axisTick: {
                show: false
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
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            }
        },
        series: [{
            type: 'bar',
            barWidth: 20,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#28BBFF' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#1D5AFF' // 100% 处的颜色
                    }]
                }
            },
            data: [1802, 1789, 1702, 1598, 1567, 1460, 1390, 1250, 1203, 1120]
        }]
    };
    let bar = echarts.init(document.getElementById('J_manage_bar'));
    bar.setOption(option);

}

function initList() {
    let data = totalData.listData;

    let tmp = doT.template($('#J_list_tmp').html());
    $('#J_list_wrap').html(tmp(data));


    $('#J_list_wrap').on('click', 'li', function() {
        let index = $(this).index();
        let tmp = doT.template($('#J_project_info_tmp').html());
        $('#J_project_info').html(tmp(data[index]));
        console.log($('.right-content').css('marginTop'))
        if (parseInt($('.right-content').css('marginTop')) >= 0) {
            $('.right-content').animate({marginTop: -($('.right .income-wrap').position().top)});
        }
    });
    $('.slide-icon').on('click', function() {
        $('.right-content').animate({marginTop: 0});
    });

}

function initCenterNumber() {
    $('#J_title_tabs a').on('click', function() {
        $('#J_title_tabs a').removeClass('active');
        $(this).addClass('active');
        let name = $(this).data('name');
        $('.item-wrap').hide();
        if (name == 'order') {
            $('#J_order_wrap .year-order').score(44325, {space: 3});
            $('#J_order_wrap .year-average').score(13.97, {decimal: 2});
            $('#J_order_wrap .month-order').score(3297, {space: 3});
            $('#J_order_wrap .month-average').score(11.97, {decimal: 2});
            $('#J_order_wrap .day-order').score(297, {space: 3});
            $('#J_order_wrap .day-average').score(9.97, {decimal: 2});
        }
        $(`#J_${name}_wrap`).show();
    });

    $('#J_income_wrap .year-actual').score(44.325, {decimal: 3});
    $('#J_income_wrap .year-plan').score(32.97, {decimal: 3});
    $('#J_income_wrap .month-actual').score(32.97, {decimal: 3});
    $('#J_income_wrap .month-plan').score(32.97, {decimal: 3});
    $('#J_income_wrap .day-actual').score(32.97, {decimal: 3});
    $('#J_income_wrap .day-plan').score(32.97, {decimal: 3});

    
}

function initMap() {
    let data = totalData.mapData.year;
    data[0].selected = true;
    function getOptions({map= 'china', mapData, min, max, left=20, scatterData, scatterLabel}) {
        let intev = (max - min) / 5;
        console.log('**', mapData)
        return {
            geo: [{
                map: map,
                zoom: 1.3,
                aspectScale: 0.78,
                roam: false
            }],
            visualMap: {
                type: 'piecewise',
                z: 1,
                zlevel: 1,
                inverse: true,
                // min: min,
                // max: max,
                pieces: [
                    {min: 0, max: intev, color: '#7CB7FC'},
                    {min: intev, max: intev * 2, color: '#4896FF'},
                    {min: intev * 2, max: intev * 3, color: '#2679FF'},
                    {min: intev * 3, max: intev * 4, color: '#0051DA'},
                    {min: intev * 4, max: intev * 5, color: '#0041B9'}
                ],
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                },
                // inRange: {
                //     symbol: 'rect',
                //     color: ['#7CB7FC', '#4896FF', '#2679FF', '#0051DA', '#0041B9']
                // },
                itemGap: 8,
                itemWidth: 26,
                itemHeight: 12,
                left: left,
                bottom: 10
            },
            series: [{
                type: 'map',
                map: map,
                z: 2,
                aspectScale: 0.78,
                zoom: 1.3,
                label: {
                    show: true,
                    color: '#8FC5FF',
                    fontSize: 18
                },
                itemStyle: {
                    areaColor: '#7CB7FC',
                    borderColor: '#0A1942',
                    borderWidth: 0.5
                },
                emphasis: {
                    label: {
                        color: '#000'
                    },
                    itemStyle: {
                        areaColor: '#FFCC00'
                    }
                },
                data: mapData
            }, {
                type: 'scatter',
                z: 3,
                zlevel: 3,
                coordinateSystem: 'geo',
                symbol: 'image://../image/icon-l-active.png',
                symbolSize: [56, 66],
                symbolOffset: [0, -33],
                data: scatterData,
                itemStyle: {
                    // color: 'rgba(0, 0, 0, 0)'
                    opacity: 1
                },
                label: {
                    show: true,
                    position: 'right',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 20,
                    color: '#fff',
                    fontSize: 16,
                    formatter: function(param) {
                        return [
                            `{a|${param.name}${scatterLabel.title}收入}`,
                            `{b|${param.data.total}${scatterLabel.unit}}`,
                        ].join('\n');;
                    },
                    rich: {
                        a: {
                            color: '#fff',
                            fontSize: 16,
                            lineHeight: 24
                        },
                        b: {
                            fontSize: 28,
                            lineHeight: 30,
                            color: '#FFCC00',
                            padding: [-8, 0, 0, 0]
                        }
                    }
                }
            }]
        };
    }

    let options = getOptions({
        mapData: data,
        min: 0,
        max: 25,
        scatterData: [{
            name: data[0].name,
            value: data[0].coord,
            total: data[0].value
        }],
        scatterLabel: {
            title: '今年',
            unit: '亿元'
        }
    });
    let map = echarts.init(document.getElementById('J_map'));
    map.setOption(options);
    loop(data, options);
    
    let i = 1, prev = 0;
    function loop(data, options) {
        mapInterval && clear(data);
        mapInterval = setInterval(() => {
            options.series[0].data[prev].selected = false;
            options.series[0].data[i].selected = true;
            options.series[1].data = [{
                name: data[i].name,
                value: data[i].coord,
                total: data[i].value
            }]
            map.setOption(options);
            prev = i;
            i = (i + 1) % data.length;
        }, INTERVAL);
    }

    function getMax(data) {
        let max = 0;
        data.map(item => {
            max = item.value > max ? item.value : max;
        });
        let t = Math.ceil(max / 5);
        return parseInt(t * 5);
    };

    let scatterMap = {
        year: {title: '今年', unit: '亿元'},
        month: {title: '本月', unit: '万元'},
        day: {title: '今日', unit: '万元'}
    };

    let name = 'year';
    let mapType = 'china';
    let provinceData = [];

    function clear(data) {
        clearInterval(mapInterval)
        data[prev].selected = false;
        console.log(data, prev);
        i = 1;
        prev = 0;
    };

    map.on('click',  handleMapClick);
    function handleMapClick(param) {
        console.log(param)
        if (param.componentType == 'series') {
            mapInterval && clear(data);
            mapType = param.name;
            $.getScript(`../lib/map/${param.data.en}.js`, function() {
                $('#J_map_icon').show();
                provinceData = param.data.cityData;
                console.log('*******', provinceData)

                let provinceOptions = getOptions({
                    map: param.name,
                    mapData: provinceData,
                    min: 0,
                    max: getMax(provinceData),
                    scatterData: [{
                        name: provinceData[0].name,
                        value: provinceData[0].coord,
                        total: provinceData[0].value
                    }],
                    scatterLabel: {
                        title: scatterMap[name].title, 
                        unit: scatterMap[name].unit
                    },
                    left: 'right'
                });
                provinceData[0].selected = true;
                map.setOption(provinceOptions);
                console.log(provinceOptions)
                loop(provinceData, provinceOptions);

                $('#J_map_icon').on('click', function() {
                    mapInterval && clear(provinceData);
                    mapType = 'china';

                    let options = getOptions({
                        mapData: data,
                        min: 0,
                        max: getMax(data),
                        scatterData: [{
                            name: data[0].name,
                            value: data[0].coord,
                            total: data[0].value
                        }],
                        scatterLabel: {
                            title: scatterMap[name].title, 
                            unit: scatterMap[name].unit
                        }
                    });
                    data[0].selected = true;
                    
                    map.setOption(options);
                    loop(data, options);
                    $('#J_map_icon').hide();
                });
            });
        }
    }

    function getProvinceData(province, name) {
        let res = totalData.mapData[name].filter(item => item.name == province);
        console.log(res)
        return res[0].cityData;
    }

    $('#J_map_tabs a').on('click', function() {
        if ($(this).hasClass('active')) {
            return;
        }
        $('#J_map_tabs a').removeClass('active');
        $(this).addClass('active');

        mapInterval & clear(mapType == 'china' ? data : provinceData);
        
        name = $(this).data('name');
        
        let newData = mapType == 'china' ? totalData.mapData[name] : getProvinceData(mapType, name);
        
        
        console.log(mapType, newData)

        newData[0].selected = true;
        let newOptions = getOptions({
            map: mapType,
            mapData: newData,
            min: 0,
            max: getMax(newData),
            scatterData: [{
                name: newData[0].name,
                value: newData[0].coord,
                total: newData[0].value
            }],
            scatterLabel: {
                title: scatterMap[name].title, 
                unit: scatterMap[name].unit
            },
            left: mapType == 'china' ? 20: 'right'
        });
        console.log(newOptions)
        map.setOption(newOptions);
        loop(newData, newOptions);

    });
}

$(document).ready(function() {
    common.headerTime();
    common.initMenu();

    initLines();
    initPie();
    initBar();
    initList();

    initCenterNumber();
    initMap();
});