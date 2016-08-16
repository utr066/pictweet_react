var TweetItem = React.createClass({
  render: function() {
    return (
<div class="content__post">
  <p>
        <span>{this.props.tweet.text}</span>
  </p>
  <span class="name">
      <span>投稿者</span>
      {this.props.tweet.user}
  </span>
</div>
    );
  }
});


