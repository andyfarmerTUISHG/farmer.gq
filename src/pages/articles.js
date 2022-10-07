import { graphql, Link } from 'gatsby';
import React from 'react';
import SEO from '../components/seo';
import Pagination from '../components/pagination';
import Layout from '../components/layout';

export default function articles({ data, pageContext }) {
  console.log(data);
  console.log(process.env)
  return (
    <Layout>


    <div>
      <SEO title="Articles" />
      <Pagination
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        totalCount={data.articles.totalCount}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base="/articles"
      />
      <ul>
        {data.articles.nodes.map((article, index) => (
          <li key={`${article.slug.current}-${index}`}>
            <Link to={`/articles/${article.slug.current}`}>{article.name}</Link>
          </li>
        ))}
      </ul>
    </div>
    </Layout>
  );
}

export const query = graphql`
  query ArticlesQuery($skip: Int = 0, $pageSize: Int = 50) {
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
