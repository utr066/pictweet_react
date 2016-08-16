// app/assets/javascripts/main.js.jsx
  $(function() {
    ReactDOM.render(
    <TweetsBox url="/messages"/>,
      document.getElementById('content')
    );
  });