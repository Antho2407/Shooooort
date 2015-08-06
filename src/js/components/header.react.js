var React = require('react');

var Header = React.createClass({

	render: function() {
		return (
    		<div className="row basic-margin">
	    		<div id="logo" className="text-accent six columns alpha"><u>Shooooort</u></div>     
	    		<div className="text-secondary six columns text-right omega vertical-bottom">The link shortener with a long name</div>
			</div>
    	);
   }
});

module.exports = Header;