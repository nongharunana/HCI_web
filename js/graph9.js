Highcharts.chart('container9', {
    chart: {
        polar: true,
        type: 'line'
    },
    colors: ['#504136'],
    title: {
        text: 'Industry in Chonburi',
        x: -80
    },
    pane: {
        size: '80%'
    },
    xAxis: {
        categories: ['Property & Construction', 'Services', 'Industrial', 'Financials', 'Resources', 'Agro & Food Industry', 'Consumer Products', 'Technology', 'Others'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },
    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },
    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },
    legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 70,
        layout: 'vertical'
    },
    series: [ {
        data: [4,2,8,0,1,1,1,0,0],
        name: "Chonburi",
        pointPlacement: "on"
    }]
});
[]