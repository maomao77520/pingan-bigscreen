import '../scss/common.scss';
import '../scss/finance.scss';

import common from './common.js';
import base from '../lib/base.js';

import totalData from './financeData.js';

const INTERVAL = 1000000;
const ICON = 'image://../image/icon.png';
const ACICON = 'image://../image/icon-l-active.png';

let globalInterval;

// 左下滚动列表
function initLBList(data) {
    let listData = [];
    data.map(item => {
        listData.push(item.baseData);
    });
    let tmp = doT.template($('#J_lb_list_tmp').html());
    $('#J_lb_list').html(tmp(listData));

}


function initRight(data) {
    let tmp = doT.template($('#J_right_tmp').html());
    $('#J_right_info').html(tmp(data.baseData));

    initStatistic(data.statisticData);

    initChart({
        lineData: data.lineData,
        pieData: data.pieData
    });
}

function initStatistic(data) {
    $('.statistic-info .year-income').score(data.income.yearIncome, {decimal: 2});
    $('.statistic-info .month-income').score(data.income.monthIncome, {decimal: 2});
    $('.statistic-info .day-income').score(data.income.dayIncome, {decimal: 2});
    $('.statistic-info .year-order').score(data.income.yearOrder, {decimal: 2});
    $('.statistic-info .month-order').score(data.income.monthOrder, {decimal: 2});
    $('.statistic-info .day-order').score(data.income.dayOrder, {decimal: 2});
    $('.statistic-info .order-income').score(data.income.orderIncome, {decimal: 2});

    $('.statistic-info .now-used').score(data.useRate.use);
    $('.statistic-info .average-used').score(data.useRate.averageUse);
    $('.statistic-info .now-rate').score(data.useRate.useRate, {decimal: 2});
    $('.statistic-info .average-rate').score(data.useRate.averageRate, {decimal: 2});
    $('.statistic-info .now-turnover').score(data.useRate.turnover, {decimal: 2});
    $('.statistic-info .average-turnover').score(data.useRate.averageTurnover, {decimal: 2});

    $('#J_statistic_tabs a').on('click', function() {
        $('#J_statistic_tabs a').removeClass('active');
        $(this).addClass('active');
        let name = $(this).data('name');
        $('.item-wrap').hide();
        $(`#J_${name}_wrap`).show();
    });
}

function initChart(data) {
    let lineOptions = {
        grid: {
            top: 46,
            left: 46,
            right: 18,
            bottom: 40
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: common.getHours(),
            axisLabel: {
                show: true,
                fontSize: 12,
                color: '#93B0EB',
                interval: 4,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#93B0EB'
                }
            },
            axisTick: {
                show: true,
                interval: 1
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
            smooth: 0.1,
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
            data: data.lineData.day
        }]
    };
    let line = echarts.init(document.getElementById('J_line'));
    line.setOption(lineOptions);

    let todayLineOptions = Object.assign({}, lineOptions, {
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
        },
    });
    todayLineOptions.series[0].areaStyle = {};
    let todayLine = echarts.init(document.getElementById('J_line_today'));
    todayLine.setOption(todayLineOptions);
    

    let pieOptions = {
        series: [{
            type: 'pie',
            radius: ['29%', '62%'],
            center: ['46%', '50%'],
            color: ['#34495E ', '#007AFF', '#FF9500', '#2ECC71'],
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
            data: data.pieData.day
        }]
    };
    let pie = echarts.init(document.getElementById('J_pie'));
    pie.setOption(pieOptions);

    $('#J_line_tabs a').on('click', function(e) {
        $('#J_line_tabs a').removeClass('active');
        $(this).addClass('active');
        let name = $(this).data('name');
        if (name == 'day') {
            $('#J_line').hide();
            $('#J_line_today').show();
        } else {
            $('#J_line_today').hide();
            $('#J_line').show();
            if (name == 'month') {
                lineOptions.xAxis.data = common.getDays();
                lineOptions.xAxis.axisLabel.interval = 1;
            } else if (name == 'year') {
                lineOptions.xAxis.data = common.getMonth();
                lineOptions.xAxis.axisLabel.interval = 1;
            } 
            lineOptions.series[0].data = data.lineData[name];
            line.setOption(lineOptions);
        }
        pieOptions.series[0].data = data.pieData[name];
        pie.setOption(pieOptions);
    });
}


function getActiveIndex(data, coord) {
    for(var i = data.length - 1; i >= 0; i--) {
        if (data[i].coord[0] == coord[0] && data[i].coord[1] == coord[1]) {
            return i;
        }
    }
    return -1;
}

