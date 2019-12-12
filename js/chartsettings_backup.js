 jQuery(document).ready(function ($) {
          var chart;
          var optionsOne = {
             //Monthly Surface Average Water Temperature//
             type: "line",
             data: {
               labels: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
               ],
               datasets: [                 
                  {
                   data: [NaN,6.27,6.81,9.44,12.24,12.64,13.10,14.28,NaN,NaN,8.54,NaN],
                   label: "2018",
                   borderColor: "#AA2025",
                   fill: false
                 },
                 {
                   data: [NaN,NaN,NaN,10.05,NaN,11.80,13.75,12.91,11.73,9.90,NaN,6.83],
                   label: "2017",
                   borderColor: "#AAB",
                   fill: false
                 },
                 {
                   data: [NaN,NaN,NaN,10.06,11.22,13.27,14.38,15.23,12.19,NaN,9.52,NaN],
                   label: "2016",
                   borderColor: "#BBC",
                   fill: false
                 },
                 {
                   data: [NaN,7.97,NaN,9.14,10.21,12.35,15.75,13.59,12.03,10.69,NaN,NaN],
                   label: "2015",
                   borderColor: "#CCD",
                   fill: false
                 },
                 {
                   data: [6.36,NaN,6.20,NaN,10.73,11.33,12.41,12.95,11.74,11.55,NaN,NaN],
                   label: "2014",
                   borderColor: "#DDE",
                   fill: false
                 },
                 {
                   data: [NaN,NaN,6.92,8.99,10.40,11.64,12.63,13.79,12.46,NaN,NaN,NaN],
                   label: "2013",
                   borderColor: "#EEE",
                   fill: false
                 },
                 {
                   data: [NaN,NaN,NaN,NaN,NaN,10.63,12.38,12.35,11.90,9.24,NaN,NaN],
                   label: "2012",
                   borderColor: "#EEE",
                   fill: false
                 }
               ]
             },
             options: {
               title: {
                 display: false,
                 text: "Monthly Average Water Temperatures at Surface",
                 responsive: true,
                 maintainAspectRatio: true
               },
               legend: {
                 position: "bottom"
               }
             }
           };

          var optionsTwo = {
             //Monthly DEEP Average Water Temperature//
             type: "line",
             data: {
               labels: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
               ],
               datasets: [                 
                  {
                   data: [7.81, 7.80, 7.77, 7.81, 7.76, 7.55, 7.42, 7.20, 7.17, 7.36, 7.59, NaN],
                   label: "2018",
                   borderColor: "#AA2025",
                   fill: false
                 },
                 {
                   data: [8.05, 8.03, 8.01, 7.93, NaN, 7.61, 7.22, 7.14, 7.20, 7.22, NaN, 7.64],
                   label: "2017",
                   borderColor: "#AAB",
                   fill: false
                 },
                 {
                   data: [ 8.10, 8.09, 8.09, 8.27, 7.70, 7.29, 7.07, 6.96, 6.95, 7.23, 7.46, NaN],
                   label: "2016",
                   borderColor: "#BBC",
                   fill: false
                 },
                 {
                   data: [8.12, 8.12, 8.30, 8.30, 7.62, 6.99, 6.99, 7.06, 7.18, 7.42, NaN, 7.93],
                   label: "2015",
                   borderColor: "#CCD",
                   fill: false
                 },
                 {
                   data: [7.37, 7.36, 7.29, 7.22, 7.21, 6.94, 6.90, 6.84, 6.88, 7.00, NaN, NaN],
                   label: "2014",
                   borderColor: "#DDE",
                   fill: false
                 }
               ]
             },
             options: {
               title: {
                 display: false,
                 text: "Monthly Average Water Temperatures below 150 m",
                 responsive: true,
                 maintainAspectRatio: true
               },
               legend: {
                 position: "bottom"
               }
             }
           };




          var optionsThree = {
             //Monthly Average Ocean Salinity at SURFACE
             type: "line",
             data: {
               labels: [
                 "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
               datasets: [
                  {
                   data: [NaN,28.51,28.35,NaN,24.47,28.84,28.53,28.05,NaN,NaN,28.33,NaN],
                   label: "2018",
                   borderColor: "#AA2025",
                   fill: false
                 },
                 {
                   data: [NaN,NaN,NaN,29.23,NaN,25.05,25.24,27.71,26.38,27.98,NaN,28.61],
                   label: "2017",
                   borderColor: "#AAB",
                   fill: false
                 },
                 {
                   data: [NaN,NaN,NaN,28.27,29.40,29.33,26.84,26.08,28.95,NaN,28.75,NaN],
                   label: "2016",
                   borderColor: "#BBC",
                   fill: false
                 },
                 {
                   data: [NaN,28.32,NaN,27.83,28.51,27.84,26.17,28.29,27.09,29.07,NaN,NaN],
                   label: "2015",
                   borderColor: "#CCD",
                   fill: false
                 },
                 {
                   data: [28.41,NaN,28.61,NaN,28.37,28.64,28.64,27.70,28.87,27.23,NaN,NaN],
                   label: "2014",
                   borderColor: "#DDE",
                   fill: false
                 },
                 {
                   data: [NaN,NaN,26.18,28.05,27.90,25.71,28.54,27.25,28.67,NaN,NaN,NaN],
                   label: "2013",
                   borderColor: "#DDF",
                   fill: false
                 },
                 {
                   data: [NaN,NaN,NaN,NaN,NaN,27.49,26.29,26.52,27.00,28.31,NaN,NaN],
                   label: "2012",
                   borderColor: "#EEE",
                   fill: false
                 }
               ]
             },
             options: {
               title: {
                 display: false,
                 text: "Monthly Average Ocean Salinity in Salinity Units below 150 m",
                 responsive: true,
                 maintainAspectRatio: true
               },
               legend: {
                 position: "bottom"
               }
             }
           };
           var optionsFour = {
             //Monthly Average Ocean Salinity 150m 
             type: "line",
             data: {
               labels: [
                 "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
               datasets: [
                  {
                   data: [33.09,32.97,33.12,33.04,33.23,33.34,33.39,33.48,33.49,33.41,33.28,NaN,],
                   label: "2018",
                   borderColor: "#AA2025",
                   fill: false
                 },
                 {
                   data: [33.05,32.90,32.73,32.58,NaN,33.09,33.35,33.41,33.33,33.33,NaN,33.20,],
                   label: "2017",
                   borderColor: "#AAB",
                   fill: false
                 },
                 {
                   data: [33.01,32.81,32.67,32.75,33.16,33.32,33.38,33.43,33.43,33.30,33.16,NaN,],
                   label: "2016",
                   borderColor: "#BBC",
                   fill: false
                 },
                 {
                   data: [32.78,32.67,32.86,32.82,33.16,33.42,33.40,33.39,33.32,33.24,NaN,33.17,],
                   label: "2015",
                   borderColor: "#CCD",
                   fill: false
                 },
                 {
                   data: [33.12,33.02,32.91,32.80,32.79,33.20,33.21,33.27,33.28,33.14,NaN,NaN,],
                   label: "2014",
                   borderColor: "#DDE",
                   fill: false
                 },
                 {
                   data: [ NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,33.33,NaN,],
                   label: "2013",
                   borderColor: "#DDF",
                   fill: false
                 }
               ]
             },
             options: {
               title: {
                 display: false,
                 text: "Monthly Average Ocean Salinity in Salinity Units below 150 m",
                 responsive: true,
                 maintainAspectRatio: true
               },
               legend: {
                 position: "bottom"
               }
             }
           };

 
           var optionsFive = {
             type: "line",
             //Monthly Average Oxygen SURFACE//
             data: {
               labels: [
                 "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
               datasets: [
                  {
                   data: [NaN,6.47,6.16,7.40,8.41,7.94,9.02,6.83,NaN,NaN,5.91,NaN],
                   label: "2018",
                   borderColor: "#AA2025",
                   fill: false
                 },
                 {
                   data: [NaN,NaN,NaN,7.51,NaN,6.90,7.06,6.19,5.73,6.32,NaN,5.96],
                   label: "2017",
                   borderColor: "#AAB",
                   fill: false
                 },
                 {
                   data: [NaN,NaN,NaN,7.17,7.60,8.10,8.29,7.39,5.83,NaN,6.44,NaN],
                   label: "2016",
                   borderColor: "#BBC",
                   fill: false
                 },
                 {
                   data: [NaN,6.85,NaN,7.26,8.05,,10.43,7.50,6.18,NaN,5.23,NaN,NaN],
                   label: "2015",
                   borderColor: "#CCD",
                   fill: false
                 },
                 {
                   data: [5.82,NaN,6.88,NaN,8.35,8.08,7.36,7.90,6.79,5.39,NaN,NaN],
                   label: "2014",
                   borderColor: "#DDE",
                   fill: false
                 },
                 {
                   data: [NaN,NaN,7.57,7.39,8.73,7.70,10.93,7.47,9.42,NaN,NaN,NaN],
                   label: "2013",
                   borderColor: "#DDF",
                   fill: false
                 },
                 {
                   data: [NaN,NaN,NaN,NaN,NaN,NaN,NaN,8.05,9.08,5.55,NaN,NaN],
                   label: "2012",
                   borderColor: "#EEE",
                   fill: false
                 }
               ]
             },
             options: {
               title: {
                 display: false,
                 text: "Monthly Average Oxygen (mL/L) below 150 m",
                 responsive: true,
                 maintainAspectRatio: true
               },
               legend: {
                 position: "bottom"
               }
             }
           };
         var optionsSix = {
             type: "line",
             //Monthly Average Oxygen 150m//
             data: {
               labels: [
                 "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
               datasets: [
                  {
                   data: [2.45,2.69,3.12,3.31,2.91,2.40,2.16,1.78,1.68,1.61,1.70,NaN,],
                   label: "2018",
                   borderColor: "#AA2025",
                   fill: false
                 },
                 {
                   data: [3.06,3.04,3.66,3.88,NaN,2.87,2.55,2.16,2.11,2.01,NaN,2.12,],
                   label: "2017",
                   borderColor: "#AAB",
                   fill: false
                 },
                 {
                   data: [2.42,2.71,2.91,3.47,3.16,2.69,2.38,2.26,2.15,2.12,2.22,NaN,],
                   label: "2016",
                   borderColor: "#BBC",
                   fill: false
                 },
                 {
                   data: [2.74,2.84,3.42,3.38,2.78,2.11,1.90,1.91,NaN,1.56,NaN,2.13,],
                   label: "2015",
                   borderColor: "#CCD",
                   fill: false
                 },
                 {
                   data: [2.18,2.62,2.90,3.23,3.42,2.88,2.73,2.45,2.18,2.11,NaN,NaN,],
                   label: "2014",
                   borderColor: "#DDE",
                   fill: false
                 },
                 {
                   data: [ NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,1.80,NaN,],
                   label: "2013",
                   borderColor: "#DDF",
                   fill: false
                 }
               ]
             },
             options: {
               title: {
                 display: false,
                 text: "Monthly Average Oxygen (mL/L) below 150 m",
                 responsive: true,
                 maintainAspectRatio: true
               },
               legend: {
                 position: "bottom"
               }
             }
           };
            var ctxOne = document.getElementById("chart").getContext("2d");
            chart=new Chart(ctxOne, optionsOne);
            ctxOne.height = 500;
        
            var sources = {
                STemperature: optionsOne,
                DTemperature: optionsTwo,
                SSalinity: optionsThree,
                DSalinity: optionsFour,
                SOxygen: optionsFive,
                DOxygen: optionsSix
            };
        
            var context = document.getElementById('chart').getContext('2d');
            context.height = 500;
        
            $('ul.othertabs li').click(function() {
                var source = $(this).data("tab");
                var sourceData = sources[source];
                if(chart) chart.destroy();
                chart = new Chart(context, sourceData);

                $('#chart-title').html(source);
              
                var othertab_id = $(this).attr('data-tab');
                $('.other-tab-content').removeClass('current');
                $('.other-tab-title').removeClass('current');
                $('ul.othertabs li').removeClass('current');
                $(this).addClass('current');
                $("div."+othertab_id).addClass('current');
                $("h4."+othertab_id).addClass('current');
            });

        });