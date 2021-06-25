import '../scss/common.scss';
import '../scss/station.scss';

import common from './common.js';
import base from '../lib/base.js';

import totalData from './stationData';

const INTERVAL = 3000;
const ICON = 'image://../image/icon.png';
let interval;

function initTopNumber({provinces, projects, useStations, totalStations, total}) {
    $('#J_top_number .provinces').score(provinces);
    $('#J_top_number .projects').score(projects);
    $('#J_top_number .use-stations').score(useStations, {space: 3});
    $('#J_top_number .total-stations').score(totalStations, {space: 3});
    $('#J_top_number .total').score(total, {decimal: 2});
}

function getBarOption({grid = {
    top: 5,
    left: 35,
    right: 0,
    bottom: 20
}, category, data}) {
    return {
        grid: grid,
        yAxis: {
            type: 'category',
            data: category,
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
            data: data
        }]
    };
}
function initLeftBar(data) {
    let option = getBarOption(data.most);
    let bar = echarts.init(document.getElementById('J_left_bar'));
    bar.setOption(option);

    $('#J_bar_tabs a').on('click', function() {
        $('#J_bar_tabs a').removeClass('active');
        $(this).addClass('active');
        let name = $(this).data('name');
        option.yAxis.data = data[name].category;
        option.series[0].data = data[name].data;
        bar.setOption(option);
    });
}

