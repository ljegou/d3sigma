//Largeur et hauteur du graphe
var larg = 500;
var haut = 100;
var padding = 20;

var datatest = [
    {"mois":"janvier", "temperature":5},
    {"mois":"février", "temperature":10},
    {"mois":"mars", "temperature":13},
    {"mois":"avril", "temperature":19},
    {"mois":"mai", "temperature":21},
    {"mois":"juin", "temperature":25},
    {"mois":"juillet", "temperature":22},
    {"mois":"août", "temperature":18},
    {"mois":"septembre", "temperature":15},
    {"mois":"octobre", "temperature":13},
    {"mois":"novembre", "temperature":11},
    {"mois":"décembre", "temperature":12}
];
var xScale = d3.scale.linear()
	.domain([0, d3.max(dataset, function(d) { return d[0]; })])
	.range([padding, larg - padding * 2]);

var yScale = d3.scale.linear()
	.domain([0, d3.max(dataset, function(d) { return d[1]; })])
	.range([haut - padding , padding]);

var rScale = d3.scale.linear()
	.domain([0, d3.max(dataset, function(d) { return d[1]; })])
	.range([2, 5]);

svg.selectAll("circle")
	.data(dataset)
	.enter()
	.append("circle")
	.attr("cx", function(d) {
		return xScale(d[0]);
	})
	.attr("cy", function(d) {
		return yScale(d[1]);
	})
	.attr("r", function(d) {
		return rScale(d[1]);
	});
	svg.selectAll("text")
	.data(dataset)
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