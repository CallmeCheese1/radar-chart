anychart.onDocumentReady(function () {
    // The following JS radar chart code will be here.

    let chartData = {
        header: ['#', ""],
          rows: [
            ['Damage', 2],
            ['Health', 2],
            ['Speed', 2],
            ['Close-Range', 2],
            ['Long-Range', 2],
            ['Combo-Potential', 2]
        ]
    };

    let chart = anychart.radar();

    chart.defaultSeriesType('area');

    chart.palette(['#E5593499']);

    chart.yAxis().stroke('#545f69');
    chart.yAxis().ticks().stroke('#545f69');
    chart.yScale().ticks().set([0, 1, 2, 3]);

    chart.xAxis().labels().fontSize(16);
    chart.yAxis().labels().fontSize(16);
    

    chart.xGrid().stroke({
        color: "#545f69",
        thickness: 0.5,
        dash: "10 5"
      });

    chart.data(chartData);
    
    chart.title("Fighter Archetype");
    chart.container('chart-container');

    chart.interactivity().hoverMode("none");
    
    chart.draw();

    function updateValue(key, newValue) {
        let chartData = chart.data();  // Get the current data
        let index = 0;

        switch (key) {
            case 'Damage':
                index = 0;
                break;

            case 'Health':
                index = 1;
                break;

            case 'Speed':
                index = 2;
                break;
            
            case 'Close':
                index = 3;
                break;
            
            case 'Long':
                index = 4;
                break;
            
            case 'Combo':
                index = 5;
                break;
            
            default:
                console.log(index);

        }

        if (index !== -1) {
            // Update the value in the row
            chartData[index][1] = newValue;

            // Set the updated data to the chart
            chart.data(chartData);

            // Redraw the chart with the updated data
            chart.draw();
        }
    }

    const sliders = document.querySelectorAll(".slider")
    
    for (let i = 0; i < sliders.length; i++) {
        const slider = sliders[i];
        
        slider.oninput = function () {
            console.log(`Updating the value of ${this.id} to ${this.value}!`)

            updateValue(this.id, this.value);
        }
    }

    const resetButton = document.querySelector("#resetButton")
    resetButton.addEventListener('click', () => {
        updateValue('Damage', 2)
        updateValue('Health', 2)
        updateValue('Speed', 2)
        updateValue('Close', 2)
        updateValue('Long', 2)
        updateValue('Combo', 2)

        for (let i = 0; i < sliders.length; i++) {
            const slider = sliders[i];
            
            slider.value = 2
        }
    })


    const damageSlider = document.querySelector("#damage")
    const healthSlider = document.querySelector("#health")
    const speedSlider = document.querySelector("#speed")
    const closeSlider = document.querySelector("#close")
    const longSlider = document.querySelector("#long")
    const comboSlider = document.querySelector("#combo")



})