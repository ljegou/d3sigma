
function templateModifier(template) {
  base = window.location.origin;
  if (window.location.origin.indexOf('github') !== -1) {
    base = window.location.origin + '/d3sigma'
  }
  template = template.replace('/scripts/d3.v3.js', base + '/scripts/d3.v3.js')
  template = template.replace('/data/iris.csv', base + '/data/iris.csv')
  return template
}