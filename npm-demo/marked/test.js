var marked = require('marked');
var text = '# hello';
var options = {
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
};

var tokens = marked.lexer(text, options);
console.log(marked.parser(tokens));