import { Link } from 'gatsby';
import React from 'react';
import NavStyles from '../styles/NavStyles';

function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/articles/">Articles</Link>
        </li>
        <li>
          <Link to="/tags/">Tags</Link>
        </li>
        <li>
          <Link to="/journal/">Journal</Link>
        </li>
        <li>
          <Link to="/learning/">Learning</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/articles/mac-setup/">Mac Setup</Link>
        </li>
        <li>
          <Link to="/work/">Work</Link>
        </li>
        <li>
          <Link to="/animation/">CSS Animation</Link>
        </li>
      </ul>
    </NavStyles>
  );
}

export default Nav;
