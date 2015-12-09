//Largeur et hauteur du graphe
var larg = 500;
var haut = 100;
var padding = 20;

var datatest = [
[5, 20, 1], [480, 90, 4], [250, 50, 2], [100, 33, 1], [330, 95, 5],
[410, 12, 3], [475, 44, 2], [25, 67, 4], [85, 21, 5], [220, 88, 2]
]
;
var xScale = d3.scale.linear()
	.domain([0, d3.max(datatest, function(d) { return d[0]; })])
	.range([padding, larg - padding * 2]);

var yScale = d3.scale.linear()
	.domain([0, d3.max(datatest, function(d) { return d[1]; })])
	.range([haut - padding , padding]);

var rScale = d3.scale.linear()
	.domain([0, d3.max(datatest, function(d) { return d[2]; })])
	.range([1, 10]);

 var svg = d3.select("body")
	.append("svg")
	.attr("width", larg)
	.attr("height", haut);

svg.selectAll("circle")
	.data(datatest)
	.enter()
	.append("circle")
	.attr("cx", function(d) {
		return xScale(d[0]);
	})
	.attr("cy", function(d) {
		return yScale(d[1]);
	})
	.attr("r", function(d) {
		return rScale(d[2]);
	});
	svg.selectAll("text")
	.data(datatest)
	.enter()
	.append("text")
	.text(function(d) {
		return d[1];
	})
	.attr("x", function(d){
		return xScale(d[0]) + 4;
	})
	.attr("y", function(d) {
		return yScale(d[1]) - 4;
	})
	.attr("font-family", "sans-serif")
	.attr("font-size", "11px")
	.attr("fill", "grey");
	
var xAxis = d3.svg.axis()
	.scale(xScale)
	.ticks(8) //Nombre approx. de barbules
	.orient("bottom")
	.attr("fill", "none")
	.attr("stroke", "black")
	.attr("shape-rendering"; "crisp-edges");

var yAxis = d3.svg.axis()
	.scale(yScale)
	.orient("left")
	.ticks(6)
	.attr("fill", "none")
	.attr("stroke", "black")
	.attr("shape-rendering"; "crisp-edges");

svg.append("g")
	.attr("class", "axis") //Assigne la classe CSS "axis"
	.attr("transform", "translate(0," + (haut - padding) + ")")
	.call(xAxis);

svg.append("g")
	.attr("class", "axis")
	.attr("transform", "translate(" + padding + ",0)")
	.call(yAxis);	