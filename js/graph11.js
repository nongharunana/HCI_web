Highcharts.chart('container11', {
    chart: {
        polar: true,
        type: 'line'
    },
    colors: ['#754F44'],
    title: {
        text: 'Industry in Chachoengsao',
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
    series: [{
        data: [1,0,0,0,0,0,1,0,0],
        name: "Chachoengsao",
        pointPlacement: "on"
    }]
});
[]