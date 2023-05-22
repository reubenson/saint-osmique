const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPassthroughCopy("assets/*");
  // eleventyConfig.addPassthroughCopy({ "favicon.png": "/" });

  return {
    dir: {
      input: "src",
      layouts: "_layouts",
      output: "docs"
    },
    pathPrefix: "/saint-osmique/" // temporary config while serving from reubenson.com
  }
};