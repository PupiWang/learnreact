var React = require('react');
var CommentBox = require('./CommentBox.jsx');

React.render(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('content')
  );
