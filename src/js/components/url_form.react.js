var React = require('react');

var Header = React.createClass({

	getInitialState: function() {
    	return {value: ""};
	},

	handleChange: function(event) {
		var input = event.target.value;
		if(input==""){
			$("#button-validate").addClass("disabled");
			console.log("test" + input);
		}else{
			$("#button-validate").removeClass("disabled");
			console.log("test2" + input);
		}
	    this.setState({value: event.target.value});
	},	

	render: function() {
		return (
    		<div className="row">
	    		<div className="text-accent nine columns">
	    			<input type="text" id="input-url" name="input-url" value={this.state.value} onChange={this.handleChange}></input>
	    		</div>    
	    		<div className="text-secondary three text-right">
	    			<button id="button-validate" className="disabled">Shorten this link</button>
	    		</div>
			</div>
    	);
   }
});

module.exports = Header;