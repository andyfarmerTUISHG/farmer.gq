import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import BlockContent from '@sanity/block-content-to-react';
import serializers from '../utils/serializers';

const ArticleStyles = styled.div`
  display: grid;
  grid-template-columns: 80vmax 1fr;
  gap: 20px;
  aside pre {
    overflow: hidden;
  }
`;

export default function Article({ data }) {
  const {
    article: { name, _rawBodycopy },
  } = data;

  return (
    <ArticleStyles>
      <article>
        <h1>{name}</h1>
        <h3>Author: </h3>
        <BlockContent blocks={_rawBodycopy} serializers={serializers} />
      </article>
      <aside />
    </ArticleStyles>
  );
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
// graphql queries need to be typed - cant just tell the parameters coming in
export const query = graphql`
  query($slug: String!) {
    article: sanityArticle(slug: { current: { eq: $slug } }) {
      _rawBodycopy
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
      name
      _createdAt(locale: "", fromNow: false, formatString: "", difference: "")
      createddate(difference: "", formatString: "", fromNow: false, locale: "")
      updateddate(difference: "", formatString: "", fromNow: false, locale: "")
    }
  }
`;
