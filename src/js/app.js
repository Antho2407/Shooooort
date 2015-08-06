window.jQuery = window.$ = require("jquery");
var React = require('react');
window.React = React;

var HomePage = require('./components/views/home.react');
var Footer = require('./components/footer.react');

var App = React.createClass({

	render: function() {
		return (
			<div id="main-container">
			<div className="row" id="rowMessages">
    			<HomePage/>
    		</div>
    		<div className="row myFooter extra-top">
    			<Footer/>
    		</div>
			</div>
    	);
   }
});

module.exports = App;

React.render(<App/>, document.body);