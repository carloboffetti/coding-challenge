AOS.init();

setTimeout(()=>{
    am5.ready(function () {

        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        let root = am5.Root.new("chartdiv");
    
        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
            am5themes_Animated.new(root)
        ]);
    
    
        // Create chart
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
        let chart = root.container.children.push(
            am5percent.PieChart.new(root, {
                endAngle: 270,
                layout: root.verticalLayout,
                innerRadius: am5.percent(60)
            })
        );
        /*
        let bg = root.container.set("background", am5.Rectangle.new(root, {
          fillPattern: am5.GrainPattern.new(root, {
            density: 0.1,
            maxOpacity: 0.2
          })
        }))
        
        */
    
        // Create series
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
        let series = chart.series.push(
            am5percent.PieSeries.new(root, {
                valueField: "value",
                categoryField: "category",
                endAngle: 270
            })
        );
    
        series.set("colors", am5.ColorSet.new(root, {
            colors: [
                am5.color(0x73556E),
                am5.color(0x9FA1A6),
                am5.color(0xF2AA6B),
                am5.color(0xF28F6B),
                am5.color(0xA95A52),
                am5.color(0xE35B5D),
                am5.color(0xFFA446)
            ]
        }))
    
        let gradient = am5.RadialGradient.new(root, {
            stops: [
                { color: am5.color(0x000000) },
                { color: am5.color(0x000000) },
                {}
            ]
        })
    
        series.slices.template.setAll({
            fillGradient: gradient,
            strokeWidth: 2,
            stroke: am5.color(0xffffff),
            cornerRadius: 10,
            shadowOpacity: 0.1,
            shadowOffsetX: 2,
            shadowOffsetY: 2,
            shadowColor: am5.color(0x000000),
            fillPattern: am5.GrainPattern.new(root, {
                maxOpacity: 0.2,
                density: 0.5,
                colors: [am5.color(0x000000)]
            })
        })
    
        series.slices.template.states.create("hover", {
            shadowOpacity: 1,
            shadowBlur: 10
        })
    
        series.ticks.template.setAll({
            strokeOpacity: 0,
            strokeDasharray: [2, 2]
        })
    
        series.states.create("hidden", {
            endAngle: -90
        });
    
        // Set data
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
        series.data.setAll([{
            category: "Lithuania",
            value: 10
        }, {
            category: "Czechia",
            value: 15
        }, {
            category: "Ireland",
            value: 20
        }, {
            category: "Germany",
            value: 50
        }]);
    
        series.appear(1000, 100);
    
    });
}, 2500)
 // end am5.ready()


