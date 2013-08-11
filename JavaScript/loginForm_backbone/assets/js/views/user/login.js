var LoginView = Backbone.View.extend({
  events: {
    "click input[type=submit]": 'login'
  },

  initialize: function(){
      console.log(this.$el.length);
  },

  login: function(e) {
    e.preventDefault();
    this.model.set('username', $('#username').val());
    this.model.set('password', $('#password').val());
    this.model.login();
  }
});