var React = require('react');
var UrlActions = require('../actions/UrlActions');

var Header = React.createClass({

	getInitialState: function() {
    	return {value: "", disabled: "disabled"};
	},

	handleInput: function(event) {
        if (event.keyCode == 13) {
        	event.preventDefault();
            $('#button-validate').click();
        }
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
    		<div className="row row-form">
	    		<div className="text-accent nine columns">
	    			<input type="text" id="input-url" name="input-url" placeholder="Paste the link you want to shorten here" onKeyDown={this.handleInput} value={this.state.value} onChange={this.handleChange}></input>
	    		</div>    
	    		<div className="text-secondary three columns text-right">
	    			<button id="button-validate" disabled={this.state.disabled} onClick={this.handleClickAdd.bind(this, this.state.value)}>Shorten this link</button>
	    		</div>
			</div>
    	);
   }
});

module.exports = Header;