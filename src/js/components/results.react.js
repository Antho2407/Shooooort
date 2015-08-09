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
				<tr className="item-url" key={url_id}>
			      <td><span className="url-body">shooooort.com/</span><span className="text-accent url-body">{item.shortcode}</span><span className="span-click text-accent url-click">Click to copy this link</span><div className="text-unimportant">{item.original}</div></td>
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
	    		<table id="table-results" className="u-full-width">
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

	    $( ".item-url" ).hover(
		  function() {
		    $( this ).find('.span-click').show();
		  }, function() {
		    $( this ).find('.span-click').hide();
		  }
		);

	    $(".highlighted").removeClass("highlighted");
		$(".item-url").first().addClass("highlighted");
	}
});

module.exports = Header;