function getMapOptions({map = 'china', zoom=1.15, aspectScale=0.7, mapData, scatterData, mapBottom=160}) {
    return {
        geo: [{
			map: map,
			zoom: zoom,
            left: map == 'china' ? 80 : 230,
            right: map == 'china' ? 250: 100,
            top: 60,
            bottom: mapBottom,
			aspectScale: aspectScale,
			roam: false
		}],
        series: [{
            type: 'map',
            map: map,
            z: 2,
            aspectScale: aspectScale,
            zoom: zoom,
            left: map == 'china' ? 80 : 230,
            right: map == 'china' ? 250: 100,
            top: 60,
            bottom: mapBottom,
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
                        `{title|基站信息}`,
                        `{l|}`,
                        `{border|}`,
                        `{st|}`,
                        `{name|${param.name}} {s${param.data.status}|}`,
                        `{a|${param.data.project}} {No|${param.data.No}}`,
                        `{icon|} {b|${param.data.province}} {b|${param.data.city}} {b|${param.data.area}}`,
                        `{a|${param.data.addr}}`,
                        `{tx|}{sr|}{a|塔型：} {b|${param.data.type}} {zx|}{sr|}{a|站型：} {b|${param.data.stationType}}`,
                        `{st|}`,
                        `{l|}`,
                        `{st|}`,
                        `{t|最近巡检}`,
                        `{a|${param.data.check} ${param.data.checkTime}}`,
                        `{st|}`,
                        `{img1|} {img2|}`,
                        `{st|}`,
                        `{l|}`,
                        `{st|}`,
                        `{t|最近审核}`,
                        `{a|${param.data.admin} ${param.data.time}}`,
                    ].join('\n');;
                },
                rich: {
                    title: {
                        fontSize: 20,
                        lineHeight: 40,
                        color: '#fff',
                        fontWeight: 'bold'
                    },
                    border: {
                        width: 80,
                        height: 1,
                        borderWidth: 1,
                        borderColor: '#008FFC'
                    },
                    st: {
                        padding: [-6, 0, 0, 0]
                    },
                    name: {
                        fontSize: 18,
                        lineHeight: 28,
                        color: '#fff',
                        fontWeight: 'bold',
                        padding: [0, 4, 0, 0]
                    },
                    s1: {
                        height: 20,
                        backgroundColor: {
                            image: '../image/button1.png'
                        }
                    },
                    s2: {
                        height: 20,
                        backgroundColor: {
                            image: '../image/button2.png'
                        }
                    },
                    s3: {
                        height: 20,
                        backgroundColor: {
                            image: '../image/button3.png'
                        }
                    },
                    s4: {
                        height: 20,
                        backgroundColor: {
                            image: '../image/button4.png'
                        }
                    },
                    s5: {
                        height: 20,
                        backgroundColor: {
                            image: '../image/button5.png'
                        }
                    },
                    No: {
                        fontSize: 16,
                        lineHeight: 28,
                        color: '#007AFF',
                        padding: [0, 0, 0, 6]
                    },
                    a: {
                        color: '#fff',
                        fontSize: 16,
                        lineHeight: 28
                    },
                    b: {
                        fontSize: 16,
                        lineHeight: 28,
                        color: '#FFCC00',
                        padding: [0, 10, 0, 0]
                    },
                    icon: {
                        width: 16,
                        height: 16,
                        backgroundColor: {
                            image: '../image/location.png'
                        }
                    },
                    tx: {
                        width: 16,
                        height: 16,
                        backgroundColor: {
                            image: '../image/taxing.png'
                        }
                    },
                    zx: {
                        width: 16,
                        height: 16,
                        backgroundColor: {
                            image: '../image/zhanxing.png'
                        }
                    },
                    sr: {
                        padding: [0, 4, 0, 0]
                    },
                    t: {
                        fontSize: 16,
                        lineHeight: 28,
                        color: '#FFF',
                        fontWeight: 'bold'
                    },
                    l: {
                        width: '100%',
                        height: 1,
                        backgroundColor: {
                            image: '../image/pop-line.png'
                        }
                    },
                    img1: {
                        width: 134,
                        height: 89,
                        backgroundColor: {}
                    },
                    img2: {
                        width: 134,
                        height: 89,
                        backgroundColor: {}
                    }
                }
            }
        }]
    }
}
function initMap() {
    let mapData = [], img1, img2;
    totalData.mapData.map((item) => {
        mapData.push(Object.assign({}, item, {itemStyle: {areaColor: '#008EFA'}}));
    });
    mapData[0].selected = true;
    let option = getMapOptions({
        mapData: mapData,
        scatterData: [mapData[0].stations[0]]
    });
    option.series[1].label.rich.img1.backgroundColor.image = mapData[0].stations[0].images[0];
    option.series[1].label.rich.img2.backgroundColor.image = mapData[0].stations[0].images[1];
    let map = echarts.init(document.getElementById('J_map'));
    map.setOption(option);

    var projectData = [];
    mapData.map(item => {
        if (item.stations) {
            projectData = projectData.concat(item.stations);
        }
    });
    loop(mapData, option);
    var i = 1, prev = 0, provinceData;

    console.log('>>>>', projectData)

    
    function loop(mapData, option) {
        // interval && clear(mapData);
        interval = setInterval(() => {
            console.log(i,projectData)
            let index = getProveinceIndex(mapData, projectData[i]);
            option.series[0].data[prev].selected = false;
            option.series[0].data[index].selected = true;

            option.series[1].data = [projectData[i]];
            option.series[1].label.rich.img1.backgroundColor.image = projectData[i].images[0];
            option.series[1].label.rich.img2.backgroundColor.image = projectData[i].images[1];
            map.setOption(option);
            console.log(option);
            prev = index;
            i = (i + 1) % projectData.length;
        }, INTERVAL);
    }

    function getProveinceIndex(mapData, station) {
        return mapData.findIndex(item => item.name == station.province);
    }

    function clear(data) {
        clearInterval(interval)
        data[prev].selected = false;
        i = 1;
        prev = 0;
    };

    map.on('click',  handleMapClick);
    function handleMapClick(param) {
        if (param.componentType == 'series') {
            interval && clear(mapData);
            $.getScript(`../lib/map/${param.data.en}.js`, function() {
                $('#J_map_icon').show();
                provinceData = param.data.cityData;
                let stations = param.data.stations;

                provinceData.map((item) => {
                    item.itemStyle = {areaColor: '#008EFA'};
                });

                let provinceOptions = getMapOptions({
                    map: param.name,
                    mapData: provinceData,
                    scatterData: [stations[0]],
                    zoom: 1,
                    // aspectScale: 1,
                    mapBottom: 70
                });
                provinceData[0].selected = true;
                map.setOption(provinceOptions);
                $('#J_top_item_title').html('点亮城市(个)');

                var cityIndex = provinceData.findIndex(item => item.coord[0] == stations[0].coord[0] && item.coord[1] == stations[0].coord[1]);
                
                function pLoop(mapData, option) {
                    interval = setInterval(() => {
                        cityIndex = mapData.findIndex(item => item.coord[0] == stations[i].coord[0] && item.coord[1] == stations[i].coord[1]);

                        option.series[0].data[prev].selected = false;
                        option.series[0].data[cityIndex].selected = true;

                        option.series[1].data = [stations[i]];

                        map.setOption(option);
                        prev = cityIndex;
                        i = (i + 1) % stations.length;
                    }, INTERVAL);
                }


                pLoop(provinceData, provinceOptions);

                $('#J_map_icon').on('click', function() {
                    interval && clearInterval(interval);
                    provinceData[cityIndex].selected = false;
                    i = 1;
                    prev = 0;
                    
                    mapData = totalData.mapData;
                    
                    let option = getMapOptions({
                        mapData: mapData,
                        scatterData: [mapData[0].stations[0]]
                    });
                    mapData[0].selected = true;
                    
                    map.setOption(option);
                    $('#J_top_item_title').html('点亮省份(个)');
                    loop(mapData, option);
                    $('#J_map_icon').hide();
                });
            });
        }
    }
}

