import { graphql, Link } from 'gatsby';
import React from 'react';
import SEO from '../components/seo';

export default function articles({ data, pageContext }) {
  console.log(data);
  return (
    <div>
      <SEO title="Articles" />
      <ul>
        {data.articles.nodes.map((article, index) => (
          <li key={`${article.slug.current}-${index}`}>
            <Link to={article.slug.current}>{article.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const query = graphql`
  query ArticlesQuery($skip: Int = 0, $pageSize: Int = 2) {
    articles: allSanityArticle(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        id
        name
        slug {
          current
        }
        bodycopy {
          style
          list
          children {
            text
            marks
            _type
            _key
          }
          _type
          _key
        }
        tags {
          name
        }
      }
    }
  }
`;
