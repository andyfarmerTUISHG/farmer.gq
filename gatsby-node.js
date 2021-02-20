/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);

async function turnArticlesIntoPages({ graphql, actions }) {
  console.log(`_________________________________________`);
  console.log(`____ 🏗️ - 📝 Building Articles         ___`);
  // 1.  Get a template for this page
  const { createPage } = actions;

  // 2. Query All Articles
  const {
    data: { articles },
  } = await graphql(`
    query {
      articles: allSanityArticle {
        totalCount
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. Loop over each article
  const articleTemplate = path.resolve(`./src/templates/Article.js`);
  articles.nodes.forEach((node) => {
    const { name, slug } = node;
    console.log(`name ${name} - ${slug.current}`);
    createPage({
      path: `articles/${slug.current}`,
      component: articleTemplate,
      context: {
        slug: slug.current,
      },
    });
  });
  // 4. Figure out how many pages based on number of articles, and how many pages
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(articles.totalCount / pageSize);
  console.log(
    `There are ${articles.totalCount} articles and there should be ${pageSize} per page\n total number of pages required ${pageCount}`
  );
  // 4. Loop from 1 to n - and create pages for them
  Array.from({ length: pageCount }).forEach((_, i) => {
    console.log(`Creating page ${i}`);
    actions.createPage({
      path: `articles/${i + 1}`,
      component: path.resolve(`./src/pages/articles.js`),
      context: {
        pagination: i + 1,
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: 'eval-source-map',
  });
};

exports.createPages = async (params) => {
  // Create Pages Dynamically
  console.log(`_________________________________________`);
  console.log(`____ 🏗️ - 📄 Building Pages            ___`);

  await Promise.all([turnArticlesIntoPages(params)]);
};
