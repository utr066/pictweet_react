   var TweetsBox = React.createClass({
  getInitialState: function() {
    return {
      tweets: []
    };
  },

     componentDidMount: function() {
     $.ajax({
       url:      this.props.url,
       dataType: 'json',
       cache:    false,
       success: function(tweets) {
         this.setState({ tweets: tweets });
       }.bind(this),
       eror: function(_xhr, status, err) {
         console.error(this.props.url, status, err.toString());
       }.bind(this)
     });
   },


  handleMessageSubmit: function(tweet) {
     tweet.id = new Date();
      var newMessages = this.state.tweets.concat(tweet);
      this.setState({ tweets: newMessages });
    },

    render: function() {
      var tweetItems = this.state.tweets.map(function(tweet) {
        return (
          <TweetItem key={tweet.id} tweet={tweet}/>
        );
      });

      return (
        <div className="messageBox">
          {tweetItems}
          <MessageForm onMessageSubmit={this.handleMessageSubmit}/>
        </div>
      );
    }
  });
