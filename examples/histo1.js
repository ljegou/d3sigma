//Largeur et hauteur du graphe
var larg = 500;
var haut = 100;
var barPadding = 1; //Padding des barres

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

//Creation de l'élément SVG
var svg = d3.select("body")
	.append("svg")
	.attr("width", larg)
	.attr("height", haut);

	svg.selectAll("rect")
	.data(datatest)
	.enter()
	.append("rect")
	.attr("x", function(d, i) {
		return i * (20 + barPadding); //Largeur de 20 + 1 de padding
	})
	.attr("y", function(d) {
		return haut - (d.temperature * 2); // Hauteur - temperature
	})
	.attr("width", 20)
	.attr("height", function(d) {
		return (d.temperature * 2); // Temperature de la donnée
	})
	.attr("fill", "teal");