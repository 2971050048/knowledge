/**
 * https://www.npmjs.com/package/marked
 * npm i marked -S
 * 解析markdown文件为html文件
 * 或者 
 * npm i marked -g 
 * marked 1.md -o 1.html
 * 将根据默认规则解析为对应html文件
 */

//默认规则
    var marked = require('marked');
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,//使用github flavored markdown, 用不了了？
        tables: true,//允许gfm tabels
        breaks: false,//允许gfm 行break
        pedantic: false,//迂腐的
        sanitize: true,//对输入的html文件不做处理
        smartLists: true,
        smartypants: false
    });
    console.log(marked('I am using __markdown__.'));

//code块语法高亮, ？？？调试失败
    var marked = require('marked');
    var markdownString = '```js\n console.log("hello"); \n```';

    // 方法1: 异步强调 pygmentize-bundled 
    marked.setOptions({
        highlight: function (code, lang, callback) {
            require('pygmentize-bundled')({ lang: lang, format: 'html' }, code, 
                function (err, result) {
                    callback(err, result.toString());
                });
            }
    });
    marked(markdownString, function (err, content) {
        if (err) throw err;
        console.log(content);
    });

    //方法2: 同步强调 highlight.js 
    marked.setOptions({
    highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
    }
    });
    console.log(marked(markdownString));

//用lexer和parser快速解析
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
    var tokens = marked.lexer(text, options);//options可以省略
    console.log(marked.parser(tokens));

//覆写renderer方法, heading 函数
    var marked = require('marked');
    var renderer = new marked.Renderer();
    
    renderer.heading = function (text, level) {
        var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

        return '<h' + level + '><a name="' + escapedText +
                    '" class="anchor" href="#' + escapedText +
                    '"><span class="header-link"></span></a>' +
                    text + '</h' + level + '>';
    },

    console.log(marked('# heading+', { renderer: renderer }));

    //调试得到结果
    <h1>
        <a name="heading-" class="anchor" href="#heading-">
            <span class="header-link"></span>
        </a>
        heading+
    </h1>

//覆写renderer方法，其他块函数
    code(string code, string language)
    blockquote(string quote)
    html(string html)
    heading(string text, number level)
    hr()
    list(string body, boolean ordered)
    listitem(string text)
    paragraph(string text)
    table(string header, string body)
    tablerow(string content)
    tablecell(string content, object flags)

//覆写renderer方法, 内联函数
    strong(string text)
    em(string text)
    codespan(string code)
    br()
    del(string text)
    link(string href, string title, string text)
    image(string href, string title, string text)