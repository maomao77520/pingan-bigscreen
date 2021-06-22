import '../scss/common.scss';
import '../scss/service.scss';

import common from './common.js';
import base from '../lib/base.js';

import totalData from './serviceData';

const INTERVAL = 2000;
const ICON = 'image://../image/icon.png';
let interval;

function initTopNumber({total, year, month, today}) {
    $('#J_top_number .total').score(total, {decimal: 2});
    $('#J_top_number .year').score(year, {decimal: 2});
    $('#J_top_number .month').score(month, {space: 3});
    $('#J_top_number .today').score(today, {space: 3});
}

function initLeftBar() {
    let option = {
        grid: {
            top: 5,
            left: 35,
            right: 0,
            bottom: 20
        },
        yAxis: {
            type: 'category',
            data: totalData.leftBar.most.category,
            axisLabel: {
                show: true,
                fontSize: 12,
                color: '#93B0EB'
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        xAxis: {
            type: 'value',
            splitNumber: 5,
            axisLabel: {
                show: false
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
            barWidth: 10,
            barGap: 26,
            itemStyle: {
                barBorderRadius: 10,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#6DFBFB' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#007FFF' // 100% 处的颜色
                    }]
                }
            },
            data: totalData.leftBar.most.data
        }]
    };
    let bar = echarts.init(document.getElementById('J_left_bar'));
    bar.setOption(option);

    $('#J_bar_tabs a').on('click', function() {
        $('#J_bar_tabs a').removeClass('active');
        $(this).addClass('active');
        let name = $(this).data('name');
        option.yAxis.data = totalData.leftBar[name].category;
        option.series[0].data = totalData.leftBar[name].data;
        bar.setOption(option);
    });

}

function getMapOptions({map = 'china', aspectScale=0.7, mapData, markData, scatterData, max}) {
    let intev = max / 5;
    return {
        geo: [{
			map: map,
			zoom: 1.22,
			aspectScale: aspectScale,
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
            align: 'left',
            itemGap: 8,
            itemWidth: 26,
            itemHeight: 12,
            right: 40,
            bottom: map == 'china' ? 300 : 20
        },
        series: [{
            type: 'map',
            map: map,
            z: 2,
            aspectScale: aspectScale,
            zoom: 1.22,
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
            data: mapData,
            markPoint: {
                symbol: ICON,
                symbolSize: [29, 34],
                symbolOffset: [0, -17],
                label: {
                    show: false
                },
                data: totalData.markData
            }
        },  {
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
                        `{a|${param.name} 服务车主}`,
                        `{b|${param.data.total}万人}`,
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
    }
}
function initMap() {
    let mapData = [];
    totalData.mapData.map((item) => {
        mapData.push(Object.assign({}, item, {itemStyle: {areaColor: '#008EFA'}}));
    });
    mapData[0].selected = true;
    let option = getMapOptions({
        mapData: mapData,
        // markData: totalData.markData,
        scatterData: [{
            name: mapData[0].name,
            value: mapData[0].coord,
            total: mapData[0].value
        }],
        max: common.getMax(mapData)
    });
    let map = echarts.init(document.getElementById('J_map'));
    map.setOption(option);

    loop(mapData, option);
    var i = 1, prev = 0, mapType = 'china', provinceData;

    function clear(data) {
        clearInterval(interval)
        data[prev].selected = false;
        data[i].selected = false;
        i = 1;
        prev = 0;
    };
    
    function loop(mapData, option) {
        interval && clear(mapData);
        interval = setInterval(() => {
            option.series[0].data[prev].selected = false;
            option.series[0].data[i].selected = true;
            option.series[1].data = [{
                name: mapData[i].name,
                value: mapData[i].coord,
                total: mapData[i].value
            }]
            map.setOption(option);
            prev = i;
            i = (i + 1) % mapData.length;
        }, INTERVAL);
    }

    map.on('click',  handleMapClick);
    function handleMapClick(param) {
        if (param.componentType == 'series') {
            interval && clear(mapData);
            mapType = param.name;
            $.getScript(`../lib/map/${param.data.en}.js`, function() {
                $('#J_map_icon').show();
                provinceData = param.data.cityData;

                let provinceOptions = getMapOptions({
                    map: param.name,
                    mapData: provinceData,
                    max: common.getMax(provinceData),
                    scatterData: [{
                        name: provinceData[0].name,
                        value: provinceData[0].coord,
                        total: provinceData[0].value
                    }],
                    aspectScale: 1
                });
                provinceData[0].selected = true;
                map.setOption(provinceOptions);
                loop(provinceData, provinceOptions);

                $('#J_map_icon').on('click', function() {
                    interval && clear(provinceData);
                    
                    mapData = totalData.mapData;
                    
                    let option = getMapOptions({
                        mapData: mapData,
                        min: 0,
                        max: common.getMax(mapData),
                        scatterData: [{
                            name: mapData[0].name,
                            value: mapData[0].coord,
                            total: mapData[0].value
                        }]
                    });
                    mapData[0].selected = true;
                    
                    map.setOption(option);
                    loop(mapData, option);
                    $('#J_map_icon').hide();
                    mapType = 'china';
                });
            });
        }
    }
}

function initLine() {
    let option = {
        grid: {
            top: 30,
            left: 46,
            right: 18,
            bottom: 30
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: common.getMonth('月'),
            axisLabel: {
                show: true,
                fontSize: 12,
                color: '#93B0EB',
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
            name: '单位：人',
            nameTextStyle: {
                fontSize: 12,
                color: '#93B0EB',
                padding: [0, 0, 0, -35]
            },
            splitNumber: 3,
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
            smooth: true,
            lineStyle: {
                color: '#007AFF',
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
                        offset: 0, color: '#0074FF' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(0, 65, 255, 0.22)' // 100% 处的颜色
                    }]
                }
            },
            markLine: {
                symbol: ['none', 'none'],
                label: {show: false},
            },
            data: totalData.lineData.year
        }]
    };
    let line = echarts.init(document.getElementById('J_line'));
    line.setOption(option);

    let mapper = {
        year: common.getMonth('月'),
        month: common.getDays(),
        day: common.getHours()
    };

    $('#J_line_tabs a').on('click', function() {
        $('#J_line_tabs a').removeClass('active');
        $(this).addClass('active');
        let name = $(this).data('name');
        option.xAxis.data = mapper[name];
        option.series[0].data = totalData.lineData[name];
        line.setOption(option);
    });
}

