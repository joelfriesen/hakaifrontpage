jQuery(document).ready(function($) {

	$.getJSON("/wp-content/themes/HakaiInstitute/home-page-viz-data.json", function(Object) {

		var labels = Object.map(function(e) {
		   return e.date;
		});
		var temp5 = Object.map(function(e) {
		   return e.avg_temp_5;
		});
		var temp150 = Object.map(function(e) {
		   return e.avg_temp_150;
		});
		var oxy5 = Object.map(function(e) {
		   return e.avg_oxy_5;
		});
		var oxy150 = Object.map(function(e) {
		   return e.avg_oxy_150;
		});
		var sal5 = Object.map(function(e) {
		   return e.avg_sal_5;
		});
		var sal150 = Object.map(function(e) {
		   return e.avg_sal_150;
		});


		var optionsOne = {
		   type: 'bar',
		   data: {
		      labels: labels,
		      datasets: [{
		         label: 'Temperature: 5m',
		         data: temp5,
		         borderColor: 'rgba(170,32,37,0.9)',
		         backgroundColor: 'rgba(32,32,37,0.1)',
		         type: 'line',
		      },
		      {
		         label: 'Temperature: 150m',
		         data: temp150,
		         borderColor: 'rgba(170,32,37,0.5)',
		         backgroundColor: 'rgba(1,1,1,0.1)',
		         type: 'line',
		         fill: 'false',
		      },
		      {
		         label: 'Oxygen: 5m',
		         data: oxy5,
		         type: 'line',
		         backgroundColor: 'rgba(37,133,153, 0.3)'
		      },
		      {
		         label: 'Oxygen: 150m',
		         data: oxy150,
		         type: 'line',
		         backgroundColor: 'rgba(37,133,153, 0.3)'
		      },
		      {
		         label: 'Salinity: 5 m',
		         data: sal5,
		         backgroundColor: 'rgba(166, 166, 166, 0.3)',
		         type: 'line',
		         fill: 'false',
		      },
		      {
		         label: 'Salinity: 150 m',
		         data: sal150,
		         backgroundColor: 'rgba(119, 119, 119, 0.3)',
		         type: 'line',
		         fill: 'false',
		      },
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
 				},
 			}
		};



 		// var optionsOne = {
 		// 	type: "bar",
 		// 	data: {
 		// 		labels: [Object.date],
 		// 		datasets: [{
 		// 				data: [Object.avg_temp_5],
 		// 				label: "Temperature: 0 m",
 		// 				backgroundColor: "#AA2025",
 		// 			},
 		// 			{
			// 			data: [Object.avg_temp_150],
			// 			label: "Temperature: 150 m",
			// 			borderColor: "#AA2025",
			// 		},
			// 		{
			// 			data: [Object.avg_sal_5],
			// 			label: "Salinity: 0 m",
			// 			borderColor: "#AAB",
			// 			fill: true,
			// 			type: 'line',
			// 		},
			// 		{
			// 			data: [Object.avg_sal_150],
			// 			label: "Salinity: 150 m",
			// 			borderColor: "#CCD",
			// 			fill: false,
			// 			type: 'line',
			// 		},
			// 		{
			// 			data: [Object.avg_oxy_5],
			// 			label: "Oxygen: 0 m",
			// 			borderColor: "#BBC",
			// 			type: 'bubble',
			// 			fill: false
			// 		},
			// 		{
			// 			data: [Object.avg_oxy_150],
			// 			label: "Oxygen: 150 m",
			// 			borderColor: "#CCD",
			// 			type: 'bubble',
			// 			fill: false
			// 		}
			// 	]
			// },

 		// };
		var optionsTwo={};
		var optionsThree={};
		var optionsFour={};
		var optionsFive={};

		var optionsSix={};
		var ctxOne = document.getElementById("chart").getContext("2d");
		chart = new Chart(ctxOne, optionsOne);
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
			if (chart) chart.destroy();
			chart = new Chart(context, sourceData);

			$('#chart-title').html(source);

			var othertab_id = $(this).attr('data-tab');
			$('.other-tab-content').removeClass('current');
			$('.other-tab-title').removeClass('current');
			$('ul.othertabs li').removeClass('current');
			$(this).addClass('current');
			$("div." + othertab_id).addClass('current');
			$("h4." + othertab_id).addClass('current');
		});
	});
});