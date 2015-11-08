var HelloWorld = React.createClass({displayName: "HelloWorld",
    render: function () {
        return (
            React.createElement("div", null, "Hello ", this.props.name)
        );
    }
});

React.render(
  React.createElement(HelloWorld, {name: "www"}),
  document.getElementById('content')
);