import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import PropTypes from 'prop-types';

function Code({ node }) {
  if (!node || !node.code) {
    return null;
  }
  const { language, code } = node;
  console.log(node);
  return (
    <SyntaxHighlighter language={language || 'text'}>{code}</SyntaxHighlighter>
  );
}

Code.propTypes = {
  node: PropTypes.object,
};

export default Code;
