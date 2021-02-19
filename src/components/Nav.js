import React from 'react'

function Nav() {
  return (
    <nav>
      This is my navigation component
      <ul>
        <li><a href="/articles/">Articles</a></li>
        <li><a href="/tags">Tags</a></li>
        <li><a href="/journal">Journal</a></li>
        <li><a href="/learning">Learning</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/work">Work</a></li>
      </ul>
    </nav>
  )
}

export default Nav
