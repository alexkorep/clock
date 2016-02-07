/** @jsx React.DOM */
var React = require('react')
var ReactDom = require('react-dom')
var App = require('./components/App')
var attachFastClick = require('fastclick')

attachFastClick(document.body)

ReactDom.render(
  <App />,
  document.getElementById('react')
)
