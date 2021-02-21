import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

export default ({ node }) => {
  if (!node || !node.code) {
    return null;
  }
  const { language, code } = node;
  console.log(node);
  return (
    <SyntaxHighlighter language={language || 'text'}>{code}</SyntaxHighlighter>
  );
};
