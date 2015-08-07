var React = require('react');
var UrlStore = require('../stores/UrlStore');
var UrlActions = require('../actions/UrlActions');
var Moment = require('Moment');

var VelocityTransitionGroup = require('../VelocityTransitionGroup');
require('velocity-animate');
require('velocity-animate/velocity.ui');

function getUrlState() {
  return UrlStore.getAll();
}

var Header = React.createClass({

	handleClickClear: function() {
		UrlActions.clear();
	},

	componentDidMount: function() {
		UrlStore.addChangeListener(this.onChange);
	    UrlActions.init();
	},

	componentWillUnmount: function() {
	    UrlStore.removeChangeListener(this.onChange);
	},

	getInitialState: function() {
		return { url: getUrlState() };
	},

	render: function() {

		var items = this.state.url.map(function(item, i) {

			var url_id = item.shortcode;
			
			return ( 
				<tr className="" key={url_id}>
			      <td>shooooort.com/<span className="text-accent">{item.shortcode}</span><div className="text-unimportant">{item.original}</div></td>
			      <td className="text-center">{item.redirectCount}</td>
			      <td className="text-center">{Moment(item.lastSeenDate).fromNow()}</td>
			    </tr>      
				);
		}.bind(this));

		return (
			<div>
				<div className="row">
					<div className="six columns">
						<h1 className="section">Previously shortened by you</h1>
					</div>
					<div className="six columns">
						<a className="button-clear text-accent" onClick={this.handleClickClear}>Clear history</a>
					</div>
				</div>
	    		<table className="u-full-width">
				  <thead>
				    <tr className="all-caps">
				      <th className="big-column">Link</th>
				      <th className="text-center secondary-column">Visits</th>
				      <th className="text-center secondary-column">Last visited</th>
				    </tr>
				  </thead>
					  <VelocityTransitionGroup component="tbody" transitionName="slide-forward">
					    {items}
					  </VelocityTransitionGroup>
				</table>
			</div>
    	);
   },

   onChange: function() {
	    this.setState({ url: getUrlState()});
	}
});

module.exports = Header;