function getMapOptions({map='china', mapData, markData}) {
    return {
        geo: [{
			map: map,
			zoom: 1.22,
			aspectScale: 0.75,
			roam: false
		}],
        series: [{
            type: 'map',
            map: map,
            z: 2,
            aspectScale: 0.75,
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
                data: markData
            }
        }]
    }
}

$(document).ready(function() {
    common.headerTime();
    common.initMenu();
    initLBList(totalData.data);
    initRight(totalData.data[0]);


    let mapData = [];
    let markData = totalData.markData; // 全国和省份使用同一份数据
    totalData.mapData.map((item) => {
        mapData.push(Object.assign({}, item, {itemStyle: {areaColor: '#008EFA'}}));
    });

    console.log(markData, totalData.data[0].baseData.coord)

    // 当前高亮index
    let markIndex = getActiveIndex(markData, totalData.data[0].baseData.coord);
    let mapIndex = getActiveIndex(mapData, totalData.data[0].baseData.location);

    mapData[mapIndex].selected = true;
    
    markData[markIndex].symbol = ACICON;
    markData[markIndex].symbolSize = [56, 66];
    markData[markIndex].symbolOffset = [0, -33];

    let mapOptions = getMapOptions({
        mapData,
        markData
    });
    let map = echarts.init(document.getElementById('J_map'));
    map.setOption(mapOptions);
    console.log(mapOptions)

    var i = 0, prev, prevMarkIndex;
    loop(mapData, mapOptions, totalData.data);

    let aniList = function () {
        var ul = $("#J_lb_list");
        ul.animate({
            marginTop: -30
        }, 600, "linear", function () {
            ul.css({
                marginTop: 0
            });
            ul.find("li:eq(0)").appendTo(ul);
        });
    };

    // 这几个变量 全局使用
    
    function loop(mapData, mapOptions, projectData) {
        i = 0, prev = mapIndex, prevMarkIndex = markIndex;
        globalInterval && clearInterval(globalInterval);
        globalInterval = setInterval(() => {
            i = (i + 1) % projectData.length;
            aniList();
            initRight(projectData[i]);
            let markIndex = getActiveIndex(markData, projectData[i].baseData.coord);
            let mapIndex = getActiveIndex(mapData, projectData[i].baseData.location);
    
            mapOptions.series[0].data[prev].selected = false;
            mapOptions.series[0].data[mapIndex].selected = true;
    
            markData[markIndex].symbol = ACICON;
            markData[markIndex].symbolSize = [56, 66];
            markData[markIndex].symbolOffset = [0, -33];
            markData[prevMarkIndex].symbol = ICON;
            markData[prevMarkIndex].symbolSize = [29, 34];
    
            mapOptions.series[0].markPoint.data = markData;
    
            map.setOption(mapOptions);
            prev = mapIndex;
            prevMarkIndex = markIndex;
            
        }, INTERVAL);
    }
    
    function clear(data) {
        globalInterval && clearInterval(globalInterval);
        data[prev].selected = false;
        // data[i].selected = false;
        markData[prevMarkIndex].symbol = ICON;
        markData[prevMarkIndex].symbolSize = [29, 34];
    }
    // 地图点击处理函数
    function handleChinaMapClick(param) {
        console.log(param);
        globalInterval && clear(mapData);
        if (param.componentType == 'markPoint') { // 防止点到markPoint上被触发
            // 清除当前高亮，将点击地图块置为高亮
            mapOptions.series[0].data[prev].selected = false;
            let mapIndex = getActiveIndex(mapData, param.data.location)
            let markIndex = getActiveIndex(markData, param.data.coord);

            if (mapOptions.series[0].data[mapIndex]) {
                mapOptions.series[0].data[prev].selected = false;
                mapOptions.series[0].data[mapIndex].selected = true;
                markData[markIndex].symbol = ACICON;
                markData[markIndex].symbolSize = [56, 66];
                markData[prevMarkIndex].symbol = ICON;
                markData[prevMarkIndex].symbolSize = [29, 34];
                mapOptions.series[0].markPoint.data = markData;
                
                prev = mapIndex;
                prevMarkIndex = markIndex;
            }

            map.setOption(mapOptions);


            let dataIndex;
            for (let i = 0; i < totalData.data.length; i++) {
                if (totalData.data[i].baseData.coord[0] == param.data.coord[0]
                    && totalData.data[i].baseData.coord[1] == param.data.coord[1]) {
                        dataIndex = i;
                        break;
                    }
            }
            if (dataIndex >= 0) {
                console.log(dataIndex)
                initRight(totalData.data[dataIndex]);
                // 重新按顺序渲染列表，方便通过dataIndex找到数据
                initLBList(totalData.data);
                var ul = $("#J_lb_list");
                ul.animate({
                    marginTop: -dataIndex * 30
                }, 600, "linear", function () {
                    ul.css({
                        marginTop: 0
                    });
                    for (let j = 0; j < dataIndex; j++) {
                        ul.find(`li:eq(0)`).appendTo(ul);
                    }
                });
            }
        } else {
            let key = param.data.en;
            $.getScript(`../lib/map/${key}.js`, function() {
                let pMapData = []
                totalData.provinceData[key].map((item, index) => {
                    pMapData.push({
                        name: item.baseData.city + '市',
                        coord: item.baseData.location,
                        itemStyle: {areaColor: '#008EFA'}
                    });
                });
                let pMapIndex = getActiveIndex(pMapData, totalData.provinceData[key][0].baseData.location);
                let markIndex = getActiveIndex(markData, totalData.provinceData[key][0].baseData.coord);

                pMapData[pMapIndex].selected = true;
                markData[prevMarkIndex].symbol = ICON;
                markData[prevMarkIndex].symbolSize = [29, 34];
                markData[markIndex].symbol = ACICON;
                markData[markIndex].symbolSize = [56, 66];
                markData[markIndex].symbolOffset = [0, -33];
                
    
                mapOptions.series[0].markPoint.data = markData;

                let provinceOptions = getMapOptions({
                    map: param.name,
                    mapData: pMapData,
                    markData
                });
                console.log(pMapData, provinceOptions, markData, markIndex);
                map.setOption(provinceOptions);

                prev = pMapIndex;
                prevMarkIndex = markIndex;

                initLBList(totalData.provinceData[key]);
                initRight(totalData.provinceData[key][0]);

                loop(pMapData, provinceOptions, totalData.provinceData[key]);

                map.off('click',  handleChinaMapClick);
                map.on('click', handleProvinceMapClick.bind(this, provinceOptions, pMapData));
                $('#J_map_icon').show();
                $('#J_map_icon').on('click', function() {
                    globalInterval && clear(mapData);
                    $('#J_map_icon').hide();
                    let markIndex = getActiveIndex(markData, totalData.data[0].baseData.coord);
                    let mapIndex = getActiveIndex(mapData, totalData.data[0].baseData.location);

                    mapData[mapIndex].selected = true;
                    
                    markData[markIndex].symbol = ACICON;
                    markData[markIndex].symbolSize = [56, 66];
                    markData[markIndex].symbolOffset = [0, -33];
                    let mapOptions = getMapOptions({
                        mapData,
                        markData
                    });
                    mapData[0].selected = true;
                    map.setOption(mapOptions);
                    loop(mapData, mapOptions, totalData.data);
                    map.on('click',  handleChinaMapClick);
                });
            });
            
        }
        
    }
    map.on('click',  handleChinaMapClick);

    function handleProvinceMapClick(mapOptions, mapData, param) {
        if (param.componentType == 'markPoint') { // 防止点到markPoint上被触发
            // 清除当前高亮，将点击地图块置为高亮
            mapOptions.series[0].data[prev].selected = false;
            let mapIndex = getActiveIndex(mapData, param.data.location)
            let markIndex = getActiveIndex(markData, param.data.coord);

            if (mapOptions.series[0].data[mapIndex]) {
                mapOptions.series[0].data[prev].selected = false;
                mapOptions.series[0].data[mapIndex].selected = true;
                markData[markIndex].symbol = ACICON;
                markData[markIndex].symbolSize = [56, 66];
                markData[prevMarkIndex].symbol = ICON;
                markData[prevMarkIndex].symbolSize = [29, 34];
                mapOptions.series[0].markPoint.data = markData;
                
                prev = mapIndex;
                prevMarkIndex = markIndex;
            }

            map.setOption(mapOptions);

            let dataIndex;
            for (let i = 0; i < totalData.data.length; i++) {
                if (totalData.data[i].baseData.coord[0] == param.data.coord[0]
                    && totalData.data[i].baseData.coord[1] == param.data.coord[1]) {
                        dataIndex = i;
                        break;
                    }
            }

            if (dataIndex >= 0) {
                initRight(totalData.data[dataIndex]);
                initLBList([totalData.data[dataIndex]]);
            }
        }
    }

    $('.top-number-bar .project').score(230);
    $('.top-number-bar .position').score(45090, {space: 3});
    $('.top-number-bar .total').score(87043, {space: 3});
 
});