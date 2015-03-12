var React = require('../../bower_components/react/react.js');
var CommentBox = require('./CommentBox.jsx');

React.render(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('content')
  );
