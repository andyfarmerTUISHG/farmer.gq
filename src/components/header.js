import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Nav from './Nav';
import Icon from '../assets/svg/andyfarmer.svg';

const Header = ({ siteTitle }) => (
  <header style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
          title={siteTitle}
        >
          <Icon className="logo" style={{
            height: `auto`,
              width: 200,
              marginBottom: `1.45rem`,
            }}/>

        </Link>
      </h1>
      <Nav />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
