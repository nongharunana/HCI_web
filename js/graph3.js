Highcharts.chart('container3', {
    chart: {
        polar: true,
        type: 'line'
    },
    colors: ['#7F675B'],
    title: {
        text: 'Industry in Bangkok',
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
        data: [153,206,85,67,55,43,43,91,7],
        name: "Bangkok",
        pointPlacement: "on"
    }]
});
[]