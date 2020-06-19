const fs = require('fs');
// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = (api) => {
  api.loadSource(({ addCollection }) => {
    const categoriesFile = `${process.env.CONTENT_DIR}/blog/categories.json`;
    const categoriesExist = fs.existsSync(categoriesFile);
    if (categoriesExist) {
      const categories = JSON.parse(fs.readFileSync(categoriesFile));
      const categoriesCollection = addCollection('BlogCategory');
      categories.forEach((category) => {
        categoriesCollection.addNode(category);
      });
    }
  });

  api.onCreateNode((options) => {
    if (options.path) {
      // Trim last /
      const sitUrl = process.env.SITE_URL.replace(/\/+$/g, '');
      return {
        ...options,
        publicPath: sitUrl + options.path,
      };
    }
    return options;
  });

  api.createPages((/* { createPage } */) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
