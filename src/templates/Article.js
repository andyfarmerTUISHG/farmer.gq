import { graphql } from 'gatsby';
import React from 'react';

import BlockContent from '@sanity/block-content-to-react';

export default function Article({ data }) {
  const {
    article: { name, bodycopy },
  } = data;

  return (
    <div>
      <h1>{name}</h1>
      <h3>Author: </h3>
      <article>
        <BlockContent blocks={bodycopy} />
      </article>
    </div>
  );
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
// graphql queries need to be typed - cant just tell the parameters coming in
export const query = graphql`
  query($slug: String!) {
    article: sanityArticle(slug: { current: { eq: $slug } }) {
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
