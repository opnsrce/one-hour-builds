var User = Backbone.Model.extend({
    defaults: {
        username: "",
        password: ""
    },
    login: function() {
        var msg = '';
        if (this.attributes.username === "user" & this.attributes.password === "password") {
            msg = "The username and password you entered is valid.";
        } else {
            msg = "The username and password you entered is not valid.";
        }
        alert(msg);
    }
});