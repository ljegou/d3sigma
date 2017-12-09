var svg = d3.select('body').append('svg')
  .attrs({width: 510, height: 600});

var g = svg.append('g')
  .attr('transform', 'translate(250, 65)');

var colors = ['#e74c3c', '#f1c40f', '#2ecc71'];
var circles = g.selectAll('circle').data(colors)
  .enter().append('circle')
    .attrs({
      r: 35,
      cy: function(d, i) { return i * 70; },
    })
    .style('fill', function(d) { return d; });