import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  border-top: 2px solid var(--purple);
  padding-top: 3rem;
  text-align: center;
`;

function footer() {
  return (
    <FooterStyles>
      © {new Date().getFullYear()}, Built with Love and Effort
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby </a> by Andy Farmer
    </FooterStyles>
  );
}

export default footer;
