const _pick = require("lodash.pick");

module.exports = eleventyConfig => {
  eleventyConfig.addFilter("sortOn", (arr, key) => {
    return arr.sort((itemA, itemB) => {
      const valueA = itemA[key];
      const valueB = itemB[key];
      if (valueA > valueB) {
        return 1;
      }
      if (valueB > valueA) {
        return -1;
      }
      return 0;
    });
  });

  eleventyConfig.addFilter("keys", (arr=[], keys=[]) => {
    return arr.map(item => _pick(item, keys));
  });

  return {
    dir: {
      input: "src"
    }
  };
};
