//Largeur et hauteur du graphe
var larg = 600;
var haut = 400;
var barPadding = 2; //Padding des barres
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
var nbb = datatest.length; //Nb de barres
var lb = ((larg - nbb) / nbb); //Largeur barre
var ch = (haut / d3.max(datatest, function (d) {
	return d.temperature //Coef. hauteur.
}));

//Creation de l'élément SVG
var svg = d3.select("body")
	.append("svg")
	.attr("width", larg)
	.attr("height", haut);

//Dessin des barres
svg.selectAll("rect")
	.data(datatest)
	.enter()
	.append("rect")
	.attr("x", function(d, i) {
		return i * lb; //Largeur de i * lb
	})
	.attr("y", function(d) {
		return haut - (d.temperature * ch); // Hauteur - (temperature * coef)
	})
	.attr("width", lb - barPadding)
	.attr("height", function(d) {
		return (d.temperature * ch); // Temperature de la donnée
	})
	.attr("fill", function(d) {
		return "rgb(0, 0, " + (d.temperature * 10) + ")";
	});

//Ajout des libellés
svg.selectAll("text")
	.data(datatest)
	.enter()
	.append("text")
	.text(function(d) {
		return d.temperature;
	})
	.attr("x", function(d, i) {
		return (i * lb) + 12;
	})
	.attr("y", function(d) {
		return haut - ((d.temperature * ch) - 12);
	})
	.attr("font-family", "sans-serif")
	.attr("font-size", "11px")
	.attr("fill", "white");
