Highcharts.chart('container6', {
    chart: {
        polar: true,
        type: 'line'
    },
    colors: ['#C45AB3'],
    title: {
        text: 'Industry in Ayutthaya',
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
        data: [1,1,3,0,0,0,0,2,0],
        name: "Ayutthaya",
        pointPlacement: "on"
    }]
});
[]