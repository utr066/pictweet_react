// app/assets/javascripts/components/message_form.js.jsx
 var MessageForm = React.createClass({
    handleSubmit: function(event) {
     event.preventDefault();
     var user = this.refs.user.value.trim();
     var text = this.refs.text.value.trim();
     if (!user || !text) {
       return;
     }
     this.props.onMessageSubmit({ user: user, text: text });
     // フォームの内容を削除
     this.refs.user.value = '';
     this.refs.text.value = '';
   },

    render: function() {
      return (
       <form className="commentForm" onSubmit={this.handleSubmit}>
         <input type="text" placeholder="Yousr name" ref="user" />
         <input type="text" placeholder="Message" ref="text"/>
          <input type="submit" value="Post" />
        </form>
      );
    }
  });
