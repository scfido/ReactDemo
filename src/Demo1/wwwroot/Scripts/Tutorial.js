var CommentBox = React.createClass({displayName: "CommentBox",
    getInitialState: function () {
        return { data: [] };
    },

    loadCommentsFromServer: function () {
        var jqxhr = $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            context: this
        })
         .done(function (data) {
             this.setState({ data: data });
         })
         .fail(function (xhr, status, err) {
             console.error(this.props.url, status, err.toString());
         })
    },

    handleCommentSubmit: function (comment) {
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({ data: newComments });
        var jqxhr = $.ajax({
            type: "POST",
            url: this.props.url,
            contentType: "application/json",
            dataType: 'json',
            data: JSON.stringify(comment),
            context: this
        })
         .done(function (data) {
             this.setState({ data: data });
         })
         .fail(function (xhr, status, err) {
             console.error(this.props.url, status, err.toString());
         })
    },

    componentDidMount: function () {
        this.loadCommentsFromServer();
        //setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },

    render: function () {
        return (
          React.createElement("div", {className: "commentBox"}, 
            React.createElement("h2", null, "Comments"), 
            React.createElement(CommentList, {data: this.state.data}), 
            React.createElement(CommentForm, {onCommentSubmit: this.handleCommentSubmit})
          )
        );
    }
});

var CommentList = React.createClass({displayName: "CommentList",
    render: function () {
        var commentNodes = this.props.data.map(function (comment, index) {
            return (
                React.createElement(Comment, {author: comment.author, key: index}, 
                    comment.text
                )
            );
        });
        return (
            React.createElement("div", {className: "commentList"}, 
                commentNodes
            )
        );
    }
});

var CommentForm = React.createClass({displayName: "CommentForm",
    handleSubmit: function(e) {
        e.preventDefault();
        var author = this.refs.author.value.trim();
        var text = this.refs.text.value.trim();
        if (!text || !author) {
            return;
        }

        this.props.onCommentSubmit({ author: author, text: text });
        // TODO: send request to the server
        this.refs.author.value = '';
        this.refs.text.value = '';
        return;
    },
    render: function () {
        return (
          React.createElement("form", {className: "commentForm", onSubmit: this.handleSubmit}, 
            React.createElement("input", {type: "text", placeholder: "Your name", ref: "author"}), 
            React.createElement("input", {type: "text", placeholder: "Say something...", ref: "text"}), 
            React.createElement("input", {type: "submit", value: "Post"})
          )
        );
    }
});

var Comment = React.createClass({displayName: "Comment",
    render: function () {
        var converter = new showdown.Converter();
        var rawMarkup = converter.makeHtml(this.props.children.toString());
        return (
            React.createElement("div", {className: "comment"}, 
            React.createElement("h3", {className: "commentAuthor"}, 
                this.props.author
            ), 
            React.createElement("span", {dangerouslySetInnerHTML: {__html: rawMarkup}})
            )
      );
    }
});

ReactDOM.render(
  React.createElement(CommentBox, {url: "/api/comments", pollInterval: 5000}),
  document.getElementById('content')
);
