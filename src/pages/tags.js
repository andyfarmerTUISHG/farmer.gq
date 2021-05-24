import React from 'react';
import SEO from '../components/seo';
import TagsFilter from '../components/TagsFilter';

function tags({ data, pageContext }) {
  return (
    <div>
      <SEO title="Tags" />
      List of tags created to give sub pages
      <TagsFilter />
      <aside>Graphql name your graphql query with name: query</aside>
    </div>
  );
}

export default tags;
