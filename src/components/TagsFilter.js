import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

function countArticlesInTags(articles) {
  // Return the articles with counts
  const counts = articles
    .map((article) => article.tags)
    .flat()
    .reduce((acc, tags) => {
      // check if this is an existing topping
      const existingTag = acc[tags.id];
      if (existingTag) {
        // console.log(existingTag);
        // if it is increment by 1
        existingTag.count += 1;
      } else {
        // console.log('new topping', topping.name);
        // otherwise create a new entry in our acc and set it to one
        acc[tags.id] = {
          id: tags.id,
          name: tags.name,
          count: 1,
        };
      }
      return acc;
    }, {});
  // sort them based on their count
  // AS its an object convert
  const sortedTagsWithCounts = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortedTagsWithCounts;
}

export default function TagsFilter() {
  // Grab a list of all tags

  const { articles } = useStaticQuery(graphql`
    query {
      articles: allSanityArticle {
        nodes {
          id
          name
          tags {
            id
            name
          }
        }
      }
    }
  `);
  // Count how many articles are in each topping
  const tagsWithCounts = countArticlesInTags(articles.nodes);

  return (
    <div>
      {tagsWithCounts.map((topping) => (
        <Link to={`/tags/${topping.name}`} key={topping.id}>
          <span className="name">{topping.name} </span>
          <span className="count">{topping.count}</span>
        </Link>
      ))}
    </div>
  );
}
