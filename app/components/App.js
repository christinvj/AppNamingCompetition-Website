var React = require('react');
var Home = require('./Home.js');

var MyComponentClass = React.createClass ({
	render: function () {
		return (
            <div>
                <h1>Hello world</h1>
                <Home />
            </div>
		);
	}
});

module.exports = MyComponentClass;