function initTopBox({actual, plan, contract, dianbiao}) {
    $('.top-box-wrap .actual').score(actual,  {decimal: 2});
    $('.top-box-wrap .plan').score(plan, {decimal: 2});
    $('.top-box-wrap .contract').score(contract, {decimal: 2});
    $('.top-box-wrap .dianbiao').score(dianbiao, {space: 3});
}

function initElectric({today, day, thisMonth, month, thisYear, year, total}){
    $('.electric-wrap .today').score(today);
    $('.electric-wrap .day').score(day);
    $('.electric-wrap .thisMonth').score(thisMonth, {space: 3});
    $('.electric-wrap .month').score(month, {space: 3});
    $('.electric-wrap .thisYear').score(thisYear, {decimal: 2});
    $('.electric-wrap .year').score(year, {decimal: 2});
    $('.electric-wrap .total').score(total, {decimal: 2});
};

function initLine(data) {
    let mapper = {
        year: common.getMonth('月'),
        month: common.getDays(),
        day: common.getHours(),
        total: [1,2,3,4,5,6,7,8,9,10,11,12]
    };
    let option = {
        grid: {
            top: 30,
            left: 46,
            right: 18,
            bottom: 30
        },
        color: ['#007AFF', '#FFCC00'],
        legend: {
            data: ['应收金额', '实收金额'],
            textStyle: {color: '#fff'},
            right: 0
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: mapper.total,
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
            name: '单位：元',
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
            name: '应收金额',
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
            data: data.total.plan
        }, {
            type: 'line',
            name: '实收金额',
            symbol: 'none',
            smooth: true,
            lineStyle: {
                color: '#FFCC00',
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
                        offset: 0, color: 'rgba(255,204,0,0.41)' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(255,168,0, 0)' // 100% 处的颜色
                    }]
                }
            },
            data: data.total.actual
        }]
    };
    let line = echarts.init(document.getElementById('J_line'));
    line.setOption(option);
    console.log(option)

    

    $('#J_line_tabs a').on('click', function() {
        $('#J_line_tabs a').removeClass('active');
        $(this).addClass('active');
        let name = $(this).data('name');
        option.xAxis.data = mapper[name];
        option.series[0].data = data.china[name];
        line.setOption(option);
    });
}

function initRightBar(data) {
    let option1 = getBarOption({grid: {
        top: 5,
        left: 100,
        right: 10,
        bottom: 0
    }, ...data.total.total});
    let option2 = getBarOption({grid: {
        top: 5,
        left: 80,
        right: 10,
        bottom: 0
    }, ...data.new.total});
    let bar1 = echarts.init(document.getElementById('J_bar_1'));
    let bar2 = echarts.init(document.getElementById('J_bar_2'));
    bar1.setOption(option1);
    bar2.setOption(option2);

    let mapper = {
        year: common.getMonth('月'),
        month: common.getDays(),
        day: common.getHours(),
        total: [1,2,3,4,5,6,7,8,9,10,11,12]
    };

    $('#J_station_bar_tabs a').on('click', function() {
        $('#J_station_bar_tabs a').removeClass('active');
        $(this).addClass('active');
        let name = $(this).data('name');
        option1.xAxis.data = mapper[name].category;
        option1.series[0].data = data.total[name].data;
        bar1.setOption(option1);

        option2.xAxis.data = mapper[name].category;
        option2.series[0].data = data.new[name].data;
        bar2.setOption(option2);
        console.log(option2)
    });

}

$(document).ready(function() {
    common.headerTime();

    initTopNumber(totalData.topNumber.china);
    initLeftBar(totalData.leftBar);
    initMap();

    initTopBox(totalData.topBoxData.china);

    initElectric(totalData.electricData.china);
    initLine(totalData.lineData.china);
    initRightBar(totalData.rightBarData.china);
});