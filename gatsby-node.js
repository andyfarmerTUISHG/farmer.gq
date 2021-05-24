/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
 const path = require(`path`);

 function countArticlesInTags(articles) {
   // Return the articles with counts
   const counts = articles
     .map((article) => article.tags)
     .flat()
     .reduce((acc, tag) => {
       // check if this is an existing tag
       const existingTag = acc[tag.id];
       if (existingTag) {
         // if it is increment by 1
         existingTag.count += 1;
       } else {
         // otherwise create a new entry in our acc and set it to one
         acc[tag.id] = {
           id: tag.id,
           name: tag.name,
           count: 1,
         };
       }
       return acc;
     }, {});
   // sort them based on their count
   // AS its an object convert
   const sortedTags = Object.values(counts).sort((a, b) => b.count - a.count);
   return sortedTags;
 }
 
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
       path: `/articles/${slug.current}`,
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
 
 async function turnTagsIntoPages({ graphql, actions }) {
   console.log(`_________________________________________`);
   console.log(`____ 🏗️ - 🏷️  Building Tags         ___`);
   console.log(`_________________________________________`);
   // 1.  Get a template for this page
   const { createPage } = actions;
   const tagTemplate = path.resolve('./src/pages/tags.js');
   // 2 Query All Tags
   const {
     data: { articles },
   } = await graphql(`
     query {
       articles: allSanityArticle {
         nodes {
           tags {
             id
             name
           }
           name
           origurl
         }
       }
     }
   `);
 
   const tagsWithCounts = countArticlesInTags(articles.nodes);
   // 3. Loop Over Each Tag and create a page for each
   tagsWithCounts.forEach((tag) => {
     createPage({
       path: `tags/${tag.name}`,
       component: tagTemplate,
       context: {
         tag: tag.name,
         tagRegex: `/${tag.name}/i`,
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
 
   await Promise.all([turnArticlesIntoPages(params), turnTagsIntoPages(params)]);
 };
 