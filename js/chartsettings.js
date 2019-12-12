jQuery(document).ready(function($) {
	const height = 440;
	const width = 875;

	const margin = {
		top: 20,
		right: 20,
		bottom: 30,
		left: 30
	};

	const svg = d3
		.select('#chart')
		.append('svg')
		// .attr("viewBox", [-width / 2, -height / 2, width, height])
		.attr("width", width)
		.attr("height", height)


	let y = d3
		.scaleLinear()
		.nice()
		.range([height - margin.bottom, margin.top])

	let line = d3
		.line();

	let interval = d3
		.area();

	async function loadplotdata(variable, depth_to_plot, year) {


		const quraw = await d3.csv("qu39_ctd.csv", d3.autoType);

		const dataClean = quraw.filter(d => d["avg_" + "temp" + "_" + depth_to_plot] > 1 && d["min_" +
			"temp" + "_" + depth_to_plot] !== -9.99e-29)


		let data1 = Array.from(
			d3
			.rollup(
				dataClean,
				v => ({
					date: new Date(Date.UTC(2000, v[0].date.getUTCMonth(), 15)),
					avg: d3.mean(v, d => d["avg_" + variable + "_" + depth_to_plot] || NaN),
					min: d3.mean(v, d => d["min_" +
						variable + "_" + depth_to_plot] || NaN),
					max: d3.mean(v, d => d["max_" +
						variable + "_" + depth_to_plot] || NaN),
					minmin: d3.min(v, d => d["min_" +
						variable + "_" + depth_to_plot] || NaN),
					maxmax: d3.max(v, d => d["max_" +
						variable + "_" + depth_to_plot] || NaN)
				}),
				d => `${d.date.getUTCMonth()}}`
			)
			.values()
		).sort((a, b) => d3.ascending(a.date, b.date))
		// debugger

		let thisyear = dataClean
			.filter(d => d.date.getFullYear() === 2019)
			.map(({
				...d
			}) => {
				d.date1 = new Date(
					Date.UTC(2000, d.date.getUTCMonth(), d.date.getUTCDate())
				);
				return d;
			}).sort((a, b) => d3.ascending(a.date, b.date))


		console.log(thisyear)

		const x = d3
			.scaleTime()
			.domain([new Date("2000-01-01"), new Date("2000-12-31")])
			.range([margin.left, width - margin.right])

		const xAxis = g =>
			g.attr('transform', `translate(0,${height - margin.bottom})`).call(
				d3
				.axisBottom(x)
				.ticks(width / 80)
				.tickSizeOuter(0)
				.tickFormat(d3.timeFormat("%B"))

			)

		const labels = {
			temp: "Temperature (°C)",
			sal: "Salinity (PSU)",
			oxy: "Dissolved Oxygen (mL/L)"
		}

		// add the X gridlines
		svg.append("g")
			.attr("class", "grid")
			.attr("transform", `translate(0,${height - margin.bottom})`)
			.call(make_x_gridlines()
				.tickSize(-height)
				.tickFormat("")

			)

		y.domain([d3.min(dataClean, d => d["min_" +
			variable + "_" + depth_to_plot]), d3.max(dataClean, d => d["max_" +
			variable + "_" + depth_to_plot])])

		const yAxis = g =>
			g
			.attr("transform", `translate(${margin.left},0)`)
			.call(d3.axisLeft(y))

			.call(g => g.select(".domain").remove())
		// .call(g =>
		//     g
		//     .select(".tick:last-of-type text")
		//     // .clone()
		//     .attr("x", 3)
		//     .attr("text-anchor", "start")
		//     .attr("font-weight", "bold")
		//     .text(labels[variable])
		// )

		// const svg = d3.create("svg").attr("viewBox", [0, 0, width, height]);

		// add the Y gridlines
		svg.append("g")
			.attr("class", "grid")
			.attr("transform", `translate(${margin.left},0)`)
			.call(make_y_gridlines()
				.tickSize(-width)
				.tickFormat("")
			)

		svg.append("g").attr("class", "xaxis").call(xAxis);

		svg.append("g").attr("class", "yaxis").call(yAxis);


		svg.append("g")
			.append("path")
			// .datum(data1)
			.attr("class", "avg_line")
			.attr("fill", "none")
			.attr("stroke", "steelblue")
			.attr("stroke-width", 2)
			.attr("stroke-linejoin", "round")
			.attr("stroke-linecap", "round")
			.attr("d", line.y(d => y(d.avg)).x(d => x(new Date(d.date)))(data1));

		// selected year's data
		svg.append("g")
			.append("path")
			// .datum(thisyear)
			.attr("class", "curr_year_line")
			.attr("fill", "none")
			.attr("stroke", "tomato")
			.attr("stroke-width", 2)
			.attr("stroke-linejoin", "round")
			.attr("stroke-linecap", "round")
			.attr("d", line.y(d => y(d["avg_" +
				variable + "_" + depth_to_plot])).x(d => x(d.date1))(thisyear));


		;

		svg.append("g")
			.append("path") // bands
			// .datum(data1)
			.attr("class", "min_max")
			.attr("fill", "steelblue")
			.attr("fill-opacity", 0.2)
			.attr("stroke", "none")
			.attr("d", interval.x(d => x(d.date))
				.y0(d => y(d.min))
				.y1(d => {
					return y(d.max);
				})(data1));

		// const interval2 = d3
		//     .area()
		//     .x(d => x(d.date))
		//     .y0(d => y(d.minmin))
		//     .y1(d => {
		//         return y(d.maxmax);
		//     });


		svg.append("g")
			.append("path") // confidence interval
			// .datum(data1)
			.attr("class", "minmin_maxmax")
			.attr("fill", "lightsteelblue")
			.attr("fill-opacity", 0.2)
			.attr("stroke", "none")
			.attr("d", interval.x(d => x(d.date))
				.y0(d => y(d.minmin))
				.y1(d => {
					return y(d.maxmax);
				})(data1));

		// gridlines in x axis function
		function make_x_gridlines() {
			return d3.axisBottom(x)
				.ticks()
		}

		// gridlines in y axis function
		function make_y_gridlines() {
			return d3.axisLeft(y)
				.ticks()
		}

		function change() {
			d3.selectAll("input.type:checked").each(function() {variable = this.value});
			d3.selectAll("input.depths:checked").each(function() {depth_to_plot = this.value});
			d3.selectAll("input.years:checked").each(function() {selected_year = this.value});


			// debugger
			data1 = Array.from(
				d3
				.rollup(
					dataClean.filter(d => !isNaN(d["avg_" + variable + "_" + depth_to_plot])),
					v => ({
						date: new Date(Date.UTC(2000, v[0].date.getUTCMonth(), 15)),
						avg: d3.mean(v, d => d["avg_" + variable + "_" + depth_to_plot] || NaN),
						min: d3.mean(v, d => d["min_" +
							variable + "_" + depth_to_plot] || NaN),
						max: d3.mean(v, d => d["max_" +
							variable + "_" + depth_to_plot] || NaN),
						minmin: d3.min(v, d => d["min_" +
							variable + "_" + depth_to_plot] || NaN),
						maxmax: d3.max(v, d => d["max_" +
							variable + "_" + depth_to_plot] || NaN)
					}),
					d => `${d.date.getUTCMonth()}}`
				)
				.values()
			).sort((a, b) => d3.ascending(a.date, b.date))



			thisyear = dataClean
				.filter(d => d.date.getFullYear() === Number(selected_year))
				.map(({
					...d
				}) => {
					d.date1 = new Date(
						Date.UTC(2000, d.date.getUTCMonth(), d.date.getUTCDate())
					);
					return d;
				}).sort((a, b) => d3.ascending(a.date, b.date))

			console.log(thisyear)

			let line_c = svg.transition();

			y.domain([d3.min(dataClean, d => d["min_" +
				variable + "_" + depth_to_plot]), d3.max(dataClean, d => d["max_" +
				variable + "_" + depth_to_plot])])


			line_c.select(".avg_line")
				.duration(750)
				.attr("d", line.y(d => y(d.avg)).x(d => x(new Date(d.date)))(data1));

			line_c.select(".curr_year_line")
				.duration(750)
				.attr("d", line.y(d => y(d["avg_" +
					variable + "_" + depth_to_plot])).x(d => x(d.date1))(thisyear));

			line_c.select(".min_max")
				.duration(750)
				.attr("d", interval.x(d => x(d.date))
					.y0(d => y(d.min))
					.y1(d => {
						return y(d.max);
					})(data1))
			console.log(data1, thisyear)

			line_c.select(".minmin_maxmax")
				.duration(750)
				.attr("d", interval.x(d => x(d.date))
					.y0(d => y(d.minmin))
					.y1(d => {

						// console.log(d)
						return y(d.maxmax);
					})(data1))

			console.log([d3.min(dataClean, d => d["min_" +
				variable + "_" + depth_to_plot]), d3.max(dataClean, d => d["max_" +
				variable + "_" + depth_to_plot])])



			line_c.select(".y.axis") // change the y axis
				.duration(750)
				.call(yAxis);

		}
		d3.selectAll("input.type, input.depths, input.years").on("change", change );


	}

	// input variabls: temp, sal or oxy
	loadplotdata("temp", 5, 2019) // variable, depth to plot, year to highlight

		$('.othertabs li').click(function() {
			var source = $(this).data("tab");
			$('#chart-title').html(source);

			var othertab_id = $(this).attr('data-tab');
			$('.other-tab-content').removeClass('current');
			$('.other-tab-title').removeClass('current');
			$('.othertabs li').removeClass('current');
			$(this).addClass('current');
			$("div." + othertab_id).addClass('current');
			$("h4." + othertab_id).addClass('current');
		});


});