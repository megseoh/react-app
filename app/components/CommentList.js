import React from 'react';

var CommentList = React.createClass({
  render: function() {
    console.log(this.props.comments);
    return <div className="row" >
      { this.props.comments.map((comment) => <div key={ comment._id } className={ styles.comment }>
          <div>{ comment.user.name }:</div>
          <div>{ comment.content }</div>
        </div>
      )}
    </div>
  }
});

module.exports = CommentList;