function initBars() {
    function getOptions({category, data}) {
        return {
            grid: {
                top: 20,
                left: 44,
                right: 0,
                bottom: 55
            },
            xAxis: {
                type: 'category',
                data: category,
                axisLabel: {
                    show: true,
                    fontSize: 12,
                    color: '#93B0EB',
                    rotate: 30
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
                data: data
            }]
        };
        
    }
    let bar1 = echarts.init(document.getElementById('J_bar_1'));
    let bar2 = echarts.init(document.getElementById('J_bar_2'));
    console.log(getOptions({
        category: totalData.barData.hour.category,
        data: totalData.barData.hour.data
    }))
    bar1.setOption(getOptions({
        category: totalData.barData.hour.category,
        data: totalData.barData.hour.data
    }));
    bar2.setOption(getOptions({
        category: totalData.barData.month.category,
        data: totalData.barData.month.data
    }));
}

function initPie() {
    function getOptions({color, data}) {
        return {
            series: [{
                type: 'pie',
                radius: ['35%', '80%'],
                center: ['50%', '48%'],
                color: color,
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
        }
    }

    let pie1 = echarts.init(document.getElementById('J_pie_1'));
    let pie2 = echarts.init(document.getElementById('J_pie_2'));
    pie1.setOption(getOptions({color: ['#2ECC71', '#007AFF'], data: totalData.pieData.pie1}));
    pie2.setOption(getOptions({color: ['#FF9500', '#2ECC71'], data: totalData.pieData.pie2}));
}
$(document).ready(function() {
    common.headerTime();
    common.initMenu();

    initLeftBar();
    initMap();

    initLine();
    initBars();
    initPie();

    initTopNumber(totalData.topData.total);

    $('#J_number_tabs a').on('click', function() {
        $('#J_number_tabs a').removeClass('active');
        $(this).addClass('active');
        let name = $(this).data('name');
        initTopNumber(totalData.topData[name]);
    });

    $('.total-wrap .head-order').score(323, {space: 3});
    $('.total-wrap .head-income').score(523.32, {decimal: 2});
    $('.total-wrap .hour-order').score(172, {space: 3});
    $('.total-wrap .hour-income').score(102.89, {decimal: 2});
    $('.total-wrap .month-order').score(126, {space: 3});
    $('.total-wrap .month-income').score(822.09, {decimal: 2});
});