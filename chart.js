 window.onload = function () {

        var chart = new CanvasJS.Chart("chartContainer", {
          animationEnabled: true,
          theme: "light2",
          title:{
          text: ""
          },
          axisY:{
          includeZero: false
          },
          data: [{        
          type: "line",       
          dataPoints: [
            { y: 45000 },
            { y: 41400},
            { y: 52000},
            { y: 46000 },
            { y: 45000 },
            { y: 50000 },
            { y: 48000 },
            { y: 48000 },
            { y: 41000 },
            { y: 50000 },
            { y: 48000 },
            { y: 51000 }
            ]
          }]
          });
          chart.render();

          }
