var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  render: function () {
    return (
      <div>Hello ReactJS Program!</div>
    )
  }
});

var HelloUser = React.createClass({
  render: function () {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
});

var FriendsContainer = React.createClass({
  render: function () {
    var name = 'Paul Grever';
    var friends = ['Tahra Johnson', 'Antonio Elias', 'Greg Smiley']
    return (
      <div>
        <h3>Name: {name}</h3>
        <ShowList names={friends} />
      </div>
    )
  }
});

var ShowList = React.createClass({
  render: function () {
    var listItems = this.props.names.map(function (friend) {
      return <li> {friend} </li>
    });
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
})

ReactDOM.render(<FriendsContainer />, document.getElementById('app'));
