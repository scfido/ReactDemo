﻿var CommentBox = React.createClass({
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
          <div className="commentBox">
            <h2>Comments</h2>
            <CommentList data={this.state.data} />
            <CommentForm onCommentSubmit={this.handleCommentSubmit} />
          </div>
        );
    }
});

var CommentList = React.createClass({
    render: function () {
        var commentNodes = this.props.data.map(function (comment, index) {
            return (
                <Comment author={comment.author} key={index}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

var CommentForm = React.createClass({
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
          <form className="commentForm" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Your name" ref="author"/>
            <input type="text" placeholder="Say something..." ref="text" />
            <input type="submit" value="Post" />
          </form>
        );
    }
});

var Comment = React.createClass({
    render: function () {
        var converter = new showdown.Converter();
        var rawMarkup = converter.makeHtml(this.props.children.toString());
        return (
            <div className="comment">
            <h3 className="commentAuthor">
                {this.props.author}
            </h3>
            <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
            </div>
      );
    }
});

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={5000} />,
  document.getElementById('content')
);
