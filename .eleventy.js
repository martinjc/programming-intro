module.exports = function(eleventyConfig) {


    const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
    const markdownItFootnote = require("markdown-it-footnote");
    const markdownItEmoji = require("markdown-it-emoji");
    const markdownIt = require("markdown-it");

    const shortcodes = require("./build/shortcodes.js");

    const isProduction = process.env.NODE_ENV === `production`;

    eleventyConfig.addPassthroughCopy({"src/_root/*.*": "./"});
    //eleventyConfig.addPassthroughCopy({"tmp/css/main.css": "css/main.css"});

    
    eleventyConfig.setDataDeepMerge(true);

    // syntax highlighting
    eleventyConfig.addPlugin(syntaxHighlight);

    // add footnotes and emoji to the markdown parser
    let markdownLib = markdownIt({
        html: true,
        breaks: true,
        linkify: true,
        typographer: true,
    })
    .use(markdownItFootnote)
    .use(markdownItEmoji);

    eleventyConfig.setLibrary('md', markdownLib);

    function sortByPageOrder(values) {
        return values.slice().sort((a, b) => Math.sign(a.data.order - b.data.order))
    }

    eleventyConfig.addFilter("sortByPageOrder", sortByPageOrder);

    eleventyConfig.addShortcode("questions", shortcodes.insertQuestions);
    eleventyConfig.addShortcode("panopto", shortcodes.insertPanopto);

    return {
      pathPrefix: isProduction ? "/programming-intro/" : '/',
      dir: {
        input: "./src",      
        output: "./public",
        includes: "_includes"
      }
    };
};