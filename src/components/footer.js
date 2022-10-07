import React from 'react';
import styled from 'styled-components';
import TagManager from 'react-gtm-module'

const FooterStyles = styled.div`
  border-top: 2px solid var(--purple);
  padding-top: 3rem;
  text-align: center;
`;


// const tagManagerArgs = {
//     gtmId: 'GTM-NS99NRS'
// }

// TagManager.initialize(tagManagerArgs)

function footer() {
  return (
    <FooterStyles>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> by <a href="https://farmer-gq.netlify.app/">Andy Farmer</a>
    </FooterStyles>
  );
}

export default footer;
