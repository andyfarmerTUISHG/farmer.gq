import styled from 'styled-components';

const NavStyles = styled.div`
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0 1.3rem;
    align-content: center;
    align-items: center;
    position: relative;
    list-style: none;
    background: var(--white);
    padding: 2rem;
  }
  //Spread the image over 2 rows
  .gatsby-image-wrapper {
    grid-row: span 2;
    height: 100%;
  }
  h2 {
    font-size: clamp(2rem, 1vw, 7rem);
  }
  a {
    display: block;
    text-align: center;
  }
  p {
    margin: 0;
  }
  button {
    font-size: 1.5rem;
    font-size: clamp(1.3rem, 1.4vw, 2.5rem);
  }
  button + button {
    margin-left: 1rem;
  }
  .remove {
    background: none;
    color: var(--red);
    font-size: 3rem;
    position: absolute;
    top: 0;
    right: 0;
    box-shadow: none;
    line-height: 1rem;
  }
`;

export default NavStyles;
