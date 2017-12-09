var width = 512;
var height = 600;
var svg = d3.select('body').append('svg')
  .attrs({width: width + 'px', height: height + 'px'});

svg.selectAll('circle').data(d3.range(100))
  .enter()
  .append('circle')
  .attrs({
    r: function() { return Math.random() * 40 + 2 },
    transform: function() {
      var pos = [
        width * Math.random(),
        height * Math.random()
      ]
      return 'translate(' + pos + ')'
    },
  }).styles({
    fill: function(d, i) { return '#' + Math.floor(Math.random() * 16777215).toString(16); },
  })
  .transition()
  .duration(1000)
  .ease('cubic-out')
  .attrs({
    r: function() { return Math.random() * 10 },
    transform: function() {
      var pos = [
        width * Math.random(),
        height * Math.random()
      ]
      return 'translate(' + pos + ')'
    },
  }).style('fill-opacity', 0.4);