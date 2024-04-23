module.exports = function(eleventyConfig) {
  // Copy `src/style.css` to `_site/styles.css`
  eleventyConfig.addPassthroughCopy("src/styles.css");
  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};