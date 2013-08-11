var LoginFormApp = new (Backbone.Router.extend({
    routes: {
        "": "index"
    },
    initialize: function() {

    },
    index: function() {

    },
    start: function() {
        this.loginView = new LoginView({
            model: new User(),
            el: $('#login-area')
        });
        this.loginView.render();
    },
    show: function(id) {
        this.todoItems.focusOnTodoItem(id);
    }
}));