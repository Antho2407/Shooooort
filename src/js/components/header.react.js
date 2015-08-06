var React = require('react');

var Header = React.createClass({

	render: function() {
		return (
    		<div className="row">
	    		<div id="logo" className="text-accent eight columns"><u>Shooooort</u></div>     
	    		<div className="text-secondary four columns text-right">The link shortener with a long name</div>
			</div>
    	);
   }
});

module.exports = Header;