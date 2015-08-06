var React = require('react');

var Header = React.createClass({

	render: function() {
		return (
    		<div className="row">
	    		<div className="text-accent six columns">
	    			<input type="text" id="input-url" name="input-url"></input>
	    		</div>     
	    		<div className="text-secondary six columns text-right">
	    			<button id="button-validate">Shorten this link</button>
	    		</div>
			</div>
    	);
   }
});

module.exports = Header;