module.exports = function(eleventyConfig) {

    const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

    eleventyConfig.addPassthroughCopy({"src/_root/*.*": "./"});
    
    eleventyConfig.setDataDeepMerge(true);

    // syntax highlighting
    eleventyConfig.addPlugin(syntaxHighlight);

    return {
      dir: {
        input: "./src",      
        output: "./public",
        includes: "_includes"
      }
    };
};