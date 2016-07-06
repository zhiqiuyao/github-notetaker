var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
	render: function () {
		// body...
		return (
			<h3>
			Hello world
			</h3>
		);
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));