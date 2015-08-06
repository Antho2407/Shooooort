var React = require('react');

var Header = React.createClass({

	render: function() {
		return (
			<div>
				<div className="row">
					<div className="six columns">
						<h1 className="section">Previously shortened by you</h1>
					</div>
					<div className="six columns">
						<a className="button-clear text-accent">Clear history</a>
					</div>
				</div>
	    		<table className="u-full-width">
				  <thead>
				    <tr className="all-caps">
				      <th>Link</th>
				      <th>Visits</th>
				      <th>Last visited</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <td>Dave Gamache</td>
				      <td>26</td>
				      <td>Male</td>
				    </tr>
				    <tr>
				      <td>Dwayne Johnson</td>
				      <td>42</td>
				      <td>Male</td>
				    </tr>
				  </tbody>
				</table>
			</div>
    	);
   }
});

module.exports = Header;