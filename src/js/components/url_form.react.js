var React = require('react');
var UrlActions = require('../actions/UrlActions');

var Header = React.createClass({

	getInitialState: function() {
    	return {value: "", disabled: "disabled"};
	},

	handleChange: function(event) {
		var input = event.target.value;
		if(input==""){
			this.setState({disabled:"disabled"});
		}else{
			this.setState({disabled:""});
		}
	    this.setState({value: event.target.value});
	},

	handleClickAdd: function(input) {
		UrlActions.add(input);
	},	

	render: function() {
		return (
    		<div className="row">
	    		<div className="text-accent nine columns">
	    			<input type="text" id="input-url" name="input-url" value={this.state.value} onChange={this.handleChange}></input>
	    		</div>    
	    		<div className="text-secondary three text-right">
	    			<button id="button-validate" disabled={this.state.disabled} onClick={this.handleClickAdd.bind(this, this.state.value)}>Shorten this link</button>
	    		</div>
			</div>
    	);
   }
});

module.exports = Header;