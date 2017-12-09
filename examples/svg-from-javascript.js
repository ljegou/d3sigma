var width = 510;
var height = 600;
var svg = d3.select('body')
  .append('svg')
  .attrs({width: width, height: height});

var g = svg.append('g')
  .attr('transform', 'translate(250, 65)');

g.append('circle')
  .attrs({r: 35, cy: 0})
  .styles({fill: '#e74c3c'});

g.append('circle')
  .attrs({r: 35, cy: 70})
  .styles({fill: '#f1c40f'});

g.append('circle')
  .attrs({r: 35, cy: 140})
  .styles({fill: '#2ecc71'});

