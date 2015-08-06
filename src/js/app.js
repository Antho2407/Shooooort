window.jQuery = window.$ = require("jquery");
var React = require('react');
window.React = React;

var Header = require('./components/header.react');
var UrlForm = require('./components/url_form.react');

var App = React.createClass({

	render: function() {
		return (
			<div id="container" className="w3-center">
                <Header/>
                <UrlForm/>
			</div>
    	);
   }
});

module.exports = App;

React.render(<App/>, document.body);